export function ProgressBar({ progress }) {
  return (
    <div className="w-full px-3.5 mt-11">
      <div className="flex flex-wrap gap-5 justify-between items-start max-w-full text-2xl font-semibold uppercase whitespace-nowrap">
        <span className="text-neutral-900">Loading</span>
        <span className="mt-5 text-blue-800">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
}
