import { Field } from "@/components/ui/field";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { ColorOption } from "@/components/ColorOption";
import type { ColorType } from "@/types/types";

interface ColorSettingsProps {
  color: ColorType;
  setColor: (color: ColorType) => void;
}

function ColorSettings({ color, setColor }: ColorSettingsProps) {
  return (
    <Field>
      <ToggleGroup
        type="single"
        value={color}
        onValueChange={(value) => {
          if (value) setColor(value as ColorType);
        }}
        className="flex items-center justify-center gap-200 sm:justify-end"
        spacing={2}
      >
        <ColorOption color="red" />
        <ColorOption color="cyan" />
        <ColorOption color="purple" />
      </ToggleGroup>
    </Field>
  );
}

export { ColorSettings };
