import * as React from 'react';
import { GrClose } from 'react-icons/gr';

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

  return (
    <div className="a-goal">
      <div className="name-bar">
        {name}
        <div className="status-bar-back">
          <div className="status-bar" style={style}> </div>
        </div>
      </div>
      <div className="icons-edit-delete">
        <GrClose size={25} color="#696969" />
      </div>
    </div>
  );
}

export default GoalsList;
