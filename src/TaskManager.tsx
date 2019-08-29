import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface TaskManagerProps {
    test: string
}

interface TaskManagerState {
    test: string
}

export default class TaskManager extends React.Component<TaskManagerProps, TaskManagerState> {




    render(){
        return (
            <div>
                <h1>{this.props.test}</h1>
                <Doughnut data={{
                    datasets: [{
                        data: [10,20,30]
                    }],
                    labels: [
                        'red',
                        'green',
                        'blue'
                    ]
                }} />
            </div>
        )
    }
}