import * as React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { BsPiggyBank } from 'react-icons/bs';
import { IoIosAddCircleOutline } from 'react-icons/io';

function Goals() {
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
            GOAL NAME
          </div>
          <div className="icon-style">
            <FaRegEdit size={25} color="#696969" />
            <GrClose size={25} color="#696969" />
          </div>
        </div>
        <div className="chart-space">
          <div className="description">
            Description
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
