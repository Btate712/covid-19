import React, { Component } from 'react';
import DataForDate from '../components/DataForDate';
import { WHODat } from '../data';
import { formatDateToString } from '../helperFunctions';
import GrowthRate from '../components/GrowthRate';

class GetDateContainer extends Component {
  state = {
    date: "",
    noShow: true,
    showGrowthRate: false
  }

  handleChange = event => {
    this.setState({
      noShow: false,
      showGrowthRate: false,
      [event.target.name]: event.target.value
    })
  }

  getDataForDate = () => {
    const dateToFind = formatDateToString(this.state.date);
    const dataForDate = WHODat.find(dateData => dateData.date === dateToFind);
    return dataForDate;
  }

  showDataIfDateSelected = () => {
    if(this.state.noShow) {
      return "";
    } else {
      const dataForDate = this.getDataForDate();
      return (
        <>
          <DataForDate data={dataForDate} />
          { this.state.showGrowthRate ? <GrowthRate data={dataForDate} /> : "" }
          <br />
          { dataForDate ? <button onClick={this.showGrowthRate}>{this.state.showGrowthRate ? "Hide" : "Show"} Growth Rate</button> : "" }
        </>
      );
    }
  }

  showGrowthRate = () => {
    this.setState({
      showGrowthRate: !this.state.showGrowthRate
    })
  }

  render() {
    return (
      <>
        <form>
          <br />
          <label>Select date:
          <input name="date" type="date" onChange={this.handleChange} value={this.state.date} /></ label>
        </form>
        { this.showDataIfDateSelected() }
      </>
    );
  }
}

export default GetDateContainer;