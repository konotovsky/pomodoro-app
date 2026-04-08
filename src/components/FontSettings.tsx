import { Field } from "@/components/ui/field";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { FontOption } from "@/components/FontOption";
import type { FontType } from "@/types/types";

interface FontSettingsProps {
  font: FontType;
  setFont: (font: FontType) => void;
}

function FontSettings({ font, setFont }: FontSettingsProps) {
  return (
    <Field>
      <ToggleGroup
        type="single"
        value={font}
        onValueChange={(value) => {
          if (value) setFont(value as FontType);
        }}
        className="flex items-center justify-center gap-200 sm:justify-end"
        spacing={2}
      >
        <FontOption font="Kumbh Sans" />
        <FontOption font="Roboto Slab" />
        <FontOption font="Space Mono" />
      </ToggleGroup>
    </Field>
  );
}

export { FontSettings };
