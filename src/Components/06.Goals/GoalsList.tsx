import * as React from 'react';
import { GrClose } from 'react-icons/gr';
import axios from 'axios';

interface ListProps {
  name: string;
  goalAmount: number;
  currentAmount: number;
}

function GoalsList(props: ListProps) {
  const {
    name, goalAmount, currentAmount,
  } = props;

  const style = {
    backgroundColor: '',
    width: '',
  };
  const quickMath = Math.floor((currentAmount * 100) / goalAmount);
  style.width = `${quickMath}%`;

  if (quickMath >= 75) {
    style.backgroundColor = 'green';
  } else if (quickMath <= 25) {
    style.backgroundColor = 'red';
  } else {
    style.backgroundColor = 'yellow';
  }

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
    <div className="a-goal">
      <div className="name-bar">
        {name}
        <div className="status-bar-back">
          <div className="status-bar" style={style}> </div>
        </div>
      </div>
      <div className="icons-edit-delete" role="button" tabIndex={0} onClick={() => handleDelete(name)} onKeyPress={() => handleDelete(name)}>
        <GrClose size={25} color="#696969" />
      </div>
    </div>
  );
}

export default GoalsList;
