import React, { Fragment } from 'react';

import { ColumnChart } from '@gooddata/react-components';
import Dropdown from './UX/dropdown';

const chartDetailed = (props) => {

  const { selectedValue, measures, filters, projectId } = props;

  return (
    <Fragment>
      <h1>$ Gross Profit in month <Dropdown selectedValue={selectedValue} /> 2016</h1>
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
