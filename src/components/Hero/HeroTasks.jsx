import { useContext } from "react";
import { TaskContext } from "../../utils/taskContext";
import Task from "./Task";
const HeroTasks = () => {
  const { taskInfo, setTaskInfo } = useContext(TaskContext);

  return (
    <div className=" p-2 flex flex-col gap-1 items-center overflow-y-auto">
      {taskInfo.length === 0 ? (
        <h1 className="text-center max-xs:text-sm  font-medium sm:text-lg mt-10">
          Your to-do list is as empty as your fridge on a Sunday night.
        </h1>
      ) : (
        taskInfo.map((task) => {
          const { id, taskTitle, taskDate, isCompleted } = task;
          return (
            <Task
              key={id}
              id={id}
              taskTitle={taskTitle}
              isCompleted={isCompleted}
              taskInfo={taskInfo}
              setTaskInfo={setTaskInfo}
            />
          );
        })
      )}
    </div>
  );
};

export default HeroTasks;
