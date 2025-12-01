export const ScrollingTicker = () => {
  const messages = [
    "One pass • Every gym",
    "Secure QR + GPS check‑ins",
    "Daily AI workout suggestions",
    "Streaks, badges, and PRs",
    "Metrics",
    "Gyms across India",
    "Hourly slots",
    "Hire trainers",
  ];

  return (
    <div className="bg-primary overflow-hidden py-2 mt-8 md:mt-0">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Repeat messages multiple times for continuous scroll */}
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex">
            {messages.map((message, index) => (
              <div key={index} className="flex items-center mx-4">
                <span className="text-primary-foreground font-bold text-sm">
                  {message}
                </span>
                {index < messages.length - 1 && (
                  <span className="mx-4 text-primary-foreground">•</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

