import { ColorSettings } from "@/components/ColorSettings";
import { FontSettings } from "@/components/FontSettings";
import { SettingsModal } from "@/components/SettingsModal";
import { SettingsSection } from "@/components/SettingsSection";
import { SubmitButton } from "@/components/SubmitButton";
import { TimeSettings } from "@/components/TimeSettings";
import { useSettingsStore } from "@/stores/settingsStore";
import type { FontType, ColorType } from "@/types/types";
import { useState } from "react";

function Settings() {
  const close = useSettingsStore((state) => state.close);

  const time = useSettingsStore((state) => state.time);
  const setTime = useSettingsStore((state) => state.setTime);

  const [pomodoro, setPomodoro] = useState(time.pomodoro);
  const [shortBreak, setShortBreak] = useState(time.shortBreak);
  const [longBreak, setLongBreak] = useState(time.longBreak);

  const font = useSettingsStore((state) => state.font);
  const setFont = useSettingsStore((state) => state.setFont);

  const [draftFont, setDraftFont] = useState<FontType>(font);

  const color = useSettingsStore((state) => state.color);
  const setColor = useSettingsStore((state) => state.setColor);

  const [draftColor, setDraftColor] = useState<ColorType>(color);

  const handleSubmit = () => {
    setTime("pomodoro", pomodoro);
    setTime("shortBreak", shortBreak);
    setTime("longBreak", longBreak);

    setFont(draftFont);

    setColor(draftColor);

    close();
  };

  return (
    <>
      <SettingsModal>
        <SettingsSection title="Time (minutes)">
          <TimeSettings
            pomodoro={pomodoro}
            shortBreak={shortBreak}
            longBreak={longBreak}
            setPomodoro={setPomodoro}
            setShortBreak={setShortBreak}
            setLongBreak={setLongBreak}
          />
        </SettingsSection>
        <SettingsSection title="Font" inRow={true}>
          <FontSettings font={draftFont} setFont={setDraftFont} />
        </SettingsSection>
        <SettingsSection title="Color" inRow={true} withDivider={false}>
          <ColorSettings color={draftColor} setColor={setDraftColor} />
        </SettingsSection>
        <div className="translate-y-1/2 self-center">
          <SubmitButton onClick={handleSubmit} />
        </div>
      </SettingsModal>
    </>
  );
}

export { Settings };
