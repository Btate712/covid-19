import React, { Component } from 'react';
import DataForDate from '../components/DataForDate';
import { WHODat } from '../data';
import { formatDateToString } from '../helperFunctions';

class GetDateContainer extends Component {
  state = {
    date: "",
    noShow: true
  }

  handleChange = event => {
    this.setState({
      noShow: false,
      [event.target.name]: event.target.value
    })
  }

  getDataForDate = () => {
    const dateToFind = formatDateToString(this.state.date);
    const dataForDate = WHODat.find(dateData => dateData.date === dateToFind);
    return dataForDate;
  }

  render() {
    return (
      <>
        <form>
          <input name="date" type="date" onChange={this.handleChange} value={this.state.date} />
          { this.state.noShow ? "" : <DataForDate data={this.getDataForDate()} /> }
        </form>
      </>
    );
  }
}

export default GetDateContainer;