import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

interface EmployeeDashboardProps {
  changeUser: (user: string) => void;
  data: any; // You should define a proper type for `data`
}


export default function EmployeeDashboard({ changeUser, data }: EmployeeDashboardProps) {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>

      <Header changeUser={changeUser} data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
}