import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { legalName, policyLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Policies",
  description: `Legal and fulfillment policies for ${legalName}.`,
};

export default function PoliciesPage() {
  return (
    <LegalPage title="Policies">
      <p>
        {legalName} (Seaside Web Studio) publishes the following policies for this website and for
        studio services we provide to small businesses.
      </p>
      <ul>
        {policyLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </LegalPage>
  );
}
