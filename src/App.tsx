import { Settings } from "@/components/Settings";
import { ModeTabs } from "@/components/ModeTabs";
import { Clock } from "@/components/Clock";
import { Button } from "@/components/ui/button";
import iconSettings from "@/assets/icon-settings.svg";
import { useSettingsStore } from "@/stores/settingsStore";

function App() {
  const isOpen = useSettingsStore((state) => state.isOpen);
  const open = useSettingsStore((state) => state.open);

  return (
    <div className="container mx-auto flex min-h-svh flex-col items-center justify-between px-300 py-400 sm:py-1000">
      <h1 className="font-kumbh-sans text-center text-2xl font-bold text-blue-100 sm:text-[32px]">
        pomodoro
      </h1>
      <ModeTabs />
      <Clock />
      <Button className="z-10" variant="clear" size="clear" onClick={open}>
        <img src={iconSettings} alt="Settings" />
      </Button>
      {isOpen && <Settings />}
    </div>
  );
}

export { App };
