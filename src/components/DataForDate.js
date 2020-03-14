import React from 'react';
import { weekDays } from '../data';

const DataForDate = props => {
  const { data } = props;
  data.UTCDate = new Date(data.date);
  return(
    <div>
      <h1> {weekDays[data.UTCDate.getDay()]} {data.date} </h1>
      <ul>
        <li>World Cases: {data.world_cases}</li>
        <li>World Deaths: {data.world_deaths}</li>
        <li>United States Cases: {data.united_states_cases}</li>
        <li>United States Deaths: {data.united_states_deaths}</li>
      </ul>
    </div>
  )
}

export default DataForDate;