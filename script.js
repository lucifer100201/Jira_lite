let addToCard = document.querySelector("#btn");

let toDoCard = document.querySelector("#todo");

addToCard.addEventListener("click", addTask);

function addTask() {
  let card = document.createElement("div");
  card.className = "card";
  card.innerText = "Text Card";
  card.setAttribute("contenteditable", true);
  toDoCard.appendChild(card);

  // pointer will be in editable zone automatically

  card.focus();

  //Prblem1: empty card should be deleted Automatically
  // focus lost => blur event
  card.addEventListener("blur", (eventDeatils) => {
    let blurCard = eventDeatils.target;
    if (blurCard.innerText.trim() == "") {
      blurCard.remove();
    }
  });

  //problem2: when try to write default text should be removed
  card.addEventListener("click", (eventDeatils) => {
    let clickedCard = eventDeatils.target;
    if (clickedCard.innerText == "Text Card") {
      clickedCard.innerText = "";
    }
  });

  let selector = document.createElement("select");
  selector.innerHTML = `<option value="todo">Todo</option>
    <option value="progress">Progress</option>
    <option value="done">Done</option>`;

// let option1 =document.createElement('option');
// option1.value="todo";
// option1.innerHTML="Todo"
// selector.appendChild(option1);

// let option2 =document.createElement('option');
// option2.value="progress";
// option2.innerHTML="Progress"

// selector.appendChild(option2);
card.appendChild(selector);

// selector will change something in dropdown=> change event

selector.addEventListener('change',(eventDeatils)=>{
   let selectOptionValue = eventDeatils.target.value;
   let selectConatiner = document.querySelector(`#${selectOptionValue}`)
//    console.log(selectConatiner)
   selectConatiner.appendChild(card);
})
}
