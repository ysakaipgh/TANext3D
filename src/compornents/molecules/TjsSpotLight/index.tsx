import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import type TjsSpotLightProps from "~/compornents/molecules/TjsSpotLight/props";

/**
 * スポットライトのspotLightコンポーネント定義
 *
 * @returns JSX.Element
 */
const TjsSpotLight = ({ lightPower }: TjsSpotLightProps) => {
  // ライティング
  const directionalLight = useRef<THREE.SpotLight>(null);
  // ダイレクト光のヘルパー
  useHelper(
    directionalLight as React.MutableRefObject<THREE.SpotLight>,
    THREE.SpotLightHelper,
    "red"
  );

  return (
    <spotLight
      castShadow={true}
      color={0xFFFFFF}
      power={lightPower}
      scale={0.5}
      position={[0.8, 0.8, 2.0]}
      intensity={0.8}
      shadow-mapSize={[1024, 1024]}
      // @TODO: スポットライトの位置調整時に、可視化するのに使う
      ref={directionalLight}
    />
  );
};

export default TjsSpotLight;
