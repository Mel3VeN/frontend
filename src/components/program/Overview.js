import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import workouts from '../../dummydata/browse-workouts';

function Overview() {
  const location = useLocation();
  console.log(location);
  const id = location.value;
  return <div>{workouts[id].title}</div>;
}

export default Overview;
