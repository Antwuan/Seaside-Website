import {
  businessAddress,
  formatBusinessAddress,
  supportEmail,
  supportPhone,
} from "@/lib/site";

type SupportContactProps = {
  className?: string;
};

export function SupportContact({ className = "" }: SupportContactProps) {
  const formattedAddress = formatBusinessAddress();

  return (
    <address className={`not-italic text-mist ${className}`}>
      <p className="font-medium text-ink">Customer service</p>
      <p className="mt-2">
        Email:{" "}
        <a
          className="text-silver underline decoration-white/30 underline-offset-2"
          href={`mailto:${supportEmail}`}
        >
          {supportEmail}
        </a>
      </p>
      {supportPhone ? (
        <p className="mt-1">
          Phone:{" "}
          <a
            className="text-silver underline decoration-white/30 underline-offset-2"
            href={`tel:${supportPhone.replace(/\s/g, "")}`}
          >
            {supportPhone}
          </a>
        </p>
      ) : null}
      {formattedAddress ? (
        <p className="mt-2 whitespace-pre-line">{formattedAddress}</p>
      ) : businessAddress.country ? (
        <p className="mt-2">{businessAddress.country}</p>
      ) : null}
    </address>
  );
}
