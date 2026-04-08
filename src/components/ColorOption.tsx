import { ToggleGroupItem } from "@/components/ui/toggle-group";
import { Check } from "lucide-react";
import type { ColorType } from "@/types/types";
import clsx from "clsx";

interface ColorOptionProps {
  color: ColorType;
}

function ColorOption({ color }: ColorOptionProps) {
  return (
    <ToggleGroupItem
      value={color}
      aria-label={color}
      className={clsx(
        "group flex h-500 w-500 cursor-pointer items-center justify-center rounded-full",
        {
          "bg-red-400": color === "red",
          "bg-cyan-300": color === "cyan",
          "bg-purple-400": color === "purple",
        },
      )}
    >
      <Check className="hidden text-blue-900 group-data-[state=on]:block" />
    </ToggleGroupItem>
  );
}

export { ColorOption };
