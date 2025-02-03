import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

interface Task {
  active: boolean;
  newTask: boolean;
  completed: boolean;
  failed: boolean;
  category: string;
  taskDate: string;
  taskTitle: string;
  taskDescription: string;
}

interface TaskListProps {
  data: {
    tasks: Task[];
  };
}

export default function TaskList({ data }: TaskListProps) {
  return (
    <div id='tasklist' className='h-[50%] text-white overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        return null;
      })}
    </div>
  );
}