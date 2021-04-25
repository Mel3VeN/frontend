import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import workouts from '../../dummydata/browse-workouts';

function Overview() {
  const location = useLocation();
  const id = location.value;
  return <div>{workouts[id].title}</div>;
}

export default Overview;
