import { ToggleGroupItem } from "@/components/ui/toggle-group";
import type { FontType } from "@/types/types";
import clsx from "clsx";

interface FontOptionProps {
  font: FontType;
}

function FontOption({ font }: FontOptionProps) {
  return (
    <ToggleGroupItem
      value={font}
      aria-label={font}
      className={clsx(
        "flex h-500 w-500 cursor-pointer items-center justify-center rounded-full bg-blue-50 text-base leading-[125%] ring-blue-50 ring-offset-4 hover:ring data-[state=on]:bg-blue-900 data-[state=on]:text-white data-[state=on]:hover:ring-0 data-[state=on]:hover:ring-offset-0",
        {
          "font-kumbh-sans": font === "Kumbh Sans",
          "font-roboto-slab": font === "Roboto Slab",
          "font-space-mono": font === "Space Mono",
        },
      )}
    >
      Aa
    </ToggleGroupItem>
  );
}

export { FontOption };
