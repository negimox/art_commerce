import Link from "next/link"
import { Instagram, Facebook, Truck, Wallet, MessageSquare } from "lucide-react"

interface FooterLink {
  label: string
  href: string
  rel?: string
}

const footerColumns: FooterLink[][] = [
  [
    { label: "Shop", href: "/shop" },
    { label: "Our Story", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  [
    { label: "FAQ", href: "/faq" },
    { label: "Track Order", href: "#" },
  ],
]


const secondaryFooterLinks: FooterLink[] = [
  { label: "Return Policy", href: "/return-policy" },
  { label: "Privacy Policy", href: "/privacy-policy", rel: "privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
]

export function Footer() {
  return (
    <div className="relative">
      <footer id="contact" className="relative z-20 border-t border-border py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Trust Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-border pb-10">
            <div className="flex items-center gap-4 group cursor-default">
              <div className="p-2.5 rounded-xl bg-muted/50 text-foreground/80 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                <Truck className="w-6 h-6 stroke-[1.5] transition-transform duration-500 group-hover:translate-x-1" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary duration-300">Free delivery*</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Delivery happens within: 3-5 days</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-default">
              <div className="p-2.5 rounded-xl bg-muted/50 text-foreground/80 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                <Wallet className="w-6 h-6 stroke-[1.5] transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary duration-300">Payment options</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Easy Payments</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-default">
              <div className="p-2.5 rounded-xl bg-muted/50 text-foreground/80 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                <MessageSquare className="w-6 h-6 stroke-[1.5] transition-transform duration-500 group-hover:rotate-12" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary duration-300">Customer support</h4>
                <p className="text-xs text-muted-foreground mt-0.5">contact.himflora@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-base font-medium text-foreground">Himflora</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-6">Nature's art, brought home.</p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.facebook.com/people/HimFlora/61591135305155/"
                  aria-label="Facebook"
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="https://wa.me/918171776251"
                  aria-label="WhatsApp"
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:col-span-2">
              {footerColumns.map((col, colIdx) => (
                <ul key={colIdx} className="space-y-3">
                  {col.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Secondary Inline Navigation Menu (React & Next.js Best Practices) */}
          <nav
            id="footer-menu-2"
            aria-label="Footer Menu (Others)"
            className="border-t border-border pt-8 mt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-y-4 gap-x-6 text-xs text-muted-foreground">
              <ul
                id="menu-footer-menu-others"
                className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2"
              >
                {secondaryFooterLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      rel={link.rel}
                      className="hover:text-foreground transition-colors duration-200 font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground text-center md:text-right">
                © {new Date().getFullYear()} Himflora. All rights reserved. Handcrafted with love, delivered with care.
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

