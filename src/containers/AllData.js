import React, { Component } from 'react';
import { WHODat } from '../data';
import DataForDate from '../components/DataForDate';

class AllData extends Component {
  render() {
    return (
      <div>
        {WHODat.map(dataForDate => <DataForDate data={dataForDate} key={dataForDate.date} />)}
      </div>
    );
  }
}

export default AllData;