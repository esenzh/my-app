import { useInitialize, useAddData, CustomData } from "@kameleoon/react-sdk";

export function useInitializeFeature(): boolean {
  const { isFeatureReady } = useInitialize();
  const { addData } = useAddData();

  if (isFeatureReady) {
    const result = addData("98983", new CustomData(1, "98983"));

    // console.log(result);
  }

  return isFeatureReady;
}
