import { useState } from "react";

interface SlowServerDetectorHook {
  serverSlow: boolean;
  detectSlowServer: () => NodeJS.Timeout;
  clearSlowServerDetection: (timeoutTimer: NodeJS.Timeout) => void;
  resetServerStatus: () => void;
}

const useSlowServerDetector = (
  timeoutDuration: number = 5000
): SlowServerDetectorHook => {
  const [serverSlow, setServerSlow] = useState<boolean>(false);

  const detectSlowServer = (): NodeJS.Timeout => {
    const timeoutTimer = setTimeout(() => {
      setServerSlow(true);
    }, timeoutDuration);

    return timeoutTimer;
  };

  const clearSlowServerDetection = (timeoutTimer: NodeJS.Timeout): void => {
    clearTimeout(timeoutTimer);
  };

  const resetServerStatus = (): void => {
    setServerSlow(false);
  };

  return {
    serverSlow,
    detectSlowServer,
    clearSlowServerDetection,
    resetServerStatus,
  };
};

export default useSlowServerDetector;
