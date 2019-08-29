export default class DataGraph {
    protected data: Object;
    protected width: number;
    protected height: number;

    constructor(data: Object, width: number, height: number){
        this.data = data;
        this.width = width;
        this.height = height;
    }
};