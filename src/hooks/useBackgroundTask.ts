import BackgroundTasksContext from "@dashboard/containers/BackgroundTasks/context";
import { useContext } from "react";

function useBackgroundTask() {
  return useContext(BackgroundTasksContext);
}

export default useBackgroundTask;
