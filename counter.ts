export class counter {
    private value:number;

    constructor() {
        this.value=0;
    }

    public inc():void {
        this.value++;
    }

    public dec():void {
        if (this.value>0) {
            this.value--;
        }
    }

    public getValue():number {
        return this.value;
    }
    
}