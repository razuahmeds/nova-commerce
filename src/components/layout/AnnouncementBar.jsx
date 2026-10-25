
import { Truck, ShieldCheck, Headphones } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-slate-950 text-white">
      <div className="mx-auto flex min-h-10 w-[calc(100%-32px)] max-w-[1200px] flex-wrap items-center justify-center gap-x-7 gap-y-2 py-2 text-xs sm:justify-between">
        <div className="flex items-center gap-2">
          <Truck size={15} />
          <span>Free delivery on orders over ৳3,000</span>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <ShieldCheck size={15} />
          <span>Secure shopping experience</span>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Headphones size={15} />
          <span>Customer support available</span>
        </div>
      </div>
    </div>
  );
}
