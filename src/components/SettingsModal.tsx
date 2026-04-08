import iconClose from "@/assets/icon-close.svg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSettingsStore } from "@/stores/settingsStore";
import type { ReactNode } from "react";

interface SettingsModalProps {
  children: ReactNode;
}

function SettingsModal({ children }: SettingsModalProps) {
  const close = useSettingsStore((state) => state.close);

  return (
    <div className="bg-blue-850 z-20 fixed inset-0 flex items-center justify-center p-300">
      <div className="flex w-full max-w-[540px] flex-col rounded-2xl bg-white text-blue-900 sm:rounded-3xl">
        <div className="flex items-center justify-between px-300 py-200 sm:p-400">
          <h2 className="font-kumbh-sans text-[28px] leading-[125%] font-bold">
            Settings
          </h2>
          <Button variant="clear" size="clear" onClick={close}>
            <img src={iconClose} alt="Close" />
          </Button>
        </div>
        <Separator className="bg-grey-200" />
        {children}
      </div>
    </div>
  );
}

export { SettingsModal };
