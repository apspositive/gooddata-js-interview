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
        monthSelected: 1,
        yearSelected: 2016
    }

    previousNode = null;

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

    onChangeFilterMonthHandler(event) {
        const newMonth = event.target.value;

        this.setState({ monthSelected: newMonth })
    }

    onChangeFilterYearHandler(event) {
        const newYear = event.target.value;

        this.setState({ yearSelected: newYear })
    }


    chartPeriodClickHandler(event) {
        if (!(event.target.tagName === 'rect' && !event.target.className.baseVal))
            return; // takes effect only on rects 

        let parentNode = event.target.parentElement;
        // remove the highlight


        //if (this.previousNode)
            // leave it for later this.previousNode.style.fill = 'rgb(20, 178, 226)';
        // parentNode.child[ (this.state.yearSelected - 2015 )* 12 + this.state.monthSelected - 1].className = '';

        let res = {
            monthSelected: 1,
            yearSelected: 2016
        }; // defaults 

        for (let i = 0; i < parentNode.children.length; i++) {

            if (parentNode.children[i] === event.target) {
                res.yearSelected = 2015 + Math.floor(i / 12);
                res.monthSelected = 1 + i % 12;

                // for later improvements event.target.style.fill = 'rgb(225, 178, 26)';
                //this.previousNode = event.target;

                this.setState(res);

                break
            }
        }
    }

    render() {
        const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
        const filters = [this.getMonthFilter(this.state.monthSelected, this.state.yearSelected)];
        const measures = this.getMeasures();
        const viewBy = this.getViewBy();
        const onChangeFilterMonthHandler = this.onChangeFilterMonthHandler.bind(this);
        const onChangeFilterYearHandler = this.onChangeFilterYearHandler.bind(this);
        const chartPeriodClickHandler = this.chartPeriodClickHandler.bind(this);

        return (
            <div className="App">
                <Chartdetailed
                    measures={measures}
                    filters={filters}
                    projectId={projectId}
                    selectedValueMonth={this.state.monthSelected}
                    selectedValueYear={this.state.yearSelected}
                    onChangeFilterMonthHandler={onChangeFilterMonthHandler}
                    onChangeFilterYearHandler={onChangeFilterYearHandler}
                />
                <Chartperiod
                    id='groupChart'
                    measures={measures}
                    viewBy={viewBy}
                    projectId={projectId}
                    chartPeriodClickHandler={chartPeriodClickHandler}
                />
            </div>
        );
    }
}

export default App;
