import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

interface AdminDashboardProps {
  changeUser: (user: string) => void;
}

export default function AdminDashboard({ changeUser }: AdminDashboardProps) {
  return (
    <div className='h-screen w-full p-7'>
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}