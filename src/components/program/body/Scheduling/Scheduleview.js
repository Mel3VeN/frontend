import Day from './Day';

function Scheduleview({ days, status }) {
  let number = 0;
  if (status === false) {
    number = 3;
  } else number = 100;
  const threedays = days
    .slice(0, number)
    .map((day, index) => (
      <Day
        day={day.day}
        key={index}
        kcal={day.Workout.calories}
        time={day.Workout.duration}
        category={day.Workout.categories[0]}
      />
    ));
  return <div>{threedays}</div>;
}

export default Scheduleview;
