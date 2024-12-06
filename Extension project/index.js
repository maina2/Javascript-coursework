
 
let myLeads = ["www.addEventListener.com","www.Listener.com","www.addEvent"];
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el");
const containerEl = document.getElementById("container");



 let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
 let inputBtn = document.getElementById("save-btn");
 let deleteBtn = document.getElementById("delete-btn")
 let tabBtn = document.getElementById("tab-btn")

 if(leadsFromLocalStorage){
  myLeads=leadsFromLocalStorage
  renderLeads(myLeads)
 }

 let tabs = [
  {url:"www.linked.com/simonmaina" }
]

tabBtn.addEventListener("click",function () {

  let one = tabs[0].url
  containerEl.innerHTML = `<p>${one} </p>`
  
})

 inputBtn.addEventListener("click", function () {
   myLeads.push(inputEl.value);
   inputEl.value=""
   localStorage.setItem("myLeads",JSON.stringify(myLeads))

    console.log(localStorage.getItem("myLeads"));
   
   renderLeads(myLeads);
 })

function renderLeads (leads){
  let listholder = ""

  for (let i=0;i<leads.length;i++){
    listholder  += `
    <li>
    <a target= '_blank' href=' ${leads[i]}'>${leads[i]} </a>
    </li>
    `
 
  }
 ulEl.innerHTML = listholder;

}


deleteBtn.addEventListener("dblclick",function(){
  console.log("Double clicked")
    localStorage.clear();
    myLeads= [];
    renderLeads(myLeads)

})

let welcomeEl = document.getElementById("welcome")




function getFirst(arr){
  return arr[0];
}

let Firstcard = getFirst([10,12,14])
console.log(Firstcard);


//  containerEl.innerHTML = "<button onclick='Buy()'>Buy</button>";
//  function Buy(){

//    containerEl.innerHTML += "<p>Thankyou foy buying</p>"
//  }

//  const recipient = "James"
//  const sender = "Morgen"

//  const email = `Hey ${recipient}  How  are you. Cheers ${sender}`

//   console.log(email)

//   localStorage.setItem("name","simon")
//   localStorage.setItem("country","Africa")


//   localStorage.getItem("name");
//   localStorage.clear()

let myCourse = ["Learn CSS Animations","UI Designs Fundamentals","Intro to clean code"]

function practice (arr){//Parameters are inside
  for(let i=0;i<arr.length;i++){
    console.log(arr[i])//Parameters are inside;
  }

}

practice(myCourse);//Arguments are outside