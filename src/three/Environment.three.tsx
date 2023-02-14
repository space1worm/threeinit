import { Environment } from "@react-three/drei";

/**
 *
 */
export default function EnvironmentThree(): JSX.Element {
  return <Environment background preset="sunset" blur={0.8} far={200} />;
}
