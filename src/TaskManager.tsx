import React from 'react';


interface TaskManagerProps {
    test: string
}

interface TaskManagerState {
    test: string
}

export default class TaskManager extends React.Component<TaskManagerProps, TaskManagerState> {




    render(){
        return (
            <h1>{this.props.test}</h1>
        )
    }
}