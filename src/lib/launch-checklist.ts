// Launch checklist and go-live plan
interface ChecklistItem {
  id: string;
  category: 'technical' | 'content' | 'security' | 'performance' | 'seo' | 'analytics' | 'legal';
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'skipped';
  priority: 'critical' | 'high' | 'medium' | 'low';
  assignedTo?: string;
  dueDate?: Date;
  notes?: string;
  dependencies?: string[];
}

interface LaunchPlan {
  phase: string;
  tasks: ChecklistItem[];
  startDate: Date;
  endDate: Date;
  status: 'not-started' | 'in-progress' | 'completed';
}

interface LaunchReport {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  criticalIssues: number;
  overallProgress: number;
  phases: LaunchPlan[];
  nextSteps: string[];
  blockers: string[];
}

class LaunchChecklistManager {
  private checklist: Map<string, ChecklistItem> = new Map();
  private phases: LaunchPlan[] = [];

  constructor() {
    this.initializeChecklist();
    this.initializePhases();
  }

  private initializeChecklist(): void {
    const items: ChecklistItem[] = [
      // Technical Checklist
      {
        id: 'tech-001',
        category: 'technical',
        title: 'Domain & SSL Setup',
        description: 'Configure domain name and SSL certificate',
        status: 'pending',
        priority: 'critical',
        assignedTo: 'DevOps',
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'tech-002',
        category: 'technical',
        title: 'CDN Configuration',
        description: 'Set up Content Delivery Network for global performance',
        status: 'pending',
        priority: 'high',
        assignedTo: 'DevOps',
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'tech-003',
        category: 'technical',
        title: 'Database Migration',
        description: 'Migrate from development to production database',
        status: 'pending',
        priority: 'critical',
        assignedTo: 'Backend',
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'tech-004',
        category: 'technical',
        title: 'Environment Variables',
        description: 'Configure production environment variables',
        status: 'pending',
        priority: 'critical',
        assignedTo: 'DevOps',
        dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'tech-005',
        category: 'technical',
        title: 'Error Monitoring Setup',
        description: 'Configure Sentry or similar error monitoring',
        status: 'pending',
        priority: 'high',
        assignedTo: 'Frontend',
        dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      },

      // Content Checklist
      {
        id: 'content-001',
        category: 'content',
        title: 'Product Images Final Review',
        description: 'Review and approve all product images for quality',
        status: 'pending',
        priority: 'high',
        assignedTo: 'Design',
        dueDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'content-002',
        category: 'content',
        title: 'Content Proofreading',
        description: 'Final proofread of all text content',
        status: 'pending',
        priority: 'high',
        assignedTo: 'Content',
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'content-003',
        category: 'content',
        title: 'Legal Pages Review',
        description: 'Review AGB, Datenschutz, Impressum, Widerruf',
        status: 'pending',
        priority: 'critical',
        assignedTo: 'Legal',
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      },

      // Security Checklist
      {
        id: 'security-001',
        category: 'security',
        title: 'Security Headers',
        description: 'Configure security headers (CSP, HSTS, etc.)',
        status: 'pending',
        priority: 'critical',
        assignedTo: 'DevOps',
        dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'security-002',
        category: 'security',
        title: 'Penetration Testing',
        description: 'Conduct security penetration testing',
        status: 'pending',
        priority: 'high',
        assignedTo: 'Security',
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'security-003',
        category: 'security',
        title: 'Data Backup Strategy',
        description: 'Implement automated backup system',
        status: 'pending',
        priority: 'critical',
        assignedTo: 'DevOps',
        dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      },

      // Performance Checklist
      {
        id: 'perf-001',
        category: 'performance',
        title: 'Core Web Vitals Audit',
        description: 'Ensure all Core Web Vitals meet Google standards',
        status: 'pending',
        priority: 'high',
        assignedTo: 'Frontend',
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'perf-002',
        category: 'performance',
        title: 'Image Optimization',
        description: 'Optimize all images for web performance',
        status: 'pending',
        priority: 'high',
        assignedTo: 'Design',
        dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'perf-003',
        category: 'performance',
        title: 'Mobile Performance Test',
        description: 'Test performance on various mobile devices',
        status: 'pending',
        priority: 'high',
        assignedTo: 'QA',
        dueDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
      },

      // SEO Checklist
      {
        id: 'seo-001',
        category: 'seo',
        title: 'Meta Tags Optimization',
        description: 'Optimize all meta tags for search engines',
        status: 'pending',
        priority: 'high',
        assignedTo: 'SEO',
        dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'seo-002',
        category: 'seo',
        title: 'Sitemap Generation',
        description: 'Generate and submit XML sitemap',
        status: 'pending',
        priority: 'medium',
        assignedTo: 'SEO',
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'seo-003',
        category: 'seo',
        title: 'Google Analytics Setup',
        description: 'Configure Google Analytics 4 tracking',
        status: 'pending',
        priority: 'high',
        assignedTo: 'Analytics',
        dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      },

      // Analytics Checklist
      {
        id: 'analytics-001',
        category: 'analytics',
        title: 'Conversion Tracking',
        description: 'Set up conversion tracking for key actions',
        status: 'pending',
        priority: 'high',
        assignedTo: 'Analytics',
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'analytics-002',
        category: 'analytics',
        title: 'Heatmap Setup',
        description: 'Configure user behavior tracking',
        status: 'pending',
        priority: 'medium',
        assignedTo: 'Analytics',
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      },

      // Legal Checklist
      {
        id: 'legal-001',
        category: 'legal',
        title: 'GDPR Compliance',
        description: 'Ensure GDPR compliance for EU users',
        status: 'pending',
        priority: 'critical',
        assignedTo: 'Legal',
        dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      },
      {
        id: 'legal-002',
        category: 'legal',
        title: 'Cookie Consent',
        description: 'Implement cookie consent management',
        status: 'pending',
        priority: 'critical',
        assignedTo: 'Frontend',
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      },
    ];

    items.forEach(item => {
      this.checklist.set(item.id, item);
    });
  }

  private initializePhases(): void {
    this.phases = [
      {
        phase: 'Pre-Launch (Week 1)',
        tasks: this.getTasksByCategory('technical').concat(this.getTasksByCategory('security')),
        startDate: new Date(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        status: 'in-progress',
      },
      {
        phase: 'Content & Design (Week 2)',
        tasks: this.getTasksByCategory('content').concat(this.getTasksByCategory('performance')),
        startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        status: 'not-started',
      },
      {
        phase: 'SEO & Analytics (Week 3)',
        tasks: this.getTasksByCategory('seo').concat(this.getTasksByCategory('analytics')),
        startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
        status: 'not-started',
      },
      {
        phase: 'Final Testing & Launch (Week 4)',
        tasks: this.getTasksByCategory('legal'),
        startDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
        status: 'not-started',
      },
    ];
  }


  public updateTaskStatus(taskId: string, status: ChecklistItem['status'], notes?: string): boolean {
    const task = this.checklist.get(taskId);
    if (!task) return false;

    task.status = status;
    if (notes) {
      task.notes = notes;
    }

    this.checklist.set(taskId, task);
    return true;
  }

  public getTask(taskId: string): ChecklistItem | undefined {
    return this.checklist.get(taskId);
  }

  public getTasksByStatus(status: ChecklistItem['status']): ChecklistItem[] {
    return Array.from(this.checklist.values())
      .filter(item => item.status === status);
  }

  public getTasksByPriority(priority: ChecklistItem['priority']): ChecklistItem[] {
    return Array.from(this.checklist.values())
      .filter(item => item.priority === priority);
  }

  public getTasksByCategory(category: ChecklistItem['category']): ChecklistItem[] {
    return Array.from(this.checklist.values())
      .filter(item => item.category === category);
  }

  public getOverdueTasks(): ChecklistItem[] {
    const now = new Date();
    return Array.from(this.checklist.values())
      .filter(item => 
        item.dueDate && 
        item.dueDate < now && 
        item.status !== 'completed' && 
        item.status !== 'skipped'
      );
  }

  public getCriticalTasks(): ChecklistItem[] {
    return Array.from(this.checklist.values())
      .filter(item => item.priority === 'critical' && item.status !== 'completed');
  }

  public generateLaunchReport(): LaunchReport {
    const allTasks = Array.from(this.checklist.values());
    const completedTasks = allTasks.filter(t => t.status === 'completed').length;
    const pendingTasks = allTasks.filter(t => t.status === 'pending').length;
    const criticalIssues = this.getCriticalTasks().length;
    const overallProgress = (completedTasks / allTasks.length) * 100;

    const nextSteps = this.getNextSteps();
    const blockers = this.getBlockers();

    return {
      totalTasks: allTasks.length,
      completedTasks,
      pendingTasks,
      criticalIssues,
      overallProgress: Math.round(overallProgress * 100) / 100,
      phases: this.phases,
      nextSteps,
      blockers,
    };
  }

  private getNextSteps(): string[] {
    const nextSteps: string[] = [];
    const criticalTasks = this.getCriticalTasks();
    const overdueTasks = this.getOverdueTasks();

    if (criticalTasks.length > 0) {
      nextSteps.push(`Complete ${criticalTasks.length} critical tasks`);
    }

    if (overdueTasks.length > 0) {
      nextSteps.push(`Address ${overdueTasks.length} overdue tasks`);
    }

    const pendingHighPriority = this.getTasksByPriority('high')
      .filter(t => t.status === 'pending');
    
    if (pendingHighPriority.length > 0) {
      nextSteps.push(`Work on ${pendingHighPriority.length} high priority tasks`);
    }

    return nextSteps;
  }

  private getBlockers(): string[] {
    const blockers: string[] = [];
    const overdueTasks = this.getOverdueTasks();
    const criticalTasks = this.getCriticalTasks();

    if (overdueTasks.length > 0) {
      blockers.push(`${overdueTasks.length} tasks are overdue`);
    }

    if (criticalTasks.length > 0) {
      blockers.push(`${criticalTasks.length} critical tasks are incomplete`);
    }

    return blockers;
  }

  public exportChecklist(): string {
    const report = this.generateLaunchReport();
    return JSON.stringify({
      report,
      tasks: Array.from(this.checklist.values()),
      phases: this.phases,
      exportedAt: new Date().toISOString(),
    }, null, 2);
  }

  public getLaunchReadiness(): {
    ready: boolean;
    score: number;
    issues: string[];
  } {
    const criticalTasks = this.getCriticalTasks();
    const overdueTasks = this.getOverdueTasks();
    const pendingTasks = this.getTasksByStatus('pending');

    const issues: string[] = [];
    
    if (criticalTasks.length > 0) {
      issues.push(`${criticalTasks.length} critical tasks incomplete`);
    }
    
    if (overdueTasks.length > 0) {
      issues.push(`${overdueTasks.length} tasks overdue`);
    }

    const score = Math.max(0, 100 - (criticalTasks.length * 20) - (overdueTasks.length * 10));
    const ready = criticalTasks.length === 0 && overdueTasks.length === 0;

    return {
      ready,
      score,
      issues,
    };
  }
}

// Create global instance
export const launchChecklistManager = new LaunchChecklistManager();

// Export convenience functions
export const updateTaskStatus = (taskId: string, status: ChecklistItem['status'], notes?: string) => 
  launchChecklistManager.updateTaskStatus(taskId, status, notes);
export const getTask = (taskId: string) => 
  launchChecklistManager.getTask(taskId);
export const getTasksByStatus = (status: ChecklistItem['status']) => 
  launchChecklistManager.getTasksByStatus(status);
export const getCriticalTasks = () => 
  launchChecklistManager.getCriticalTasks();
export const getOverdueTasks = () => 
  launchChecklistManager.getOverdueTasks();
export const generateLaunchReport = () => 
  launchChecklistManager.generateLaunchReport();
export const getLaunchReadiness = () => 
  launchChecklistManager.getLaunchReadiness();
export const exportChecklist = () => 
  launchChecklistManager.exportChecklist();
