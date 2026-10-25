import {
  Truck,
  ShieldCheck,
  RefreshCcw,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Convenient Delivery",
    description: "Delivery options across Bangladesh.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description: "A clear and simple shopping experience.",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "A return-policy section for your store.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Help when you need it.",
  },
];

export default function Benefits() {
  return (
    <section className="container-custom py-12">
      <div className="grid grid-cols-2 gap-5 rounded-3xl border border-slate-100 bg-white p-5 sm:grid-cols-4 sm:p-8">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <div className="rounded-2xl bg-blue-50 p-3 text-brand-600">
              <Icon size={25} />
            </div>

            <h3 className="mt-4 text-sm font-bold text-slate-900">
              {title}
            </h3>

            <p className="mt-2 max-w-[200px] text-xs leading-5 text-slate-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}