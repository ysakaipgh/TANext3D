import type { Euler, Vector3 } from "@react-three/fiber";

type TjsText3DProps = {
  children: string,
  position?: Vector3 | undefined,
  height?: number | undefined,
  lineHeight?: number | undefined,
  bevelEnabled?: boolean | undefined,
  bevelSize?: number | undefined,
  bevelThickness?: number | undefined,
  rotation?: Euler | undefined,
};

export default TjsText3DProps;
