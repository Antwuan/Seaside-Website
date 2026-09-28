import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { legalName, platformOffer, siteUrl, supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of service",
  description: `Terms for ${legalName} website and studio services.`,
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of service">
      <p>
        These terms apply to {legalName} (“Seaside Web Studio”) and your use of {siteUrl} and any
        studio services we agree to in writing. By contacting us or using our services, you agree
        to these terms.
      </p>

      <h2>What we provide</h2>
      <p>{platformOffer}</p>
      <p>
        Specific deliverables, fees, and timelines are defined in a proposal, statement of work, or
        invoice—not solely by this marketing site.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Provide accurate business information and assets needed to build and launch your site.</li>
        <li>
          Maintain your own Stripe account and comply with Stripe’s terms for payments your
          customers make on your domain.
        </li>
        <li>
          Publish appropriate policies on your customer-facing site (refunds, cancellations, privacy)
          for the goods or services you sell.
        </li>
      </ul>

      <h2>Payments and PCI</h2>
      <p>
        Card payments on client websites are processed by Stripe. Payment card data is collected
        and stored by Stripe in accordance with PCI standards. Seaside Web Studio does not store
        full card numbers on servers we operate for client checkout flows.
      </p>
      <p>
        Fees owed to Seaside for setup, hosting, or subscription services are separate from your
        customers’ payments. Those fees are described in your agreement with us. See our{" "}
        <Link href="/refund-policy">refund policy</Link> and{" "}
        <Link href="/cancellation-policy">cancellation policy</Link>.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Unless otherwise agreed, you own content you supply. We retain rights to our tools,
        templates, and pre-existing code; licensed use is granted to you for the agreed site.
        Details are set out in your project agreement.
      </p>

      <h2>Disclaimer</h2>
      <p>
        This site and our services are provided “as is” to the extent permitted by law. We do not
        guarantee uninterrupted operation of third-party services (including Stripe, email, or
        hosting).
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, our total liability arising from studio services is
        limited to the fees you paid us for the project giving rise to the claim in the twelve
        months before the event.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the United States and the state where {legalName}{" "}
        is registered, without regard to conflict-of-law rules.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms:{" "}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
      </p>
    </LegalPage>
  );
}
