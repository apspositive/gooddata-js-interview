import React, { Fragment } from 'react';

import { ColumnChart } from '@gooddata/react-components';
import DropdownMonth from './UX/dropdownMonth';
import DropdownYear from './UX/dropdownYear';

const chartDetailed = (props) => {

  const { selectedValueMonth, selectedValueYear, measures, filters, projectId, onChangeFilterMonthHandler, onChangeFilterYearHandler } = props;

  return (
    <Fragment>
      <h1>$ Gross Profit in month <DropdownMonth selectedValue={selectedValueMonth} onChangeFilterHandler={onChangeFilterMonthHandler} /> <DropdownYear selectedValue={selectedValueYear} onChangeFilterHandler={onChangeFilterYearHandler} /> </h1>
      <div>
        <ColumnChart
          measures={measures}
          filters={filters}
          projectId={projectId}
        />
      </div>
    </Fragment>
  )
}

export default chartDetailed;
