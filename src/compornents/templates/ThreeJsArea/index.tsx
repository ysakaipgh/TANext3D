import { type ReconcilerRoot, createRoot } from "@react-three/fiber";
import { useDispatch } from "react-redux";
import { StrictMode } from "react";
import ThreeJsCanvasArea from "~/compornents/organisms/ThreeJsCanvasArea";
import type ThreeJsAreaProps from "~/compornents/templates/ThreeJsArea/props";
import { HtmlAttrIds } from "~/defines/constants/htmlAttr";
import positionSlice from "~/stores/position/slice";

// createRoot は、コンポーネントの中で定義するとワーニングが出るので、外で定義する
let canvasThreeJsElRoot: ReconcilerRoot<HTMLCanvasElement> | undefined = undefined;
if (typeof window === "object") {
  //documentを使う関数を入れる
  canvasThreeJsElRoot = createRoot(
    document.getElementById(HtmlAttrIds.CTJ_BASE) as HTMLCanvasElement
  );
}

/**
 * Three.jsでの演出表示をまとめたエリア
 *
 * @param param0 楽曲生成に必要な情報
 * @returns JSX.Element
 */
const ThreeJsArea = ({
  textAlive,
  ...props
}: ThreeJsAreaProps) => {
  const dispatch = useDispatch();

  /**
   * 再生中
   *
   * @param position
   */
  function setPositionOnUpdate(
    position: number
  ) {
    if (canvasThreeJsElRoot !== undefined) {
      dispatch(positionSlice.actions.setPosition(position));
    }
  }

  /**
   * リセット
   */
  function resetPosition() {
    if (canvasThreeJsElRoot !== undefined) {
      dispatch(positionSlice.actions.resetPosition());
    }
  }

  // player のイベントバインドなどの初期化を行う。
  textAlive = textAlive?.init(
    setPositionOnUpdate,
    resetPosition
  );
  return (
    <div
      className="cct"
      {...props}
    >
      <StrictMode>
        <ThreeJsCanvasArea
          textAlive={textAlive}
          {...props}
        />
      </StrictMode>
    </div>
  );
};

export default ThreeJsArea;
