import React, { Component, Fragment } from 'react';

import { ColumnChart } from '@gooddata/react-components';

class chartPeriod  extends Component {


  render() {
    const { measures, viewBy, projectId, chartPeriodClickHandler } = this.props;

    return (
      <Fragment>
        <h1>$ Gross Profit - All months</h1>
        <div onClick = {chartPeriodClickHandler}>
          <ColumnChart 
            measures={measures}
            viewBy={viewBy}
            projectId={projectId}
          />
        </div>
      </Fragment>
    )
  }
}

export default chartPeriod;
