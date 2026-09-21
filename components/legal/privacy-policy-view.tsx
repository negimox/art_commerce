"use client"

import React from "react"
import { PolicyLayout, TocItem } from "./policy-layout"
import { Lock, EyeOff, ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react"

const TOC_ITEMS: TocItem[] = [
  { id: "introduction", title: "1. Introduction & Overview" },
  { id: "info-collected", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Data" },
  { id: "payment-security", title: "4. Payment Processing & Security" },
  { id: "data-sharing", title: "5. Third-Party Sharing & Couriers" },
  { id: "cookies", title: "6. Cookies & Site Preferences" },
  { id: "data-retention", title: "7. Data Storage & Protection" },
  { id: "user-rights", title: "8. Your Privacy Rights" },
  { id: "grievance-contact", title: "9. Grievance Redressal & Contact" },
]

export function PrivacyPolicyView() {
  return (
    <PolicyLayout
      badge="Data Protection & Trust"
      title="Privacy Policy"
      subtitle="At Himflora, your trust is as precious as the botanicals we preserve. This policy outlines how we collect, safeguard, and respect your personal information."
      lastUpdated="September 21, 2026"
      readTime="5 min read"
      tocItems={TOC_ITEMS}
    >
      {/* Commitment highlight banner */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
        <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 text-amber-800">
          <Lock className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-medium text-zinc-900 mb-2">
            Our Strict Privacy Promise
          </h3>
          <p className="text-sm text-zinc-700 leading-relaxed">
            We never sell, rent, or trade your personal data to third-party marketing companies.
            Your information is used exclusively to fulfill your orders, provide dedicated customer
            service, and ensure seamless delivery of your botanical artworks.
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <section id="introduction" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          1. Introduction & Scope
        </h2>
        <p>
          Himflora (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website
          and online boutique at himflora.com. This Privacy Policy governs your use of our website and
          explains how personal data is handled when you browse, place orders, or communicate with our
          studio.
        </p>
        <p>
          By accessing or using our platform, you acknowledge that you have read and agreed to the
          terms of this policy in adherence to the Information Technology Act, 2000, and the Digital
          Personal Data Protection Act (DPDPA).
        </p>
      </section>

      {/* Section 2 */}
      <section id="info-collected" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          2. Information We Collect
        </h2>
        <p>We only gather details necessary to process orders and provide exceptional support:</p>
        <div className="space-y-3 my-4">
          <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/60">
            <h4 className="font-semibold text-zinc-900 text-sm mb-1">Contact & Delivery Details</h4>
            <p className="text-xs md:text-sm text-zinc-600">
              Your name, shipping address, billing address, phone number (for courier dispatch and SMS
              tracking), and email address for order invoices and updates.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/60">
            <h4 className="font-semibold text-zinc-900 text-sm mb-1">Customization Information</h4>
            <p className="text-xs md:text-sm text-zinc-600">
              Any personal floral notes, custom inscription requests, or photos shared with us when
              ordering bespoke pieces.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/60">
            <h4 className="font-semibold text-zinc-900 text-sm mb-1">Technical & Usage Data</h4>
            <p className="text-xs md:text-sm text-zinc-600">
              Anonymized browser type, IP address, general geographic region, and pages visited to
              maintain speed, responsiveness, and site performance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="how-we-use" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          3. How We Use Your Data
        </h2>
        <ul className="space-y-2.5 my-4">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Order Fulfillment:</strong> Crafting, packing, invoicing, and delivering your
              artworks via logistics couriers.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Customer Support:</strong> Responding to order questions, custom commissions, or
              transit inquiries via email or WhatsApp.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Order Notifications:</strong> Sending automated email or SMS notifications
              regarding dispatch status and tracking links.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Platform Security:</strong> Monitoring for fraudulent transactions and ensuring
              system stability.
            </span>
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section id="payment-security" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          4. Payment Processing & Security
        </h2>
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 space-y-3">
          <p className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Zero Storage of Sensitive Card Credentials
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            All monetary transactions on Himflora are routed through PCI-DSS Level 1 compliant,
            RBI-approved payment gateways (such as Razorpay or Stripe). Himflora servers never view,
            record, or store your credit/debit card numbers, CVVs, UPI PINs, or net banking
            passwords.
          </p>
          <p className="text-xs text-zinc-500">
            Connections are protected with industry-standard 256-bit Secure Socket Layer (SSL)
            encryption.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="data-sharing" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          5. Third-Party Sharing & Logistics
        </h2>
        <p>
          We only share essential customer details with trusted operational service providers who are
          strictly bound by confidentiality agreements:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-600">
          <li>
            <strong>Delivery & Logistics Partners:</strong> (e.g., Delhivery, Blue Dart, DTDC, India
            Post) receive your name, address, and contact number strictly for package drop-off.
          </li>
          <li>
            <strong>Payment Gateways:</strong> Encrypted transaction handoff for processing payment
            clearance.
          </li>
          <li>
            <strong>Legal Requirements:</strong> If compelled by applicable Indian law or government
            authorities in connection with legal proceedings or fraud prevention.
          </li>
        </ul>
      </section>

      {/* Section 6 */}
      <section id="cookies" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          6. Cookies & Site Preferences
        </h2>
        <p>
          Himflora uses minimal functional cookies and browser storage to remember your shopping cart
          items and maintain your session while browsing. You can configure your browser to reject
          cookies; however, some checkout and cart features may not function as intended.
        </p>
      </section>

      {/* Section 7 */}
      <section id="data-retention" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          7. Data Storage & Protection
        </h2>
        <p>
          We implement technical and organizational safeguards against unauthorized access,
          alteration, disclosure, or destruction of your personal data. We retain order records for as
          long as required to comply with statutory tax, accounting, and warranty obligations under
          Indian law.
        </p>
      </section>

      {/* Section 8 */}
      <section id="user-rights" className="scroll-mt-32 space-y-4">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          8. Your Privacy Rights
        </h2>
        <p>You have full autonomy over your personal information:</p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-600">
          <li>Request a copy of the personal data we hold about you.</li>
          <li>Request correction or updating of inaccurate information.</li>
          <li>Request deletion of your profile or contact records (subject to statutory order retention requirements).</li>
          <li>Opt out of any marketing or promotional communication at any time.</li>
        </ul>
      </section>

      {/* Section 9 */}
      <section id="grievance-contact" className="scroll-mt-32 space-y-4 pt-4 border-t border-zinc-200">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-zinc-900">
          9. Grievance Redressal & Contact
        </h2>
        <p>
          For any privacy inquiries, data deletion requests, or grievances under the Information
          Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or
          Information) Rules:
        </p>
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5 text-sm space-y-1.5">
          <p className="font-semibold text-zinc-900">Himflora Privacy & Grievance Team</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact.himflora@gmail.com" className="text-amber-800 underline">
              contact.himflora@gmail.com
            </a>
          </p>
          <p>
            <strong>Location:</strong> Mussoorie, Uttarakhand, India
          </p>
        </div>
      </section>
    </PolicyLayout>
  )
}
