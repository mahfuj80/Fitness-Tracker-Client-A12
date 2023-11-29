import useIsUserAppliedForTrainer from '../../../../hooks/User/useIsUserAppliedForTrainer';

const UsersDashboard = () => {
  const [isApplied] = useIsUserAppliedForTrainer();
  console.log(isApplied);
  return (
    <>
      <div>
        {isApplied ? (
          <div className="stats shadow m-4 border-2 hover:shadow-2xl">
            <div className="stat">
              <div className="stat-title text-xl font-extrabold">
                You Applied To Be A Trainer
              </div>
              <div className="stat-value">
                Status: <span className="text-lg">Pending</span>
              </div>
              <div className="stat-desc">
                Wait Few Days For Get Result. You Will Get Email.
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default UsersDashboard;
