import React from 'react';

const dropdownYear = (props) => {

  const years = [
    2015,
    2016,
    2017
  ];

  const { selectedValue, onChangeFilterHandler } = props;

  return (
    <select defaultValue={selectedValue} onChange={onChangeFilterHandler} >
      {years.map((value, index) => <option key={index} value={value} selected ={selectedValue === value}>{value}</option>)}
    </select>
  )
}

export default dropdownYear;
