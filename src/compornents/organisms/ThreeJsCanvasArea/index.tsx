import { Canvas } from "@react-three/fiber";
import Basic from "~/compornents/organisms/Basic";
import type ThreeJsAreaProps from "~/compornents/templates/ThreeJsArea/props";
import { HtmlAttrIds } from "~/defines/constants/htmlAttr";
import Lyric from "../Lyric";
import { canvasStyle } from "~/defines/constants/define";

/**
 * Three.jsのCanvasをまとめたエリア
 *
 * @param param0 楽曲生成に必要な情報
 * @returns JSX.Element
 */
const ThreeJsCanvasArea = ({ textAlive, ...props }: ThreeJsAreaProps) => {
  return (
    <>
      <Canvas
        style={{
          ...canvasStyle,
          zIndex: 2,
        }}
        id={HtmlAttrIds.CTJ_BASE}
        camera={{
          fov: 45,
          near: 0.8,
          far: 10,
          position: [2.5, 2.8, 3.5],
        }}
        {...props}
      >
        <Basic textAlive={textAlive} />
      </Canvas>
      <Canvas
        style={{
          ...canvasStyle,
          zIndex: 1,
        }}
        {...props}
      >
        <Lyric textAlive={textAlive} />
      </Canvas>
    </>
  );
};

export default ThreeJsCanvasArea;
