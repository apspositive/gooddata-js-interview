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

  const {selectedValue} = props;

  return(
      <select defaultValue={selectedValue}>
          {months.map ( (value, index) =>  <option value={index+1}>{value}</option>)}
      </select>
  )}

  export default dropdown;
