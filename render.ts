import { counter } from "./counter";


function up(): void {
    console.log("up");
    
    c.inc();
    document.querySelector("#out").innerHTML=""+c.getValue();
    document.querySelector("#out").classList.remove("red");
    document.querySelector("#out").classList.add("green");
}
function down(): void {
    console.log("down");
    c.dec();
    document.querySelector("#out").innerHTML=""+c.getValue();
    if (c.getValue()==0) {
        document.querySelector("#out").classList.remove("green");
        document.querySelector("#out").classList.add("red");
    }
    else {
        document.querySelector("#out").classList.remove("red");
        document.querySelector("#out").classList.add("green");
    }
    
}

let c:counter=new counter();
let b1:HTMLButtonElement = document.querySelector('#btnup');
b1.addEventListener('click', up);
document.querySelector('#btndown').addEventListener('click', down);