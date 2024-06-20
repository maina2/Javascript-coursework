
 
let myLeads = ["www.addEventListener.com","www.Listener.com","www.addEvent"];
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el");
const containerEl = document.getElementById("container");

 let inputBtn = document.getElementById("save-btn");



 inputBtn.addEventListener("click", function () {
   myLeads.push(inputEl.value);
   inputEl.value=""
   localStorage.setItem("myLeads",JSON.stringify(myLeads))

    console.log(localStorage.getItem("myLeads"));
   
   renderLeads();
 })

function renderLeads (){
  let listholder = ""

  for (let i=0;i<myLeads.length;i++){
    listholder  += `
    <li>
    <a target= '_blank' href=' ${myLeads[i]}'>${myLeads[i]} </a>
    </li>
    `
 
  }
 ulEl.innerHTML = listholder;

}


 containerEl.innerHTML = "<button onclick='Buy()'>Buy</button>";
 function Buy(){

   containerEl.innerHTML += "<p>Thankyou foy buying</p>"
 }

 const recipient = "James"
 const sender = "Morgen"

 const email = `Hey ${recipient}  How  are you. Cheers ${sender}`

  console.log(email)

  localStorage.setItem("name","simon")
  localStorage.setItem("country","Africa")


  localStorage.getItem("name");
  localStorage.clear()