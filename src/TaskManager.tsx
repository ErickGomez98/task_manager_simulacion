import React from 'react';
import CpuManager from './CpuManager';


interface TaskManagerProps {
    test: string
}

interface TaskManagerState {
    procesos: Array<Proceso>,
    cantidadProcesos: number
}

export type Proceso = {
    id: number,
    ram: number,
    cpu: number,
    hdd: number,
    executionTime: number
}

export default class TaskManager extends React.Component<TaskManagerProps, TaskManagerState> {
    state: TaskManagerState = {
        procesos: [],
        cantidadProcesos: 15
    };


    generarProcesos() {
        for (let i: number = 0; i < this.state.cantidadProcesos; i++) {
            const newProceso: Proceso = {
                id: i,
                ram: Math.floor((Math.random() * 100) + 1),
                cpu: Math.floor((Math.random() * 100) + 1),
                hdd: Math.floor((Math.random() * 100) + 1),
                executionTime: Math.floor((Math.random() * 20) + 1),
            };
            this.setState((state) => {
                const newArr: Array<Proceso> = [...state.procesos, newProceso];
                return {
                    procesos: newArr
                }
            });
        }
    }


    componentDidMount() {
        this.generarProcesos();
    }


    render() {
        const { procesos } = this.state;

        return (
            <div>
                <h1>{this.props.test}</h1>
                <div>{this.state.procesos.map((item) => {
                    console.log(item);
                    return <p>{item.id}</p>;
                })}
                </div>

                <CpuManager data={[]} />

            </div>
        )
    }
}