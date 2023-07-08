import { Text3D } from "@react-three/drei";
import type TjsText3DProps from "~/compornents/molecules/TjsText3D/props";

/**
 * テキストのText3Dコンポーネント定義
 *
 * @returns JSX.Element
 */
const TjsText3D = ({
  children,
  position,
  height,
  lineHeight,
  bevelEnabled,
  bevelSize,
  bevelThickness,
  rotation,
}: TjsText3DProps) => {
  return (
    <Text3D
      font="assets/Zen_Kaku_Gothic_New_Light_Regular.json"
      position={position}
      height={height}
      lineHeight={lineHeight}
      bevelEnabled={bevelEnabled}
      bevelSize={bevelSize}
      bevelThickness={bevelThickness}
      rotation={rotation}
    >
      {children}
      <meshNormalMaterial />
    </Text3D>
  );
};

export default TjsText3D;
