import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Proceso } from './TaskManager';

type CpuManagerProps = {
    data: Array<Proceso>
}

type CpuManagerState = {

}

export default class CpuManager extends React.Component<CpuManagerProps, CpuManagerState>  {

    render() {
        return (
            <Doughnut data={{
                datasets: [{
                    data: [10, 20, 30]
                }],
                labels: [
                    'red',
                    'green',
                    'blue'
                ]
            }} />
        )
    }
};