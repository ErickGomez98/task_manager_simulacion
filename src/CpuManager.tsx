import React from 'react';
import 'chartjs-plugin-streaming';
import { Line } from 'react-chartjs-2';
import { Proceso } from './TaskManager';

type CpuManagerProps = {
    data: Array<Proceso>
}

type CpuManagerState = {

}

export default class CpuManager extends React.Component<CpuManagerProps, CpuManagerState>  {

    render() {
        const { data } = this.props;

        return (
            <Line
                data={{
                    datasets: [
                        {
                            label: 'Uso de CPU',
                            backgroundColor: 'rgba(17, 125, 178, 0.2)',
                            borderColor: '#117DBB',
                            data: []
                        }
                    ]
                }}
                options={{
                    scales: {
                        xAxes: [{
                            type: 'realtime',
                            realtime: {
                                delay: 1000,
                                refresh: 1000,
                                duration: 60000,
                                onRefresh: function (chart: any) {
                                    chart.data.datasets.forEach(function (dataset: any) {
                                        dataset.data.push({
                                            x: Date.now(),
                                            y: Math.floor((Math.random() * 100) + 1)
                                        });
                                    });
                                },
                            }
                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: '% de Uso'
                            }
                        }]
                    },
                    plugins: {
                        streaming: {
                            frameRate: 60
                        }
                    },
                    tooltips: {
                        mode: 'nearest',
                        intersect: false
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: false
                    }
                }}
            />
        )
    }
};