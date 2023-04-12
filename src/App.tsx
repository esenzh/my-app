import { useInitializeFeature } from "./useInitializeFeature";
import Test from "./Test";

function App(): JSX.Element | null {
  const isFeatureReady = useInitializeFeature();

  if (isFeatureReady) {
    return <Test />;
  }

  return null;
}

export default App;
