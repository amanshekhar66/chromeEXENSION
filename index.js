let del = document.getElementById("delete-btn");
let myLeads = [];
let ulEl = document.getElementById("leads");
const inputEl = document.getElementById("input-el");
let inputBTN = document.getElementById("input-btn");
let listitems = "";
const leadsFromlocalStorage = JSON.parse(localStorage.getItem("myleads"));
if(leadsFromlocalStorage){
   myLeads = leadsFromlocalStorage;
   renderLeads();
}

del.addEventListener("dbclick", function(){
   localStorage.clear();
   myLeads = [];
   renderLeads();
})




inputBTN.addEventListener("click", function(){
   myLeads.push(inputEl.value);
   
   localStorage.setItem("myleads", JSON.stringify(myLeads));
   
   renderLeads();
   clearField();
   
   function renderLeads(){
   for(let i=0; i<myLeads.length; i++){
// We create a variable that run through the loop and use
// innerHTML just outside because it is expensive to use DOM again
// and again
   listitems = `<li>
                   <a href= '${myLeads[i]}' target='_blank'>
                   ${myLeads[i]}
                   </a>
                   </li>`
  
   
   // OR
   
   // const li= document.createElement("li");
   // li.textContent = myLeads[i];
   // ulEl.append(li);
  
   
   
   }
   ulEl.innerHTML+=listitems;
   }
   function clearField(){
       inputEl.value="";
   }
   
 } );