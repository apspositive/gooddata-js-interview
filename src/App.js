// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';

import '@gooddata/react-components/styles/css/main.css';

import Chartdetailed from './components/chartDetailed';
import Chartperiod from './components/chartPeriod';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

class App extends Component {

    state = {
        monthsSelected: 1,
        yearSelected: 2016
    }

    getMonthFilter(month, year) {
        return {
            absoluteDateFilter: {
                dataSet: {
                    uri: dateAttribute
                },
                from: year + '-' + month + '-01',
                to: year + '-' + month + '-31'
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

    onChangeFilterMonth(event) {
        const newMonth = event.target.value;

        this.setState({ monthsSelected: newMonth });
    }

    onChangeFilterYear(event) {
        const newYear = event.target.value;

        this.setState({ yearSelected: newYear });
    }

    render() {
        const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
        const filters = [this.getMonthFilter(this.state.monthsSelected, this.state.yearSelected)];
        const measures = this.getMeasures();
        const viewBy = this.getViewBy();
        const onChangeFilterMonth = this.onChangeFilterMonth.bind(this);
        const onChangeFilterYear = this.onChangeFilterYear.bind(this);

        return (
            <div className="App">
                <Chartdetailed
                    measures={measures}
                    filters={filters}
                    projectId={projectId}
                    selectedValueMonth={this.state.monthsSelected}
                    selectedValueYear={this.state.yearSelected}
                    onChangeFilterMonth={onChangeFilterMonth}
                    onChangeFilterYear={onChangeFilterYear}
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
