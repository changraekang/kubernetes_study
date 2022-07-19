import React from 'react';
import {TradingViewStockChartWidget} from 'react-tradingview-components'


const Chart = () => {
    return (
        <div>
            <TradingViewStockChartWidget 
              symbol='UPBIT:BTCKRW'
              theme='Light' 
              range='12m'
            />
        </div>
    );
};

export default Chart;