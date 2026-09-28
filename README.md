# Seaside Web Studio

Marketing site for Seaside Web Studio, a studio that builds branded websites for small businesses — shops, restaurants, and appointment desks.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The contact form opens the visitor’s email app addressed to `hello@seasidewebstudio.com`. That mailbox must exist and receive mail before Stripe verification.

## Before Stripe verification

In [`lib/site.ts`](lib/site.ts), set values to match your Stripe account:

- `legalName` — legal entity name on the account
- `businessAddress` — full mailing address (`line1` through `postalCode`); street lines appear on the site once `line1` is filled
- `supportPhone` — optional business phone

## Deploy on Vercel

1. Import [Antwuan/Seaside-Website](https://github.com/Antwuan/Seaside-Website) in the [Vercel dashboard](https://vercel.com/new).
2. Deploy the production branch (`main` after merge, or `DomainConfig` while testing).
3. Confirm the default `*.vercel.app` URL loads after `npm run build` succeeds locally.

## Attach seasidewebstudio.com

1. In the Vercel project, open **Settings → Domains**.
2. Add `seasidewebstudio.com` and `www.seasidewebstudio.com`.
3. At your domain registrar, add the DNS records Vercel shows (apex **A** records and **www** **CNAME**, or point nameservers to Vercel).
4. Redirect `www` → apex (recommended canonical URL: `https://seasidewebstudio.com`).
5. Wait for TLS, then open the site in a private window to confirm HTTPS and no password wall.

## Email (hello@)

Create `hello@seasidewebstudio.com` before going live:

- Google Workspace, Microsoft 365, or your registrar’s email, **or**
- [Cloudflare Email Routing](https://developers.cloudflare.com/email-routing/) (forward to an inbox you read)

Add **MX** (and any verification) records at the registrar. Send a test message to confirm delivery.

## Stripe Dashboard

Set **Business website** to `https://seasidewebstudio.com` (same as `siteUrl` in `lib/site.ts`). Business name and address on the site should match the account.
