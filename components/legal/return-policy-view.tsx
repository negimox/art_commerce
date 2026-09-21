"use client"

import React from "react"
import Link from "next/link"
import { PolicyLayout, TocItem } from "./policy-layout"
import { ShieldCheck, RotateCcw, AlertCircle, CheckCircle2, Truck, HelpCircle } from "lucide-react"

const TOC_ITEMS: TocItem[] = [
  { id: "botanical-guarantee", title: "1. Botanical Art & Nature Notice" },
  { id: "transit-damage", title: "2. Transit Damage Guarantee" },
  { id: "eligibility", title: "3. Return Eligibility Conditions" },
  { id: "custom-orders", title: "4. Custom & Bespoke Orders" },
  { id: "how-to-return", title: "5. How to Initiate a Return" },
  { id: "refund-process", title: "6. Refund Timelines & Mode" },
  { id: "cancellations", title: "7. Order Cancellations" },
  { id: "contact-support", title: "8. Questions & Support" },
]

export function ReturnPolicyView() {
  return (
    <PolicyLayout
      badge="Himflora Customer Protection"
      title="Return & Refund Policy"
      subtitle="We want you to love your botanical artwork as much as we loved creating it. Here is everything you need to know about returns, exchanges, and transit protection."
      lastUpdated="September 21, 2026"
      readTime="4 min read"
      tocItems={TOC_ITEMS}
    >
      {/* Highlight Guarantee Box */}
      <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-medium text-emerald-950 mb-2">
            100% Safe Delivery & Quality Guarantee
          </h3>
          <p className="text-sm text-emerald-900/90 leading-relaxed">
            If your framed artwork arrives broken, cracked, or defective during courier transit,
            we will replace it free of charge or issue a 100% refund. Simply alert us within 7 days of
            delivery with an unboxing photo or video.
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <section id="botanical-guarantee" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          1. Handcrafted Botanicals & Natural Organic Character
        </h2>
        <p>
          Every Himflora creation is thoughtfully arranged by hand using authentic, ethically
          harvested botanical specimens from the Himalayas and Indian flora.
        </p>
        <p>
          Because nature never produces two identical blossoms or leaves, subtle natural variations
          in petal contour, organic veining, botanical asymmetry, and slight tone gradients are
          inherent hallmarks of original pressed flower art. These organic traits are celebrated as
          proof of genuine botanical artistry rather than manufacturing defects.
        </p>
      </section>

      {/* Section 2 */}
      <section id="transit-damage" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          2. Transit Damage & Defective Deliveries
        </h2>
        <p>
          We pack every frame in multi-layered cushioning, rigid foam encasements, and shock-absorbent
          corrugated shipping cartons. In the rare circumstance that courier mishandling results in
          shattered glass or a fractured frame:
        </p>
        <ul className="space-y-2.5 my-4">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>7-Day Claim Window:</strong> Notify us within seven (7) calendar days of
              delivery according to the courier tracking status.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Photo / Video Verification:</strong> Share a quick photo or video of the parcel
              and damaged section via WhatsApp or email.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Immediate Resolution:</strong> You can choose either an expedited replacement
              priority-crafted and shipped to you at zero cost, or a full refund.
            </span>
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="eligibility" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          3. Return Eligibility Conditions
        </h2>
        <p>
          To qualify for a non-damage return or exchange for eligible standard catalog items:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div className="border border-zinc-200/80 rounded-xl p-4 bg-zinc-50/50">
            <p className="font-semibold text-zinc-900 text-sm mb-1">Eligible for Return</p>
            <p className="text-xs text-zinc-600">
              Item received damaged, wrong item shipped, or defective mounting hardware reported
              within 7 days of delivery.
            </p>
          </div>
          <div className="border border-zinc-200/80 rounded-xl p-4 bg-zinc-50/50">
            <p className="font-semibold text-zinc-900 text-sm mb-1">Original Packaging</p>
            <p className="text-xs text-zinc-600">
              The item must be in its original condition, intact with protective corner guards, and
              packed safely to avoid further transit breakage.
            </p>
          </div>
        </div>
        <p className="text-sm text-zinc-600">
          Items exhibiting post-delivery damage (such as drops, exposure to outdoor rain, high
          humidity bathrooms, or liquid spills) cannot be accepted for refund.
        </p>
      </section>

      {/* Section 4 */}
      <section id="custom-orders" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          4. Custom & Bespoke Commissions
        </h2>
        <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-5 text-sm space-y-2">
          <p className="font-semibold text-amber-950 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-700" />
            Special Notice on Made-to-Order Pieces
          </p>
          <p className="text-amber-900/90 leading-relaxed">
            Custom-ordered artworks (including client-specified flower compositions, personalized
            calligraphy/inscriptions, or pressed wedding bouquets) are handcrafted individually to
            order and are non-refundable once assembly has begun. However, our full Transit Damage
            Guarantee still covers all custom pieces.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="how-to-return" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          5. How to Initiate a Return
        </h2>
        <p>Returning an eligible piece is simple and straightforward:</p>
        <ol className="space-y-4 my-4">
          <li className="flex gap-4">
            <span className="w-7 h-7 rounded-full bg-zinc-900 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
              1
            </span>
            <div>
              <p className="font-semibold text-zinc-900 text-sm">Contact Our Team</p>
              <p className="text-xs md:text-sm text-zinc-600">
                Email{" "}
                <a
                  href="mailto:contact.himflora@gmail.com"
                  className="text-amber-700 underline font-medium"
                >
                  contact.himflora@gmail.com
                </a>{" "}
                or WhatsApp{" "}
                <a
                  href="https://wa.me/918171776251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 underline font-medium"
                >
                  +91 8171776251
                </a>{" "}
                with your Order ID and photo/video proof of the problem.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="w-7 h-7 rounded-full bg-zinc-900 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
              2
            </span>
            <div>
              <p className="font-semibold text-zinc-900 text-sm">Review & Approval</p>
              <p className="text-xs md:text-sm text-zinc-600">
                Our care team will review your request within 24 business hours and approve the return
                or immediate replacement.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="w-7 h-7 rounded-full bg-zinc-900 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
              3
            </span>
            <div>
              <p className="font-semibold text-zinc-900 text-sm">Reverse Pickup or Label</p>
              <p className="text-xs md:text-sm text-zinc-600">
                We will schedule a reverse pickup via our logistics partner at your doorstep. Please
                repack the item securely in the original box.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="w-7 h-7 rounded-full bg-zinc-900 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
              4
            </span>
            <div>
              <p className="font-semibold text-zinc-900 text-sm">Refund or Replacement Dispatch</p>
              <p className="text-xs md:text-sm text-zinc-600">
                Upon parcel receipt or confirmation of transit damage, your replacement will be
                dispatched immediately, or your refund processed.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Section 6 */}
      <section id="refund-process" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          6. Refund Timelines & Payment Mode
        </h2>
        <p>
          Once a refund is approved and initiated, it is credited directly back to your original mode
          of payment:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-600">
          <li>
            <strong>UPI / Net Banking / Wallets:</strong> 2 to 4 business days depending on your bank.
          </li>
          <li>
            <strong>Credit / Debit Cards:</strong> 5 to 7 business days depending on the card issuer.
          </li>
          <li>
            You will receive an automated confirmation email with the transaction reference number
            once the refund is issued.
          </li>
        </ul>
      </section>

      {/* Section 7 */}
      <section id="cancellations" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          7. Order Cancellations & Modifications
        </h2>
        <p>
          If you need to cancel an order or modify the shipping address, please contact us within
          <strong> 3 hours </strong> of placing the order. Once your package has been handed over to
          the courier service and tracking has updated, cancellations cannot be accepted in transit.
        </p>
      </section>

      {/* Section 8 */}
      <section id="contact-support" className="scroll-mt-32 space-y-4 pt-4 border-t border-zinc-200">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          8. Questions or Assistance?
        </h2>
        <p>
          If you have any doubts, questions, or special requests regarding returns, please contact our
          support team:
        </p>
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5 text-sm space-y-1.5">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact.himflora@gmail.com" className="text-amber-800 underline">
              contact.himflora@gmail.com
            </a>
          </p>
          <p>
            <strong>WhatsApp / Phone:</strong>{" "}
            <a href="https://wa.me/918171776251" className="text-emerald-800 underline">
              +91 8171776251
            </a>
          </p>
          <p>
            <strong>Hours:</strong> Monday to Saturday, 10:00 AM – 7:00 PM IST
          </p>
        </div>
      </section>
    </PolicyLayout>
  )
}
