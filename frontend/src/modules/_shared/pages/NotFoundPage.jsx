import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const colors = {
    primary: "bg-primary hover:bg-primary-700 text-white",
    secondary: "bg-secondary hover:bg-secondary-600 text-white",
    tertiary: "bg-teritary-500 hover:bg-teritary-600 text-white"
  };

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        {/* Error number - using primary color */}
        <h1
          className={`mb-4 text-9xl font-bold ${colors.primary.replace("bg-", "text-").split(" ")[0]}`}
        >
          404
        </h1>

        {/* Title */}
        <h2 className="mb-2 text-2xl font-semibold text-white">Page Not Found</h2>

        {/* Description */}
        <p className="mb-8 text-lg text-gray-300">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/"
            className={`rounded-lg px-6 py-3 font-medium transition-colors ${colors.primary}`}
          >
            Go Home
          </a>
          <button
            onClick={() => navigate(-1)}
            className={`cursor-pointer rounded-lg px-6 py-3 font-medium transition-colors ${colors.secondary}`}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
