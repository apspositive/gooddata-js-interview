import React from 'react';

const dropdown = (props) => {

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

  const { selectedValue, onChangeFilter } = props;

  return (
    <select defaultValue={selectedValue} onChange={onChangeFilter} >
      {months.map((value, index) => <option key ={index} value={index + 1}>{value}</option>)}
    </select>
  )
}

export default dropdown;
