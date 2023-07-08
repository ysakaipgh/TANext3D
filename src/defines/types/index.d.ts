import type { ReactNode, HTMLAttributes } from "react";

export type OnlyChildrenProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export type WithClassNameProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
};
