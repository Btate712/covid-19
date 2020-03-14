import React, { Component } from 'react';
import DataForDate from '../components/DataForDate';
import { WHODat } from '../data';

class GetDateContainer extends Component {
  state = {
    date: "",
    noShow: true
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      noShow: false
    });
  }

  getDataForDate = () => {
    console.log(new Date(this.state.date));
    const dataForDate = WHODat.find(date => new Date(date) === new Date(this.state.date));
    console.log(dataForDate);
  }

  render() {
    return (
      <>
        <form>
          <input name="date" type="date" onChange={this.handleChange} value={this.state.date} />
          <button onClick={this.handleSubmit}>Use this date...</button><br />
          { this.state.noShow ? "" : <DataForDate data={this.getDataForDate()} /> }
        </form>
      </>
    );
  }
}

export default GetDateContainer;