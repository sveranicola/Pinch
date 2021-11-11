import * as React from 'react';
import axios from 'axios';
// import { FaRegEdit } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { BsPiggyBank } from 'react-icons/bs';
import { IoIosAddCircleOutline } from 'react-icons/io';
import GoalsList from './GoalsList';
// import exampleGoals from './exampleGoals';
import GoalChart from './GoalChart';
import AddGoalModal from './AddGoalModal';

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
  const [show, updateShow] = React.useState<boolean>(false);
  const [addby, updateNumber] = React.useState<any>();

  React.useEffect(() => {
    const headers = { 'Content-Type': 'application/json' };
    axios.post('/graphql',
      JSON.stringify({
        query: `query { getUserInfo(id: "618a8a5b6dd51820651700f5") {
          id
          goals {
            name
            currentAmount
            goalAmount
            description
          }
          }
        }`,
      }), { headers })
      .then((result) => {
        if (result.data.data.getUserInfo.goals.length > 0) {
          updateGoals(result.data.data.getUserInfo.goals);
          pickedGoal(result.data.data.getUserInfo.goals[0]);
        }
      })
      .catch((error) => { throw (error); });
  }, []);

  function abrakadabra(data: any) {
    pickedGoal(data);
  }

  function handleClose() {
    updateShow(false);
  }
  console.log(typeof addby);

  function handleDelete(goalName: string) {
    const headers = { 'Content-Type': 'application/json' };
    axios.post('/graphql',
      JSON.stringify({
        query: `mutation { deleteGoal(
        id: "618a8a5b6dd51820651700f5"
        goalName: "${goalName}") {
          lastName
          }
        }`,
      }), { headers })
      .then((result) => result)
      .catch((error) => { throw (error); });
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
          <div role="button" tabIndex={0} onClick={() => updateShow(true)} onKeyPress={() => updateShow(true)}>
            <IoIosAddCircleOutline size={25} />
          </div>
        </div>
      </div>
      <div className="goals-analytics">
        <div className="current-goal-title">
          <div>
            {userPickedGoal.name}
          </div>
          <div className="icon-style">
            {/* <FaRegEdit size={25} color="#696969" /> */}
            <div role="button" tabIndex={0} onClick={() => handleDelete(userPickedGoal.name)} onKeyPress={() => handleDelete(userPickedGoal.name)}>
              <GrClose size={25} color="#696969" />
            </div>
          </div>
        </div>
        <div className="chart-space">
          <div className="description">
            <GoalChart {...userPickedGoal} />
          </div>
          <div className="forecast">
            <div> Description </div>
            <div>
              {userPickedGoal.description}
            </div>
            <div> Current Goal: </div>
            <div>
              {userPickedGoal.goalAmount}
            </div>
            <div> Current Amount Saved: </div>
            <div>
              {userPickedGoal.currentAmount}
            </div>
            <div> Amout to reach goal: </div>
            <div>
              {(userPickedGoal.goalAmount - userPickedGoal.currentAmount).toFixed(2)}
            </div>
            <div>
              <input
                type="number"
                placeholder="Add amount here"
                onChange={(e) => { updateNumber(e.target.value); }}
              />
            </div>
            <button type="submit"> submit </button>
          </div>
        </div>
      </div>
      <AddGoalModal show={show} handleClose={() => { handleClose(); }} />
    </div>
  );
}

export default Goals;
