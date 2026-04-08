import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import type { ReactNode } from "react";

interface SettingsSectionProps {
  title: string;
  withDivider?: boolean;
  inRow?: boolean;
  children: ReactNode;
}

function SettingsSection({
  title,
  withDivider = true,
  inRow = false,
  children,
}: SettingsSectionProps) {
  return (
    <>
      <div
        className={clsx(
          "flex flex-col gap-100 px-300 py-200 sm:px-400 sm:py-300",
          {
            "sm:flex-row sm:items-center": inRow,
          },
        )}
      >
        <h3 className="font-kumbh-sans text-center text-[11px] font-bold tracking-[4.23px] uppercase sm:text-left">
          {title}
        </h3>
        {children}
      </div>
      {withDivider && <Separator className="bg-grey-200" />}
    </>
  );
}

export { SettingsSection };
