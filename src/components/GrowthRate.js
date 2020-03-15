import React from 'react';
import { daysBetween } from '../helperFunctions';

class GrowthRate extends React.Component {
  state = {
    worldStartDate: new Date("11/17/2019"),
    unitedStatesStartDate: new Date("1/23/2020")
  }

  data = this.props.data;
  worldDayCount = daysBetween(new Date(this.data.date), this.state.worldStartDate);
  unitedStatesDayCount = daysBetween(new Date(this.data.date), this.state.unitedStatesStartDate);
  worldGrowthRate = (Math.log(this.data.world_cases) / this.worldDayCount) * 100;
  daysUntilWorldEnd = Math.log(7500000000) / (this.worldGrowthRate / 100);
  lastWorldInfectionDate = this.addDaysToDate(this.state.worldStartDate, this.daysUntilWorldEnd);
  unitedStatesGrowthRate = (Math.log(this.data.united_states_cases) / this.unitedStatesDayCount) * 100;
  daysUntilUSEnd = Math.log(327000000) / (this.unitedStatesGrowthRate / 100);
  lastUSInfectionDate = this.addDaysToDate(this.state.unitedStatesStartDate, this.daysUntilUSEnd)
  
  addDaysToDate(date, daysToAdd) {
    const temp = new Date(date);
    temp.setDate(temp.getDate() + daysToAdd);
    return temp;
  }

  formatDate(date) {
    const d = new Date(date);
    return(`${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear() % 2000}`)
  }

  render() {
    return (
      <>
        <h2>World Growth Rate: {this.worldGrowthRate.toFixed(2)}% / day *</h2>
        <h3>At this rate, the last healthy human on Earth would be infected on {this.formatDate(this.lastWorldInfectionDate)}.</h3>
        <h2>United States Growth Rate: {this.unitedStatesGrowthRate.toFixed(2)}% / day *</h2>
        <h3>At this rate, the last healthy US citizen would be infected on {this.formatDate(this.lastUSInfectionDate)}.</h3>
        <p>* based on world start date of 11/17/2019 (estimated date of first infection) and a US start date of 1/23/20 (date of first reported infection)</p>
      </>
  )}
}

export default GrowthRate;