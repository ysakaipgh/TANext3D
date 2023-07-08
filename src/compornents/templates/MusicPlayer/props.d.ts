import { type HTMLAttributes } from "react";
import type TextAliveController from "~/mvc/controllers/CtrlTextAlive";

type ReadSongleProps = HTMLAttributes<HTMLElement> & {
  textAlive: TextAliveController;
};

export default ReadSongleProps;
