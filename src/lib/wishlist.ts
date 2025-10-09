// Wishlist functionality with localStorage persistence
interface WishlistItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  addedAt: number;
  quantity: number;
}

interface WishlistData {
  items: WishlistItem[];
  lastUpdated: number;
  version: string;
}

class WishlistManager {
  private storageKey = 'foundingpaws_wishlist';
  private version = '1.0.0';
  private listeners: Set<(items: WishlistItem[]) => void> = new Set();

  constructor() {
    // Listen for storage changes from other tabs
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', this.handleStorageChange.bind(this));
    }
  }

  private handleStorageChange(event: StorageEvent): void {
    if (event.key === this.storageKey && event.newValue) {
      try {
        const data: WishlistData = JSON.parse(event.newValue);
        this.notifyListeners(data.items);
      } catch (error) {
        console.error('Error parsing wishlist data from storage:', error);
      }
    }
  }

  private getWishlistData(): WishlistData {
    if (typeof window === 'undefined') {
      return { items: [], lastUpdated: Date.now(), version: this.version };
    }

    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const data: WishlistData = JSON.parse(stored);
        // Migrate data if version changed
        if (data.version !== this.version) {
          return this.migrateData(data);
        }
        return data;
      }
    } catch (error) {
      console.error('Error reading wishlist from storage:', error);
    }

    return { items: [], lastUpdated: Date.now(), version: this.version };
  }

  private saveWishlistData(data: WishlistData): void {
    if (typeof window === 'undefined') return;

    try {
      const updatedData = {
        ...data,
        lastUpdated: Date.now(),
        version: this.version,
      };
      localStorage.setItem(this.storageKey, JSON.stringify(updatedData));
      this.notifyListeners(updatedData.items);
    } catch (error) {
      console.error('Error saving wishlist to storage:', error);
    }
  }

  private migrateData(oldData: WishlistData): WishlistData {
    // Handle data migration between versions
    return {
      ...oldData,
      version: this.version,
    };
  }

  private notifyListeners(items: WishlistItem[]): void {
    this.listeners.forEach(listener => listener(items));
  }

  public addItem(item: Omit<WishlistItem, 'addedAt' | 'quantity'>): boolean {
    const data = this.getWishlistData();
    const existingItem = data.items.find(i => i.id === item.id);

    if (existingItem) {
      // Update quantity if item already exists
      existingItem.quantity += 1;
    } else {
      // Add new item
      data.items.push({
        ...item,
        addedAt: Date.now(),
        quantity: 1,
      });
    }

    this.saveWishlistData(data);
    return true;
  }

  public removeItem(itemId: string): boolean {
    const data = this.getWishlistData();
    const itemIndex = data.items.findIndex(i => i.id === itemId);

    if (itemIndex === -1) return false;

    data.items.splice(itemIndex, 1);
    this.saveWishlistData(data);
    return true;
  }

  public updateQuantity(itemId: string, quantity: number): boolean {
    if (quantity <= 0) {
      return this.removeItem(itemId);
    }

    const data = this.getWishlistData();
    const item = data.items.find(i => i.id === itemId);

    if (!item) return false;

    item.quantity = quantity;
    this.saveWishlistData(data);
    return true;
  }

  public clear(): void {
    const data: WishlistData = {
      items: [],
      lastUpdated: Date.now(),
      version: this.version,
    };
    this.saveWishlistData(data);
  }

  public getItems(): WishlistItem[] {
    return this.getWishlistData().items;
  }

  public getItemCount(): number {
    return this.getWishlistData().items.reduce((total, item) => total + item.quantity, 0);
  }

  public isInWishlist(itemId: string): boolean {
    return this.getWishlistData().items.some(item => item.id === itemId);
  }

  public getTotalValue(): number {
    return this.getWishlistData().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  public getItemsByCategory(category: string): WishlistItem[] {
    return this.getWishlistData().items.filter(item => item.category === category);
  }

  public subscribe(listener: (items: WishlistItem[]) => void): () => void {
    this.listeners.add(listener);
    
    // Return unsubscribe function
    return () => {
      this.listeners.delete(listener);
    };
  }

  public export(): string {
    const data = this.getWishlistData();
    return JSON.stringify(data, null, 2);
  }

  public import(jsonData: string): boolean {
    try {
      const data: WishlistData = JSON.parse(jsonData);
      
      // Validate data structure
      if (!data.items || !Array.isArray(data.items)) {
        throw new Error('Invalid wishlist data structure');
      }

      this.saveWishlistData(data);
      return true;
    } catch (error) {
      console.error('Error importing wishlist data:', error);
      return false;
    }
  }

  public getStats(): {
    totalItems: number;
    totalValue: number;
    categories: string[];
    oldestItem?: WishlistItem;
    newestItem?: WishlistItem;
  } {
    const items = this.getWishlistData().items;
    const categories = [...new Set(items.map(item => item.category))];
    
    let oldestItem: WishlistItem | undefined;
    let newestItem: WishlistItem | undefined;
    
    if (items.length > 0) {
      oldestItem = items.reduce((oldest, item) => 
        item.addedAt < oldest.addedAt ? item : oldest
      );
      newestItem = items.reduce((newest, item) => 
        item.addedAt > newest.addedAt ? item : newest
      );
    }

    return {
      totalItems: items.length,
      totalValue: this.getTotalValue(),
      categories,
      oldestItem,
      newestItem,
    };
  }
}

// Create global instance
export const wishlistManager = new WishlistManager();

// Export convenience functions
export const addToWishlist = (item: Omit<WishlistItem, 'addedAt' | 'quantity'>) => 
  wishlistManager.addItem(item);
export const removeFromWishlist = (itemId: string) => 
  wishlistManager.removeItem(itemId);
export const updateWishlistQuantity = (itemId: string, quantity: number) => 
  wishlistManager.updateQuantity(itemId, quantity);
export const clearWishlist = () => 
  wishlistManager.clear();
export const getWishlistItems = () => 
  wishlistManager.getItems();
export const getWishlistItemCount = () => 
  wishlistManager.getItemCount();
export const isInWishlist = (itemId: string) => 
  wishlistManager.isInWishlist(itemId);
export const getWishlistTotalValue = () => 
  wishlistManager.getTotalValue();
export const getWishlistItemsByCategory = (category: string) => 
  wishlistManager.getItemsByCategory(category);
export const subscribeToWishlist = (listener: (items: WishlistItem[]) => void) => 
  wishlistManager.subscribe(listener);
export const exportWishlist = () => 
  wishlistManager.export();
export const importWishlist = (jsonData: string) => 
  wishlistManager.import(jsonData);
export const getWishlistStats = () => 
  wishlistManager.getStats();
