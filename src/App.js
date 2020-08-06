// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';

import '@gooddata/react-components/styles/css/main.css';

import Chartdetailed from './components/chartDetailed';
import Chartperiod from './components/chartPeriod';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

class App extends Component {

    getMonthFilter() {
        return {
            absoluteDateFilter: {
                dataSet: {
                    uri: dateAttribute
                },
                from: '2016-01-01',
                to: '2016-01-31'
            }

        }
    }

    getMeasures() {
        return [
            {
                measure: {
                    localIdentifier: 'm1',
                    definition: {
                        measureDefinition: {
                            item: {
                                uri: grossProfitMeasure
                            }
                        }
                    },
                    alias: '$ Gross Profit'
                }
            }
        ]
    }

    getViewBy() {
        return {
            visualizationAttribute:
            {
                displayForm: {
                    uri: dateAttributeInMonths
                },
                localIdentifier: 'a1'
            }
        }
    }

    render() {
        const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
        const filters = [this.getMonthFilter()];
        const measures = this.getMeasures();
        const viewBy = this.getViewBy();

        return (
            <div className="App">
                <Chartdetailed
                    measures={measures}
                    filters={filters}
                    projectId={projectId}
                />
                <Chartperiod
                    measures={measures}
                    viewBy={viewBy}
                    projectId={projectId}
                />
            </div>
        );
    }
}

export default App;
