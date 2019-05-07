var database =  firebase.database().ref(`/`)

function addme(){
let input =document.getElementById(`inpt`).value;
let myObj = {
    data : input,
}

database.child(`Todo App`).push(myObj)

}
database.child(`Todo App`).on(`child_added`, callback => {

    let value = callback.val();
    let c = callback.key;
    console.log(c);
    console.log(value.data);
let unordered_list = document.getElementById(`ulist`);
let  list = document.createElement(`li`);
let  text = document.createTextNode(value.data);
list.appendChild(text);
unordered_list.appendChild(list);

let dlt = document.createElement(`button`);
dlt.innerHTML=`delete`;
list.appendChild(dlt);

let edit = document.createElement(`button`);
edit.innerHTML=`edit`
list.appendChild(edit)

dlt.addEventListener(`click` , ()=>{
    console.log(c);
    
    database.child(`Todo App/` + c).remove();
    dlt.parentNode.remove()    
});
edit.addEventListener(`click` , ()=>{
    let new_prompt = prompt("Enter reset data");
    database.child(`Todo App/` + c).update({data:new_prompt});
    console.log(dlt.parentNode.innerHTML);
})

})





















// let value = callback.val();
//     let c = callback.key;
//     console.log(c);
//     console.log(value.data);
// let unordered_list = document.getElementById(`ulist`);
// let  list = document.createElement(`li`);
// let  text = document.createTextNode(value.data);
// list.appendChild(text);
// unordered_list.appendChild(list);

// let dlt = document.createElement(`button`);
// dlt.innerHTML=`delete`;
// list.appendChild(dlt);

// let edit = document.createElement(`button`);
// edit.innerHTML=`edit`
// list.appendChild(edit)

// dlt.addEventListener(`click` , ()=>{
//     console.log(c);
    
//     database.child(`Todo App/` + c).remove();
//     console.log(database.key)
// });

// edit.addEventListener(`click` , ()=>{
//     let new_prompt = prompt("Enter reset data");
//     database.child(`Todo App` + c).update({data:new_prompt});
//     console.log(dlt.parentNode.innerHTML);
// })


















// database.child(`Todo-App`).on(`child_added`, parameter => {
//     let x = parameter.val();
//     x1 = parameter.key;
//     console.log(x);
//     let div = document.getElementById(`box1`);
//     let ul = document.getElementById(`ul1`);
//     let li = document.createElement(`li`);
//     let li_text = document.createTextNode(x.data);
//     li.appendChild(li_text);
  
//     let button = document.createElement(`button`);
//     let button_text = document.createTextNode(`Delete`);
//     button.appendChild(button_text);
  
  
  
//     li.appendChild(button);
//     ul.appendChild(li);
//     div.appendChild(ul);
  
//     button.addEventListener(`click`, () => {
//       console.log(x1); // X1 is Id of each object property
//       database.child(`Todo-App/` + x1).remove();
//       button.parentNode.remove();
//     });
  
//     let button1 = document.createElement(`button`);
//     let button1_text = document.createTextNode(`Edit`);
//     button1.appendChild(button1_text);
  
//     li.appendChild(button1);
  
//     button1.addEventListener(`click`, () => {
//       let new_Value = prompt(`Enter Value Again`)
//       database.child(`Todo-App/` + x1).update({data: new_Value })
  
//       button.parentNode.innerHTML = new_Value;
  
//     });
//   });