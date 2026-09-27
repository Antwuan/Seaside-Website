export const studioName = "Seaside Web Studio";

export const contactEmail = "hello@seasidewebstudio.com";

export const exampleSite = {
  name: "Test Restaurant2",
  href: "https://www.testrestaurant2.com/",
} as const;

export const nav = [
  { href: "#included", label: "Included" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export const included = [
  {
    title: "Admin dashboard",
    detail:
      "Staff sign in for that business and run the site: hours, photos, prices, messages, and the day’s work.",
  },
  {
    title: "Online transactions",
    detail:
      "Customers pay by card through Stripe. The price is quoted on the server, tax included, and the payout goes to you.",
  },
  {
    title: "Email messaging",
    detail:
      "Confirmations, reminders, and marketing broadcasts send from an address on your own domain.",
  },
  {
    title: "Branded website",
    detail:
      "A homepage, gallery, and pages on your domain, with colors and type set for this business, not a shared template.",
  },
  {
    title: "Ordering, rewards, and tracking",
    detail:
      "Restaurants and similar shops get a menu, a cart, a loyalty program, and a board for open orders.",
  },
  {
    title: "Reviews and analytics",
    detail:
      "A review request goes out after the visit, and the dashboard shows what sold or booked.",
  },
  {
    title: "Online booking",
    detail:
      "Appointment businesses let customers pick a time on the same site, without a separate booking tool.",
  },
  {
    title: "Last-minute cancellation prevention",
    detail:
      "Reminders go out before the visit, and a cancellation window keeps empty slots from appearing at the last minute.",
  },
  {
    title: "Job applications",
    detail: "A hiring page lives on the site, with applications in the same admin view.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Shape the site around the business",
    detail:
      "Name, colors, photos, and the work you already do. The public site is yours, on your domain.",
  },
  {
    number: "02",
    title: "Connect Stripe",
    detail:
      "Payments are quoted on the server and land in your Stripe account. Seaside does not sit in the middle of the money.",
  },
  {
    number: "03",
    title: "Open for orders or bookings",
    detail:
      "You run the dashboard, the mail, and the calendar or kitchen board. Customers keep using the same address.",
  },
] as const;
