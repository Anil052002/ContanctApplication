let name1=document.getElementById("name1");
let email1=document.getElementById("em");
let number1=document.getElementById("number1");
let tableinfo=document.getElementById("tableinfo");

function add(){
    let a=[name1.value,email1.value,number1.value]
    let rowele=document.createElement("tr");
    rowele.id="row1";
    for(let i=0;i<3;i++){
       let td1=document.createElement("td");
        td1.textContent=a[i];
        
        rowele.appendChild(td1)
    }
    let operationele=document.createElement("td");
    let deleteicon=document.createElement("button");
    deleteicon.id="delel"
    deleteicon.textContent="Delete"
    deleteicon.onclick=
    tableinfo.appendChild(rowele);
    name1.value="";
    email1.value="";
    number1.value="";
    

}



