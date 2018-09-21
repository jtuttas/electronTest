import { counter } from "./counter";

function up(): void {
    console.log("up");
    
    c.inc();
    document.querySelector("#out").innerHTML=""+c.getValue();
}
function down(): void {
    console.log("down");
    c.dec();
    document.querySelector("#out").innerHTML=""+c.getValue();
}

let c:counter=new counter();
let b1:HTMLButtonElement = document.querySelector('#btnup');
b1.addEventListener('click', up);
document.querySelector('#btndown').addEventListener('click', down);