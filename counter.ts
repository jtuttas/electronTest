export class counter {
    private value:number;

    constructor() {
        this.value=0;
    }

    public inc():void {
        this.value++;
    }

    public dec():void {
        this.value--;
    }

    public getValue():number {
        return this.value;
    }
    
}