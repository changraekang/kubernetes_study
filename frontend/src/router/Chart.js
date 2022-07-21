import React from 'react';
import {TradingViewStockChartWidget} from 'react-tradingview-components'


const Chart = () => {
    return (
        <div>
            <TradingViewStockChartWidget 
              symbol='UPBIT:BTCKRW'
              interval='1'
              timezone= 'Asia/Seoul'
            />
        </div>
    );
};

export default Chart;