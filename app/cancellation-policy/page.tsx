import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { legalName, supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cancellation policy",
  description: `Cancellation policy for ${legalName} studio services.`,
};

export default function CancellationPolicyPage() {
  return (
    <LegalPage title="Cancellation policy">
      <p>
        This policy explains how a business client may cancel ongoing services from{" "}
        <strong>{legalName}</strong> (Seaside Web Studio). It does not govern appointments or
        orders your customers place on your own website.
      </p>

      <h2>Project and subscription services</h2>
      <ul>
        <li>
          <strong>Before launch.</strong> You may cancel a project in writing to {supportEmail}.
          Work completed up to the cancellation date may still be billed per your agreement.
        </li>
        <li>
          <strong>After launch.</strong> Hosting, support, or subscription fees continue through
          the end of the current billing period unless your contract states otherwise. Cancel
          renewal by emailing {supportEmail} at least fourteen (14) days before the next charge
          date when possible.
        </li>
        <li>
          <strong>Domain and third parties.</strong> Domain registration, email, and Stripe accounts
          in your name remain your responsibility after cancellation.
        </li>
      </ul>

      <h2>End-customer bookings and orders</h2>
      <p>
        Cancellation windows, reminders, and no-show rules on client websites are configured for
        each business. Those rules are set by the business owner in their admin dashboard and
        should appear on the customer-facing site. Seaside Web Studio is not the merchant for
        those transactions.
      </p>

      <h2>Refunds</h2>
      <p>
        Cancellation does not automatically entitle you to a refund of fees already paid. See our{" "}
        <Link href="/refund-policy">refund policy</Link>.
      </p>

      <h2>Contact</h2>
      <p>
        To cancel studio services:{" "}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
      </p>
    </LegalPage>
  );
}
