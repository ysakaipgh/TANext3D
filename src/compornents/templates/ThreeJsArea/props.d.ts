import { type HTMLAttributes } from "react";
import type TextAliveController from "~/mvc/controllers/CtrlTextAlive";

type ThreeJsAreaProps = HTMLAttributes<HTMLElement> & {
  textAlive?: TextAliveController;
};

export default ThreeJsAreaProps;
