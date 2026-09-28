import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { exampleSite, legalName, supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund policy",
  description: `Refund policy for fees paid to ${legalName}.`,
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund policy">
      <p>
        This policy applies to fees you pay <strong>{legalName}</strong> (Seaside Web Studio) for
        website setup, hosting, subscriptions, or related studio services—not to purchases your
        customers make on your own branded site.
      </p>

      <h2>Digital services</h2>
      <p>
        We deliver custom websites, configuration, and ongoing software services. Because work
        begins once a project is accepted, fees are generally <strong>non-refundable</strong> after
        we start implementation, except where required by law or explicitly stated in your signed
        agreement or invoice.
      </p>

      <h2>When we may refund</h2>
      <ul>
        <li>Duplicate or erroneous charges billed by Seaside Web Studio.</li>
        <li>
          Prepaid periods for services we have not yet delivered, prorated at our discretion when
          you cancel in writing before the period begins.
        </li>
        <li>Any refund expressly promised in your statement of work or contract.</li>
      </ul>

      <h2>How to request a refund</h2>
      <p>
        Email {supportEmail} with your business name, invoice or payment reference, and reason for
        the request. We aim to respond within several business days. Approved refunds are returned
        to the original payment method when possible.
      </p>

      <h2>Shipping and returns</h2>
      <p>
        Not applicable. Seaside Web Studio does not ship physical goods through this site.
      </p>

      <h2>Your customers’ purchases</h2>
      <p>
        Orders, bookings, and payments on your public website go to your Stripe account. Refunds
        for those transactions follow <strong>your</strong> policies and Stripe’s tools—not this
        policy. Our sample client site ({exampleSite.name}) illustrates a live storefront; its
        merchant is independent of Seaside Web Studio.
      </p>

      <h2>Related policies</h2>
      <p>
        See also our <Link href="/cancellation-policy">cancellation policy</Link> and{" "}
        <Link href="/terms">terms of service</Link>.
      </p>
    </LegalPage>
  );
}
