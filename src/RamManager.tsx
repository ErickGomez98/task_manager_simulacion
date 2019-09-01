import React from 'react';
import { Proceso } from './TaskManager';

interface TaskManagerProps {
    test: string
}

interface TaskManagerState {
    procesos: Array<Proceso>,
    cantidadProcesos: number
}

export default class RamManagerextends extends React.Component<TaskManagerProps, TaskManagerState> {

};