import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import workouts from '../../dummydata/browse-workouts';
import Programheader from './Programheader';

function Overview({ match }) {
  console.log(match.params);
  const { id } = match.params;

  return (
    <div>
      <Programheader title={workouts[id].title} />
    </div>
  );
}

export default Overview;
