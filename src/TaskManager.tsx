import React from 'react';
import CpuManager from './CpuManager';
import HddManager from './HddManager';
import RamManager from './RamManager';
import './App.css';

interface TaskManagerProps {
    title: string
}

interface TaskManagerState {
    procesos: Array<Proceso>,
    procesosActivos: Array<Proceso>,
    cantidadProcesos: number
}

type Proceso = {
    id: number,
    ram: number,
    cpu: number,
    hdd: number,
    executionTime: number
}

const ListItem: React.FunctionComponent<Proceso> = (props) => {
    return (
        <div className="list-item" key={props.id}>
            {props.id}
        </div>
    )
}

export default class TaskManager extends React.Component<TaskManagerProps, TaskManagerState> {
    state: TaskManagerState = {
        procesos: [],
        procesosActivos: [],
        cantidadProcesos: 15
    };


    generarProcesos() {
        for (let i: number = 0; i < this.state.cantidadProcesos; i++) {
            const newProceso: Proceso = {
                id: Math.floor((Math.random() * 10000) + 1),
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
        let totalCpu: number = 0;
        let totalHdd: number = 0;
        let totalRam: number = 0;

        procesos.map((item) => {
            totalCpu += item.cpu;
            totalRam += item.ram;
            totalHdd += item.hdd;
        })

        return (
            <div className="main-container">
                <div className="title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="content">
                    <div className="procesos-container">
                        <div>
                            <div className="lista-procesos">
                                <h2>Procesos</h2>
                                <div className="list-procesos">
                                    <div>{this.state.procesos.map((item) => {
                                        return <ListItem {...item} />
                                    })}
                                    </div>
                                </div>
                            </div>
                            <div className="procesos-activos">
                                <h2>Procesos Activos</h2>
                                <div className="list-procesos-activos">
                                    <div>{this.state.procesos.map((item) => {
                                        return <ListItem {...item} />
                                    })}
                                    </div>
                                </div>
                            </div>
                            <div className="procesos-finalizados">
                                <h2>Procesos Finalizados</h2>
                                <div className="list-procesos-finalizados">
                                    <div>{this.state.procesos.map((item) => {
                                        return <ListItem {...item} />
                                    })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-graficas">
                        <div>
                            <div className="cpu-grafica">
                                <CpuManager data={totalCpu} />
                            </div>
                            <div className="ram-grafica">
                                <RamManager data={totalHdd} />
                            </div>
                            <div className="hdd-grafica">
                                <HddManager data={totalRam} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}