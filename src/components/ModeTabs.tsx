import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSettingsStore } from "@/stores/settingsStore";
import clsx from "clsx";

function ModeTabs() {
  const mode = useSettingsStore((state) => state.mode);
  const setMode = useSettingsStore((state) => state.setMode);

  const font = useSettingsStore((state) => state.font);
  const color = useSettingsStore((state) => state.color);

  return (
    <Tabs className="z-10" defaultValue={mode}>
      <TabsList>
        <TabsTrigger
          className={clsx(
            "text-[12px] font-bold tracking-[0px] transition-colors duration-300",
            {
              "data-[state=active]:bg-red-400": color === "red",
              "data-[state=active]:bg-cyan-300": color === "cyan",
              "data-[state=active]:bg-purple-400": color === "purple",

              "font-kumbh-sans leading-[125%] sm:text-sm sm:leading-[120%]":
                font === "Kumbh Sans",
              "font-roboto-slab leading-[133%] sm:text-sm sm:leading-[130%]":
                font === "Roboto Slab",
              "font-space-mono leading-[150%] sm:text-[13px] sm:leading-[145%]":
                font === "Space Mono",
            },
          )}
          value="pomodoro"
          onClick={() => setMode("pomodoro")}
        >
          pomodoro
        </TabsTrigger>
        <TabsTrigger
          className={clsx(
            "text-[12px] font-bold tracking-[0px] transition-colors duration-300",
            {
              "data-[state=active]:bg-red-400": color === "red",
              "data-[state=active]:bg-cyan-300": color === "cyan",
              "data-[state=active]:bg-purple-400": color === "purple",

              "font-kumbh-sans leading-[125%] sm:text-sm sm:leading-[120%]":
                font === "Kumbh Sans",
              "font-roboto-slab leading-[133%] sm:text-sm sm:leading-[130%]":
                font === "Roboto Slab",
              "font-space-mono leading-[150%] sm:text-[13px] sm:leading-[145%]":
                font === "Space Mono",
            },
          )}
          value="shortBreak"
          onClick={() => setMode("shortBreak")}
        >
          short break
        </TabsTrigger>
        <TabsTrigger
          className={clsx(
            "text-[12px] font-bold tracking-[0px] transition-colors duration-300",
            {
              "data-[state=active]:bg-red-400": color === "red",
              "data-[state=active]:bg-cyan-300": color === "cyan",
              "data-[state=active]:bg-purple-400": color === "purple",

              "font-kumbh-sans leading-[125%] sm:text-sm sm:leading-[120%]":
                font === "Kumbh Sans",
              "font-roboto-slab leading-[133%] sm:text-sm sm:leading-[130%]":
                font === "Roboto Slab",
              "font-space-mono leading-[150%] sm:text-[13px] sm:leading-[145%]":
                font === "Space Mono",
            },
          )}
          value="longBreak"
          onClick={() => setMode("longBreak")}
        >
          long break
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export { ModeTabs };
