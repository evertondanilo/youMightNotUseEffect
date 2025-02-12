import React from "react";
import { AvoidUnnecessaryWatchersGood } from "./AvoidUnecessaryWatchersGood";
import { AvoidUnnecessaryWatchersBad } from "./AvoidUnecessaryWatchersBad";
import { ProperUseEffectExternalAPI } from "./ProperUseEffectExternalAPI";
import { ProperUseEffectSyncLocalStorage } from "./ProperUseEffectSyncLocalStorage";

export const Lesson4 = () => {
  return (
    <>
      <h1>Avoid Unecessary Watchers Bad</h1>
      <AvoidUnnecessaryWatchersBad />
      {/* <h1>Avoid Unecessary Watchers Good</h1>
      <AvoidUnnecessaryWatchersGood /> */}

      {/* <h1>Proper use: External API</h1>
      <ProperUseEffectExternalAPI /> */}

      {/* <h1>Proper use: Sync with local storage</h1>
      <ProperUseEffectSyncLocalStorage /> */}
    </>
  );
};
