import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalName, siteUrl, supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${legalName} handles information collected through seasidewebstudio.com.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy">
      <p>
        {legalName} (“Seaside Web Studio,” “we,” “us”) operates {siteUrl}. This policy describes
        how we handle information when you visit the site or contact us about a project.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Contact inquiries.</strong> When you use the contact form, your email app sends
          us your name, business name, email address, and message. We do not store those fields on
          our web server; they arrive in our mailbox at {supportEmail}.
        </li>
        <li>
          <strong>Technical data.</strong> Our hosting provider may log standard request data
          (such as IP address, browser type, and pages viewed) for security and reliability. We do
          not use third-party advertising trackers on this marketing site.
        </li>
      </ul>

      <h2>How we use information</h2>
      <p>
        We use contact details to respond to inquiries, scope projects, and provide services to
        business clients. We do not sell personal information.
      </p>

      <h2>Client and end-customer data</h2>
      <p>
        Websites we build for clients may collect their customers’ order, booking, or account
        data. That processing is governed by each client’s privacy policy and Stripe’s handling
        of payment data on the client’s site. Seaside does not receive raw card numbers from
        client checkouts.
      </p>

      <h2>Retention</h2>
      <p>
        We keep business correspondence as long as needed for the relationship, legal obligations,
        and ordinary business records. You may ask us to update or delete inquiry email we still
        hold by writing to {supportEmail}.
      </p>

      <h2>Contact</h2>
      <p>
        Privacy questions:{" "}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
      </p>
    </LegalPage>
  );
}
