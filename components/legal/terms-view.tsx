"use client"

import React from "react"
import { PolicyLayout, TocItem } from "./policy-layout"
import { FileText, ShieldAlert, Sparkles, Scale, Info } from "lucide-react"

const TOC_ITEMS: TocItem[] = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "nature-of-goods", title: "2. Handcrafted Botanicals & Variation" },
  { id: "pricing-orders", title: "3. Orders, Pricing & Payments" },
  { id: "custom-commissions", title: "4. Custom Artwork Commissions" },
  { id: "shipping-risk", title: "5. Shipping, Delivery & Risk of Loss" },
  { id: "intellectual-property", title: "6. Intellectual Property & Copyright" },
  { id: "limitation-liability", title: "7. Limitation of Liability" },
  { id: "governing-law", title: "8. Governing Law & Jurisdiction" },
  { id: "contact-info", title: "9. Modifications & Inquiries" },
]

export function TermsView() {
  return (
    <PolicyLayout
      badge="Terms of Service"
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before exploring or purchasing from Himflora. They outline our mutual commitments and guidelines for an artful shopping experience."
      lastUpdated="September 21, 2026"
      readTime="5 min read"
      tocItems={TOC_ITEMS}
    >
      {/* Intro Box */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
        <div className="w-12 h-12 rounded-xl bg-zinc-200/80 flex items-center justify-center flex-shrink-0 text-zinc-800">
          <Scale className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-medium text-zinc-900 mb-2">
            Welcome to Himflora
          </h3>
          <p className="text-sm text-zinc-600 leading-relaxed">
            These Terms & Conditions govern your access to and purchase of handcrafted botanical
            artworks through the Himflora website and services. By placing an order or using our
            website, you agree to be bound by these provisions.
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <section id="acceptance" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing, browsing, or purchasing from Himflora (&ldquo;we,&rdquo; &ldquo;our,&rdquo;
          or &ldquo;us&rdquo;), you confirm that you are at least 18 years of age (or have parental/guardian
          consent) and agree to comply with all applicable laws and regulations of India.
        </p>
      </section>

      {/* Section 2 */}
      <section id="nature-of-goods" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          2. Handcrafted Botanical Character & Organic Variation
        </h2>
        <p>
          Each artwork showcased on Himflora is handcrafted using real, organic botanicals, pressed
          flowers, and preserved foliage. Consequently:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-600">
          <li>
            <strong>Natural Diversity:</strong> No two botanicals are identical. Variations in petal
            curvatures, foliage tone, size, and layout are natural attributes of authentic art.
          </li>
          <li>
            <strong>Color Representation:</strong> We photograph artworks in natural diffused light to
            represent tones accurately. However, colors may vary slightly depending on monitor or
            device display profiles.
          </li>
          <li>
            <strong>Care Requirements:</strong> Botanical artworks are meant for indoor display away
            from direct moisture, intense direct sunlight, and excessive dampness.
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="pricing-orders" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          3. Orders, Pricing & Payments
        </h2>
        <p>
          All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless
          otherwise stated. Shipping charges, if applicable, are computed during checkout.
        </p>
        <p>
          We reserve the right to decline or cancel any order in instances of inadvertent pricing
          typographical errors or unforeseen botanical material unavailability. In any such case,
          the full amount paid will be refunded immediately to your original payment source.
        </p>
      </section>

      {/* Section 4 */}
      <section id="custom-commissions" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          4. Custom Artwork Commissions
        </h2>
        <p>
          For bespoke and custom commissioned projects (such as bridal bouquet preservation or custom
          botanical arrangements):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-600">
          <li>
            Production timelines begin once the design brief and florals are received and confirmed.
          </li>
          <li>
            Custom orders require advance payment and cannot be cancelled or returned once physical
            crafting has begun, except in accordance with our Transit Damage Guarantee.
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="shipping-risk" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          5. Shipping, Delivery & Risk of Loss
        </h2>
        <p>
          We partner with leading Indian logistics carriers to ensure fast and secure transit. While
          standard deliveries complete within 3–5 business days, transit times may experience
          occasional variations due to weather, regional restrictions, or courier logistics.
        </p>
        <p>
          Risk of damage in transit is completely covered by Himflora under our{" "}
          <span className="font-semibold text-zinc-900">Transit Damage Guarantee</span> as detailed in
          our Return Policy.
        </p>
      </section>

      {/* Section 6 */}
      <section id="intellectual-property" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          6. Intellectual Property & Copyright
        </h2>
        <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-5 text-sm space-y-2">
          <p className="font-semibold text-amber-950 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-700" />
            Proprietary Artworks & Designs
          </p>
          <p className="text-amber-900/90 leading-relaxed">
            All content on this website—including artwork designs, photographs, botanical
            arrangements, brand logos, graphics, text descriptions, and trademarks—is the exclusive
            intellectual property of Himflora and protected under Indian Copyright and Trademark laws.
            Unauthorized reproduction, duplication, or commercial exploitation is strictly prohibited.
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section id="limitation-liability" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          7. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by applicable Indian law, Himflora shall not be liable for
          any indirect, incidental, punitive, or consequential damages resulting from the use of, or
          inability to use, products purchased on this platform.
        </p>
        <p>
          In all events, Himflora&apos;s aggregate liability shall be strictly limited to the actual amount
          paid by the customer for the specific item in dispute.
        </p>
      </section>

      {/* Section 8 */}
      <section id="governing-law" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          8. Governing Law & Jurisdiction
        </h2>
        <p>
          These Terms & Conditions shall be governed by and construed in accordance with the laws of
          India. Any disputes arising out of or relating to these terms or transactions on Himflora
          shall be subject to the exclusive jurisdiction of the competent courts in Dehradun /
          Mussoorie, Uttarakhand.
        </p>
      </section>

      {/* Section 9 */}
      <section id="contact-info" className="scroll-mt-32 space-y-4 pt-4 border-t border-zinc-200">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          9. Modifications & Inquiries
        </h2>
        <p>
          We reserve the right to revise or update these Terms & Conditions at any time. Updates will
          be posted on this page with the revised &ldquo;Last updated&rdquo; date. Continued use of our
          services after changes are posted constitutes acceptance.
        </p>
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5 text-sm space-y-1.5">
          <p>
            <strong>Inquiries:</strong>{" "}
            <a href="mailto:contact.himflora@gmail.com" className="text-amber-800 underline">
              contact.himflora@gmail.com
            </a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a href="https://wa.me/918171776251" className="text-emerald-800 underline">
              +91 8171776251
            </a>
          </p>
        </div>
      </section>
    </PolicyLayout>
  )
}
