import React from 'react';
import 'chartjs-plugin-streaming';
import { Line } from 'react-chartjs-2';

type CpuManagerProps = {
    data: number
}

type CpuManagerState = {

}

export default class CpuManager extends React.Component<CpuManagerProps, CpuManagerState>  {

    refreshData(chart: any) {
        const current = this.props.data;
        chart.data.datasets.forEach(function (dataset: any) {
            dataset.data.push({
                x: Date.now(),
                y: current
            });
        });
    }

    shouldComponentUpdate() {
        // Se tiene que hacer de esta manera porque cada vez que actualizó 
        // data se vuelve a inicializar la grafica, entonces de esta manera
        // nunca se va a actualizar pero si va a estar actualizando los valores.
        return false;
    }

    render() {
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
                                onRefresh: (chart: any) => {
                                    this.refreshData(chart);
                                },
                            }
                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: '% de Uso'
                            },
                            ticks: {
                                suggestedMax: 100
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