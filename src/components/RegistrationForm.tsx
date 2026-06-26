import { useState } from "react";
import Confirmation from "./Confirmation";

export default function RegistrationForm() {
  const [selectedGameOptions, setSelectedGameOptions] = useState<string[]>([]);
  const [otherGameSuggestion, setOtherGameSuggestion] = useState("");
  const [writtenName, setWrittenName] = useState("");
  const [selectedAttendanceOption, setSelectedAttendanceOption] = useState("");
  const [attendingNumber, setAttendingNumber] = useState(1);
  const [dietaryRestriction, setDietaryRestriction] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setIsSubmitting(true);

        const registrationData = {
          name: writtenName,
          attendance: selectedAttendanceOption,
          numberAttending: attendingNumber,
          games: selectedGameOptions,
          otherGameSuggestion,
          dietaryRestriction,
          additionalComments,
        };

        try {
          const response = await fetch(
            "https://script.google.com/macros/s/AKfycbzErdPBasIWVYkn11YBnyYt8X9IHkIOrJLP7D2zCz-LhYUOO9FlACpkseyvja3X4tkKdg/exec",
            {
              method: "POST",
              body: JSON.stringify(registrationData),
            }
          );

          const result = await response.json();

          if (result.success) {
            setShowConfirmation(true);

            setSelectedGameOptions([]);
            setOtherGameSuggestion("");
            setWrittenName("");
            setSelectedAttendanceOption("");
            setAttendingNumber(1);
            setDietaryRestriction("");
            setAdditionalComments("");
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsSubmitting(false);
        }
  }

  const isFormValid =
  writtenName.trim() !== "" &&
  selectedAttendanceOption.trim() !== "";

  if (showConfirmation) {
    return <Confirmation onClose={() => setShowConfirmation(false)} />;
  }

  return (
    <section className="relative z-10 w-full rounded-b-xl bg-white p-6 sm:w-1/2 sm:overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Registration</h2>

        <p className="mt-1 text-sm text-gray-500">
          Join us for an afternoon of fellowship, games, food and fun.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            id="name"
            type="text"
            required
            value={writtenName}
            onChange={(e) => setWrittenName(e.target.value)}
            placeholder="Jane Doe"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-lime-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="attendance"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Will you be attending? <span className="text-red-500">*</span>
            </label>

            <select
              id="attendance"
              required
              value={selectedAttendanceOption}
              onChange={(e) => setSelectedAttendanceOption(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-lime-500"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="Maybe">Maybe</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="numberAttending"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Number Attending
            </label>

            <select
              id="numberAttending"
              value={attendingNumber}
              onChange={(e) => setAttendingNumber(Number(e.target.value))}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-lime-500"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="games"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            What games would you like to play?
          </label>

          <select
            id="games"
            onChange={(e) => {
              const selectedGame = e.target.value;

              if (
                selectedGame &&
                !selectedGameOptions.includes(selectedGame)
              ) {
                setSelectedGameOptions([
                  ...selectedGameOptions,
                  selectedGame,
                ]);
              }

              e.target.selectedIndex = 0;
            }}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-lime-500"
          >
            <option value="">Select games to add...</option>
            <option value="⚽ Football">⚽ Football</option>
            <option value="🎲 Ludo">🎲 Ludo</option>
            <option value="♟ Chess">♟ Chess</option>
            <option value="🎤 Karaoke">🎤 Karaoke</option>
            <option value="🏐 Volleyball">🏐 Volleyball</option>
            <option value="📖 Bible Quiz">📖 Bible Quiz</option>
            <option value="🧩 Board Games">🧩 Board Games</option>
          </select>

          <div className="mt-4 flex flex-wrap gap-2">
            {selectedGameOptions.map((game) => (
              <button
                key={game}
                type="button"
                onClick={() =>
                  setSelectedGameOptions(
                    selectedGameOptions.filter((item) => item !== game)
                  )
                }
                className="rounded-full bg-lime-500 px-3 py-1 text-xs font-medium text-white"
              >
                {game} ✕
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="suggestions"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Any other suggestions?
          </label>

          <input
            id="suggestions"
            type="text"
            value={otherGameSuggestion}
            onChange={(e) => setOtherGameSuggestion(e.target.value)}
            placeholder="Spikeball"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-lime-500"
          />
        </div>

        <div>
          <label
            htmlFor="diet"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Dietary Restrictions
          </label>

          <input
            id="diet"
            type="text"
            value={dietaryRestriction}
            onChange={(e) => setDietaryRestriction(e.target.value)}
            placeholder="E.g. Vegetarian, Gluten-free, etc."
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-lime-500"
          />
        </div>

        <div>
          <label
            htmlFor="comments"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Additional Comments
          </label>

          <textarea
            id="comments"
            rows={4}
            value={additionalComments}
            onChange={(e) => setAdditionalComments(e.target.value)}
            placeholder="Any questions or things we should know?"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-lime-500"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full rounded-xl py-4 text-sm font-semibold text-white transition
            ${
              !isFormValid || isSubmitting
                ? "cursor-not-allowed bg-gray-300"
                : "cursor-pointer bg-lime-600 hover:bg-lime-700"
            }`}
        >
          {isSubmitting ? "Registering..." : "Register Now"}
        </button>
      </form>
    </section>
  );
}