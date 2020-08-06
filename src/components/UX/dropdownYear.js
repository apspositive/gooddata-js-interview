import React from 'react';

const dropdownYear = (props) => {

  const years = [
    2015,
    2016,
    2017
  ];

  const { selectedValue, onChangeFilter } = props;

  return (
    <select defaultValue={selectedValue} onChange={onChangeFilter} >
      {years.map((value, index) => <option key={index} value={value}>{value}</option>)}
    </select>
  )
}

export default dropdownYear;
