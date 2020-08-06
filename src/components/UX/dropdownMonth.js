import React from 'react';

const dropdownMonth = (props) => {

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const { selectedValue, onChangeFilterHandler } = props;

  return (
    <select defaultValue={selectedValue} onChange={onChangeFilterHandler} >
      {months.map((value, index) => <option key={index} value={index + 1} selected ={selectedValue === index + 1}>{value}</option>)}
    </select>
  )
}

export default dropdownMonth;
