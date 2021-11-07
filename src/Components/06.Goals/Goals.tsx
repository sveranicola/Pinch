import * as React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { BsPiggyBank } from 'react-icons/bs';
import { IoIosAddCircleOutline } from 'react-icons/io';
import GoalsList from './GoalsList';
import exampleGoals from './exampleGoals';
import GoalChart from './GoalChart';

function Goals() {
  const [currentGoals, updateGoals] = React.useState<any>([
    {
      name: 'Goal Name here',
      goalAmount: 100.00,
      currentAmount: 80.00,
      description: 'Your Description here',
    },
  ]);
  const [userPickedGoal, pickedGoal] = React.useState<any>({
    name: 'Goal Name here',
    goalAmount: 100.00,
    currentAmount: 80.00,
    description: 'Your Description here',
  });

  React.useEffect(() => {
    if (exampleGoals.getuserinfo.goals.length > 0) {
      updateGoals(exampleGoals.getuserinfo.goals);
      pickedGoal(exampleGoals.getuserinfo.goals[0]);
    }
  }, []);

  function abrakadabra(data: any) {
    pickedGoal(data);
  }

  return (
    <div className="goals-page">
      <div className="goals-list">
        <div className="current-goals">
          <div>
            YOUR CURRENT GOALS
          </div>
          <BsPiggyBank size={25} />
        </div>
        <div>
          goals end up here
          {currentGoals.map((goal: any) => (
            <div key={goal.name} role="button" tabIndex={0} onClick={() => abrakadabra(goal)} onKeyPress={() => abrakadabra(goal)}>
              <GoalsList {...goal} />
            </div>
          ))}
        </div>
        <div className="add-new">
          <div>
            Add a new Goal
          </div>
          <IoIosAddCircleOutline size={25} />
        </div>
      </div>
      <div className="goals-analytics">
        <div className="current-goal-title">
          <div>
            {userPickedGoal.name}
          </div>
          <div className="icon-style">
            <FaRegEdit size={25} color="#696969" />
            <GrClose size={25} color="#696969" />
          </div>
        </div>
        <div className="chart-space">
          <div className="description">
            <div>
              Description
            </div>
            <div>
              {userPickedGoal.description}
            </div>
            <GoalChart {...userPickedGoal} />
          </div>
          <div className="forecast">
            Forecast
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
