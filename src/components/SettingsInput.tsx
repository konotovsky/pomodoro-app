import { Input } from "@/components/ui/input";

import iconArrowDown from "@/assets/icon-arrow-down.svg";
import iconArrowUp from "@/assets/icon-arrow-up.svg";

interface SettingsInputProps {
  label: string;
  value: number;
  setValue: (value: number | ((prev: number) => number)) => void;
}

function SettingsInput({ label, value, setValue }: SettingsInputProps) {
  return (
    <div className="flex items-center justify-between gap-100 sm:w-full sm:flex-col sm:items-start">
      <label
        className="font-kumbh-sans text-blue-850/40 cursor-pointer text-xs font-bold"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          className="absolute top-200 right-200 cursor-pointer"
          onClick={() => setValue((value) => Math.min(60, value + 1))}
        >
          <img src={iconArrowUp} alt="Increase value" />
        </button>
        <Input
          id={label}
          type="number"
          step={1}
          value={value}
          onChange={(e) => {
            const value = e.target.value;

            if (/^\d*$/.test(value)) {
              const number = Number(value);

              setValue(Math.max(1, Math.min(60, number)));
            }
          }}
          placeholder="0"
          className="font-kumbh-sans no-spinner text-blue-850 max-w-[140px] appearance-none rounded-[10px] border-none bg-blue-50 p-200 text-sm font-bold"
        />
        <button
          type="button"
          className="absolute right-200 bottom-200 cursor-pointer"
          onClick={() => setValue((value) => Math.max(1, value - 1))}
        >
          <img src={iconArrowDown} alt="Decrease value" />
        </button>
      </div>
    </div>
  );
}

export { SettingsInput };
