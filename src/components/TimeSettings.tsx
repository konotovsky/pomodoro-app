import { SettingsInput } from "@/components/SettingsInput";

interface TimeSettingsProps {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  setPomodoro: React.Dispatch<React.SetStateAction<number>>;
  setShortBreak: React.Dispatch<React.SetStateAction<number>>;
  setLongBreak: React.Dispatch<React.SetStateAction<number>>;
}

function TimeSettings({
  pomodoro,
  shortBreak,
  longBreak,
  setPomodoro,
  setShortBreak,
  setLongBreak,
}: TimeSettingsProps) {
  return (
    <div className="space-y-100 sm:flex sm:gap-300 sm:space-y-0">
      <SettingsInput label="pomodoro" value={pomodoro} setValue={setPomodoro} />
      <SettingsInput
        label="short break"
        value={shortBreak}
        setValue={setShortBreak}
      />
      <SettingsInput
        label="long break"
        value={longBreak}
        setValue={setLongBreak}
      />
    </div>
  );
}

export { TimeSettings };
