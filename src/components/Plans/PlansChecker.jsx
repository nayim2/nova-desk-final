export default function PlansChecker({ optionDetail }) {
  if (typeof optionDetail === "boolean") {
    return optionDetail ? (
      <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
        ✓
      </span>
    ) : (
      <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white">
        −
      </span>
    );
  }

  return (
    <span className="text-lg font-semibold">
      {optionDetail}
    </span>
  );
}
