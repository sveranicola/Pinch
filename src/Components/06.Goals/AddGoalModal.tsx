import * as React from 'react';

interface openclose {
  handleClose: any,
  show: boolean,
}

function AddGoalModal(props: openclose) {
  const { handleClose, show } = props;
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [name, updateName] = React.useState<any>();
  const [goal, updateGoal] = React.useState<any>();
  const [current, updateCurrent] = React.useState<any>();
  const [description, updateDescription] = React.useState<any>();

  function submitGoal() {
    // axios here
    console.log(name, description, goal, current);

    handleClose();
  }

  return (
    <div className="goal-modal">
      <div className={showHideClassName}>
        <section className="modal-main">
          <div> NEW GOAL UWU </div>
          <div> Goal Name: </div>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => { updateName(e.target.value); }}
          />
          <div> Goal Description: </div>
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => { updateDescription(e.target.value); }}
          />
          <div> Goal Amount: </div>
          <input
            type="text"
            placeholder="Amount"
            onChange={(e) => { updateGoal(e.target.value); }}
          />
          <div> Add to Goal: </div>
          <input
            type="text"
            placeholder="Add funds"
            onChange={(e) => { updateCurrent(e.target.value); }}
          />
          <button type="submit" onClick={() => submitGoal()}> submit </button>
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    </div>
  );
}

export default AddGoalModal;
