import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../shared/components/DashSidebar';
import DashProfile from '../shared/components/DashProfile';
import DashComments from '../shared/components/DashComment';
import DashPosts from '../shared/components/DashPosts';
import DashUsers from '../shared/components/DashUsers';
import DashboardComp from '../shared/components/DashboardComp';
export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
    <div className='md:w-56'>
      {/* Sidebar */}
      <DashSidebar />
    </div>
    {/* profile... */}
    {tab === 'profile' && <DashProfile />}
     {/* posts... */}
     {tab === 'posts' && <DashPosts />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/* comments  */}
      {tab === 'comments' && <DashComments />}
      {/* dashboard comp */}
      {tab === 'dash' && <DashboardComp />}
  </div>
);
}
