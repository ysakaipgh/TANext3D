import { useSelector } from "react-redux";
import { type PositionState } from "~/stores/position/slice";

export const usePositionState = () => {
  return useSelector(
    (state: {
      position: PositionState,
    }) => state
  );
};
