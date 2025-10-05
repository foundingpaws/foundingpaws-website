import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green text-cream">
      <div className="container-wide py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <Image src="/logo-header.png" alt="Founding Paws" width={320} height={80} className="h-12 w-auto mb-4" />
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              Premium-Supplements für Hunde – wissenschaftlich fundiert, mit Liebe handgefertigt in Heilbronn.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="use-fredoka text-lg mb-4">Entdecken</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#products" className="hover:text-copper transition">Produkte</Link></li>
              <li><Link href="#finder" className="hover:text-copper transition">Bedarfsfinder</Link></li>
              <li><Link href="#story" className="hover:text-copper transition">Unsere Geschichte</Link></li>
              <li><Link href="#values" className="hover:text-copper transition">Unsere Werte</Link></li>
            </ul>
          </div>

          {/* Wissen */}
          <div>
            <h3 className="use-fredoka text-lg mb-4">Wissen</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-copper transition">Stress & Angst</Link></li>
              <li><Link href="#" className="hover:text-copper transition">Gelenke & Mobilität</Link></li>
              <li><Link href="#" className="hover:text-copper transition">Kognitive Gesundheit</Link></li>
              <li><Link href="#" className="hover:text-copper transition">Haut & Fell</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="use-fredoka text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-copper transition">Impressum</Link></li>
              <li><Link href="#" className="hover:text-copper transition">Datenschutz</Link></li>
              <li><Link href="#" className="hover:text-copper transition">AGB</Link></li>
              <li><Link href="#" className="hover:text-copper transition">Widerrufsrecht</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="use-fredoka text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>Founding Paws GmbH</li>
              <li>Heilbronn, Deutschland</li>
              <li className="pt-2">
                <a href="mailto:hallo@foundingpaws.de" className="hover:text-copper transition">
                  hallo@foundingpaws.de
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 hover:bg-copper transition flex items-center justify-center" aria-label="Instagram">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 hover:bg-copper transition flex items-center justify-center" aria-label="Facebook">
                <span className="text-lg">📘</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <span>© {new Date().getFullYear()} Founding Paws GmbH. Alle Rechte vorbehalten.</span>
          <span className="use-fredoka text-copper">Wissenschaft trifft Herz 🐾</span>
        </div>
      </div>
    </footer>
  );
}


