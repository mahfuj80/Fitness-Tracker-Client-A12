import Loader from '../../../../Components/Shared/Loading/Loader';
import useAdminStats from '../../../../hooks/Admin/useAdminStats';
import useAuth from '../../../../hooks/Auth/useAuth';

const AdminDashboard = () => {
  const [adminStats, dataLoading] = useAdminStats();
  const { totalSubscribers, totalUsers, totalTrainers, totalAppliedTrainers } =
    adminStats;

  const { loading } = useAuth();

  if (loading || dataLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="stats flex flex-col md:flex-row shadow w-full mr-2 p-4 hover:shadow-2xl mt-2 border-2 lg:mr-8">
        <div className="stat place-items-center">
          <div className="stat-title">Total Subscribers</div>
          <div className="stat-value">{totalSubscribers}</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Users</div>
          <div className="stat-value text-secondary">{totalUsers}</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Trainers</div>
          <div className="stat-value text-secondary">{totalTrainers}</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Applied Trainer</div>
          <div className="stat-value text-secondary">
            {totalAppliedTrainers}
          </div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Revenue</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
