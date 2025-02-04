
interface TaskCounts {
  newTask: number;
  completed: number;
  active: number;
  failed: number;
}

interface TaskListNumbersProps {
  data: {
    taskCounts: TaskCounts;
  };
}

export default function TaskListNumbers({ data }: TaskListNumbersProps) {
  return (
    <div className='flex text-white mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>Completed Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400 '>
        <h2 className='text-3xl text-black font-bold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl mt-0.5 text-black font-medium'>Accepted Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
      </div>
    </div>
  );
}