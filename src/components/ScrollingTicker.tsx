export const ScrollingTicker = () => {
  const messages = [
    "One pass • Every gym",
    "Secure QR + GPS check‑ins",
    "Daily AI workout suggestions",
    "Streaks, badges, and PRs",
  ];

  return (
    <div className="bg-primary overflow-hidden py-4 mt-10 md:mt-0">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Repeat messages multiple times for continuous scroll */}
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex">
            {messages.map((message, index) => (
              <div key={index} className="flex items-center mx-8">
                <span className="text-primary-foreground font-bold text-sm tracking-wide">
                  {message}
                </span>
                {index < messages.length - 1 && (
                  <span className="mx-8 text-primary-foreground">•</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
