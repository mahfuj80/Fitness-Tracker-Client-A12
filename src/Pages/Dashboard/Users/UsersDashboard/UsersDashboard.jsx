import useIsUserAppliedForTrainer from '../../../../hooks/User/useIsUserAppliedForTrainer';

const UsersDashboard = () => {
  const [isApplied] = useIsUserAppliedForTrainer();
  console.log(isApplied);
  return (
    <div>
      <h1>This is UserDashboard Page</h1>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">You Applied For Be A Trainer</div>
          <div className="stat-value">Pending</div>
          <div className="stat-desc">
            Wait Few Days For Get Result. You Will Get Email.
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersDashboard;
