//Selectors
let items = document.querySelector("#items");
let quantity = document.querySelector("#quantity");
let addBtn = document.querySelector("#addBtn");
let inputForm = document.querySelector("#inputForm");
let rows = document.querySelector("#rows");
let total = document.querySelector("#total");


//Functions

function calcTotal(){
    let costs =document.querySelectorAll(".cost");
    let totalCost = [...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0)
    total.innerText = totalCost;
}

function del(event){
    if(confirm("Are you sure to delete")){
        event.target.parentElement.parentElement.remove();
        calcTotal();
    }
}


//Process
products.forEach(function(product){
    let newOption = new Option(product.name,product.id);
    items.append(newOption)
})

inputForm.addEventListener("submit",function(e){
    e.preventDefault();

    let currentProduct = products.find(product=>product.id == items.value);
    let cost = currentProduct.price * quantity.valueAsNumber
    let newTr = document.createElement("tr");

    newTr.innerHTML = `
                        <td>
                        ${currentProduct.name}
                        <p class="mb-0 text-danger del-btn" onclick="del(event)">Delete</p>
                        </td>
                        <td class="text-end">${currentProduct.price}</td>
                        <td class="text-end">${quantity.valueAsNumber}</td>
                        <td class="text-end cost">${cost}</td>
                      `;
   rows.append(newTr);
   inputForm.reset();
   calcTotal();
})