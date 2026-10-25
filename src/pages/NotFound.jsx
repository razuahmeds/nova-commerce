import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-custom flex min-h-[500px] flex-col items-center justify-center py-16 text-center">
      <h1 className="text-8xl font-extrabold tracking-tight text-brand-600">
        404
      </h1>

      <h2 className="mt-5 text-2xl font-extrabold text-slate-900">
        Page not found
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
        Sorry, the page you're looking for doesn't exist or may have
        been moved.
      </p>

      <Link
        to="/"
        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 font-bold text-white hover:bg-brand-700"
      >
        <ArrowLeft size={18} />
        Back to Home
      </Link>
    </section>
  );
}