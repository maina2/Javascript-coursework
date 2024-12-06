const welomeEl = document.getElementById("welcome");
let myLeads= [];
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");

welomeEl.textContent= "Hello and welcome to our extension app!"

saveBtn.addEventListener("click",function(){

    myLeads.push(inputEl.value);
    render(myLeads)


});

function render(leads){
    let listholder = ""
    for(let i=0;i<leads.length;i++){
          listholder +=  `
           <li><a target=_blank href=${leads[i]}>${leads[i]}</a></li>
        `

    }

    ulEl.innerHTML= listholder

}