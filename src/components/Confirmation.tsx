import { X, Check, CalendarDays, MapPin, Trees } from "lucide-react";


type ConfirmationProps = {
  onClose: () => void;
};

export default function Confirmation({ onClose }: ConfirmationProps) {
  return (
    <section className="relative w-full rounded-b-xl bg-white px-6 py-8 text-center shadow-[-20px_0_40px_rgba(0,0,0,0.25)] sm:w-1/2">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-white transition hover:bg-gray-400"
      >
        <X size={22} strokeWidth={2.5} />
      </button>

      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-lime-50">
        <Check size={34} strokeWidth={3} className="text-lime-600" />
      </div>

      <h2 className="mb-3 text-sm sm:text-3xl font-extrabold uppercase text-gray-900">
        🎉 Thank You!
      </h2>

      <p className="mb-4 text-base sm:text-[16px] font-medium text-gray-900">
        You are all set now
      </p>

      <p className="mx-auto mb-5 max-w-sm text-sm sm:text-l leading-relaxed text-gray-500">
        We look forward to seeing you at our Casual Sunday Picnic.
      </p>

      <div className="mx-auto mb-5 max-w-sm sm:max-w-l rounded-xl bg-gray-50 p-4 text-left">
        <div className="flex items-start gap-3 py-2">
          <CalendarDays size={20} className="mt-0.5  shrink-0 text-lime-600" />
          <p className="text-sm sm:text-[16px] text-gray-800">Sunday, 12th July</p>
        </div>

        <div className="flex items-start gap-3 py-2">
          <MapPin size={20} className="mt-0.5 shrink-0 text-lime-600" />
          <p className="text-sm sm:text-[16px] text-gray-800">
            Service: 11:00 AM — Högabergsgatan 5
          </p>
        </div>

        <div className="flex items-start gap-3 py-2">
          <Trees size={20} className="mt-0.5 shrink-0 text-lime-600" />
          <p className="text-sm sm:text-[16px] text-gray-800">
            Picnic afterwards at the Marine Museum beach area.
          </p>
        </div>
      </div>

      <p className="mx-auto max-w-sm text-sm sm:text-[17px] leading-relaxed text-gray-500">
        Come ready for fellowship, games, food and fun! See you there!
      </p>
    </section>
  );
}