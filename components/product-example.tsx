import Image from "next/image";
import { exampleSite } from "@/lib/site";

export function ProductExample() {
  return (
    <div>
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-mist">
        Live example · {exampleSite.name}
      </p>
      <a
        href={exampleSite.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="glass overflow-hidden rounded-3xl">
          <Image
            src="/example-home.png"
            alt="Test Restaurant2 homepage with photo, navigation, and Order Now"
            width={1281}
            height={686}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="glass mt-4 overflow-hidden rounded-3xl">
          <Image
            src="/example-menu.png"
            alt="Test Restaurant2 menu with categories, prices, and pickup location"
            width={1140}
            height={939}
            className="h-auto w-full"
          />
        </div>
        <p className="mt-3 text-sm text-mist group-hover:text-silver">
          testrestaurant2.com
        </p>
      </a>
    </div>
  );
}
