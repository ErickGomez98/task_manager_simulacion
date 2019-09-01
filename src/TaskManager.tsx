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

const nombres = [
    "Google Chrome",
    "Visual Studio Code",
    "Spotify",
    "Corsair LINK",
    "Razerr Synapse",
    "Node.js",
    "NVIDIA Share",
    "Cortana",
    "Skype",
    "Microsoft Word",
    "Microsoft Excel",
    "Adobe Update Service",
    "sh.exe",
    "Host de ventana de consola",
    "Runtime Broker",
    "Exploraror de Windows",
    "Firefox",
    "Oculus",
    "Steam",
];

type Proceso = {
    nombre: string,
    id: number,
    ram: number,
    cpu: number,
    hdd: number,
    executionTime: number
}

const ListItem: React.FunctionComponent<Proceso> = (props) => {
    return (
        <div className="list-item" key={props.id}>
            <div className="list-item-id">{props.id}</div>
            <div className="list-item-nombre">{props.nombre}</div>
            <div className="list-item-cpu">{props.cpu} %</div>
            <div className="list-item-ram">{props.ram} %</div>
            <div className="list-item-hdd">{props.hdd} %</div>
            <div className="list-item-execution">{props.executionTime} seg</div>
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
                nombre: nombres[i],
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
                                <div style={{ marginLeft: '10px' }}>
                                    <div style={{ float: 'left', width: '9%' }}>ID</div>
                                    <div style={{ float: 'left', width: '43%' }}>Nombre</div>
                                    <div style={{ float: 'left', width: '10%' }}>CPU</div>
                                    <div style={{ float: 'left', width: '10%' }}>RAM</div>
                                    <div style={{ float: 'left', width: '10%' }}>HDD</div>
                                    <div>Tiempo</div>
                                </div>
                                <div className="list-procesos">
                                    <div>{this.state.procesos.map((item) => {
                                        return <ListItem {...item} />
                                    })}
                                    </div>
                                </div>
                            </div>
                            <div className="procesos-activos">
                                <h2>Procesos Activos</h2>
                                <div style={{ marginLeft: '10px' }}>
                                    <div style={{ float: 'left', width: '9%' }}>ID</div>
                                    <div style={{ float: 'left', width: '43%' }}>Nombre</div>
                                    <div style={{ float: 'left', width: '10%' }}>CPU</div>
                                    <div style={{ float: 'left', width: '10%' }}>RAM</div>
                                    <div style={{ float: 'left', width: '10%' }}>HDD</div>
                                    <div>Tiempo</div>
                                </div>
                                <div className="list-procesos-activos">
                                    <div>{this.state.procesos.map((item) => {
                                        return <ListItem {...item} />
                                    })}
                                    </div>
                                </div>
                            </div>
                            <div className="procesos-finalizados">
                                <h2>Procesos Finalizados</h2>
                                <div style={{ marginLeft: '10px' }}>
                                    <div style={{ float: 'left', width: '9%' }}>ID</div>
                                    <div style={{ float: 'left', width: '43%' }}>Nombre</div>
                                    <div style={{ float: 'left', width: '10%' }}>CPU</div>
                                    <div style={{ float: 'left', width: '10%' }}>RAM</div>
                                    <div style={{ float: 'left', width: '10%' }}>HDD</div>
                                    <div>Tiempo</div>
                                </div>
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