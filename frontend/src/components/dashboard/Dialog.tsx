import {
  CSSProperties,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";

import { DialogProps as DialogRootProps } from "@radix-ui/react-dialog";
import { ClassValue } from "clsx";

import TitleWithIcon from "@/components/shared/TitleWithIcon";
import {
  DialogContent,
  DialogContentProps,
  DialogHeader,
  Dialog as DialogRoot,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DrawerContent,
  DrawerContentProps,
  DrawerHeader,
  Drawer as DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useBreakpoint from "@/hooks/useBreakpoint";
import { cn } from "@/lib/utils";

interface DialogProps extends PropsWithChildren {
  rootProps?: DialogRootProps;
  trigger?: ReactNode;
  dialogContentProps?: DialogContentProps;
  drawerContentProps?: DrawerContentProps;
  isAutoHeight?: boolean;
  headerClassName?: ClassValue;
  titleIcon?: ReactElement;
  title: string;
  headerEndContent?: ReactNode;
}

export default function Dialog({
  rootProps,
  trigger,
  dialogContentProps,
  drawerContentProps,
  isAutoHeight,
  headerClassName,
  titleIcon,
  title,
  headerEndContent,
  children,
}: DialogProps) {
  const { className: dialogContentClassName, ...restDialogContentProps } =
    dialogContentProps || {};
  const { className: drawerContentClassName, ...restDrawerContentProps } =
    drawerContentProps || {};

  const { md } = useBreakpoint();

  if (md)
    return (
      <DialogRoot {...rootProps}>
        {trigger && (
          <DialogTrigger asChild className="appearance-none">
            {trigger}
          </DialogTrigger>
        )}

        <DialogContent
          className={cn(
            "flex w-[calc(100dvw-var(--sm-mx)*2)] max-w-4xl flex-col gap-0 overflow-hidden bg-popover p-0",
            !isAutoHeight
              ? "h-[calc(100dvh-var(--sm-my)*2)] max-h-none"
              : "h-auto max-h-[calc(100dvh-var(--sm-my)*2)]",
            dialogContentClassName,
          )}
          style={{ "--sm-mx": "2rem", "--sm-my": "2rem" } as CSSProperties}
          onOpenAutoFocus={(e) => e.preventDefault()}
          overlay={{ className: "bg-background/80" }}
          {...restDialogContentProps}
        >
          <DialogHeader
            className={cn("relative space-y-0 p-4", headerClassName)}
          >
            <TitleWithIcon icon={titleIcon}>{title}</TitleWithIcon>

            {headerEndContent && (
              <div className="absolute right-[calc(8px+20px+16px)] top-1/2 flex -translate-y-2/4 flex-row gap-1">
                {headerEndContent}
              </div>
            )}
          </DialogHeader>

          {children}
        </DialogContent>
      </DialogRoot>
    );
  return (
    <DrawerRoot {...rootProps}>
      {trigger && (
        <DrawerTrigger asChild className="appearance-none">
          {trigger}
        </DrawerTrigger>
      )}

      <DrawerContent
        className={cn(
          "mt-0 max-h-dvh rounded-t-lg bg-popover p-0",
          !isAutoHeight ? "!bottom-0 !top-auto !h-dvh" : "min-h-[50dvh]",
          drawerContentClassName,
        )}
        thumbClassName="hidden"
        overlay={{ className: "bg-background/80" }}
        {...restDrawerContentProps}
      >
        <DrawerHeader className={cn("relative p-4", headerClassName)}>
          <TitleWithIcon icon={titleIcon}>{title}</TitleWithIcon>

          {headerEndContent && (
            <div className="absolute right-4 top-1/2 flex -translate-y-2/4 flex-row gap-1">
              {headerEndContent}
            </div>
          )}
        </DrawerHeader>

        {children}
      </DrawerContent>
    </DrawerRoot>
  );
}
