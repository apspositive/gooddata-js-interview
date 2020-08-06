import React, { Fragment } from 'react';

import { ColumnChart } from '@gooddata/react-components';

const chartPeriod = (props) => {

  const { measures, viewBy, projectId } = props;

  return (
    <Fragment>
      <h1>$ Gross Profit - All months</h1>
      <div>
        <ColumnChart
          measures={measures}
          viewBy={viewBy}
          projectId={projectId}
        />
      </div>
    </Fragment>
  )
}

export default chartPeriod;
