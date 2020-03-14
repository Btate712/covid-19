import React from 'react';
import { weekDays } from '../data';

const DataForDate = props => {
  const { data } = props;
  if(data) {
    data.UTCDate = new Date(data.date);
    return(
      <div>
      <h2> {weekDays[data.UTCDate.getDay()]} {data.date} </h2>
      <ul>
        <li>World Cases: {data.world_cases}</li>
        <li>World Deaths: {data.world_deaths}</li>
        <li>United States Cases: {data.united_states_cases}</li>
        <li>United States Deaths: {data.united_states_deaths}</li>
      </ul>
    </div>
  )} else {
    return (<h2>No data available for this date</h2>);
  }
}

export default DataForDate;