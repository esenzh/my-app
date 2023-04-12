import { useFeatureFlagActive } from "@kameleoon/react-sdk";

export default function Test(): JSX.Element {
  const { isFeatureActive, error } = useFeatureFlagActive(
    "98983",
    "react_sdk_tesst"
  );

  // console.log("error: ", error);
  // console.log("isFeatureActive: ", isFeatureActive);

  if (isFeatureActive) {
    return <h1>BLOOOOOOOOOOOOOW</h1>;
  }

  return <h1>Test</h1>;
}
