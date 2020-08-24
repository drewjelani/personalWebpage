class ContainerContent{
    constructor(rowSize, text) {
        this.rowSize = rowSize;
        this.text = text;
    }

    static of(rowSize, text){
        return new ContainerContent(rowSize, text);
    }
}