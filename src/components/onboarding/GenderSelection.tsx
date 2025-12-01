import type { GenderOption } from "@/pages/Onboarding";
import HologramAvatar from "./HologramAvatar";

type GenderSelectionProps = {
  selected: GenderOption;
  onSelect: (value: GenderOption) => void;
  onContinue: () => void;
};

const GenderSelection = ({ selected, onSelect, onContinue }: GenderSelectionProps) => (
  <div className="flex min-h-screen flex-col justify-center bg-black px-6 pb-12 pt-16 text-white">
    <div className="mx-auto w-full max-w-sm">
      <div className="relative">
        <HologramAvatar selected={selected} onSelect={onSelect} onContinue={onContinue} />
      </div>
    </div>
  </div>
);

export default GenderSelection;

