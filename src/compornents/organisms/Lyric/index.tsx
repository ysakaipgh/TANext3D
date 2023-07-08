"use client";

import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import TjsText3D from "~/compornents/molecules/TjsText3D";
import type ThreeJsAreaProps from "~/compornents/templates/ThreeJsArea/props";
import { usePositionState } from "~/stores/position/state";

/**
 * 歌詞のエリア
 *
 * @param param0 楽曲生成に必要な情報
 * @returns JSX.Element
 */
const Lyric = ({ textAlive }: ThreeJsAreaProps) => {
  const position = usePositionState().position.position;
  const player = textAlive?.getPlayer();

  // 歌詞
  const lyric = textAlive?.getCaCtrl().ctrlLyricsAndEmotion(
    position,
    player
  )?.text ?? "";
  const [lyricState, setLyricState] = useState(lyric);
  if (lyric !== "") {
    setLyricState(lyric);
  }

  return (
    <>
      {/* コントロール */}
      <OrbitControls
        makeDefault
      />

      {/* 背景 */}
      <color args={["black"]} attach="background" />

      <group
        position={[0, 0, 0]}
        name="groupLyric"
      >
        {/* 歌詞 */}
        <TjsText3D
          position={[3.0, 1.5, 0.0]}
          height={0.3}
          lineHeight={0.6}
          bevelEnabled={true}
          bevelSize={0.05}
          bevelThickness={0.05}
          rotation={[0.3, -0.3, -0.3]}
        >
          {lyricState}
        </TjsText3D>
      </group>
    </>
  );
};

export default Lyric;
