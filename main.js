const get = id => document.getElementById(id);

const newText       = get('newText');
const newBtn        = get('newBtn');
const pendingList   = get('pendingList');
const completedList = get('completedList');

newBtn.addEventListener('click', () => {
    if (newText.value !== "") {
         const newTodo = document.createElement('li');
         newTodo.classList.add("text-center", "p-3", "bg-white", "shadow-lg", "mt-4", "cursor-pointer", "rounded", "hover:bg-green-400")
         newTodo.innerText = newText.value;
         newTodo.value = '';
         pendingList.appendChild(newTodo);
    } else {
        alert("Please provide a task to add");
    }
});


newText.addEventListener("keyup", event => {
    if (event.key.toLowerCase() === 'enter'){
        newBtn.click();
    }
});

const move = (element, destination, convertTo) => {
    console.log(convertTo);
    if (element.localName === 'li') {
        if(convertTo === 'completed'){
           element.classList.add("hover:bg-red-400", "line-through", "text-red-500")
           element.classList.remove("hover:bg-green-400")
        } else {
            element.classList.add("hover:bg-green-400" , "line-through")
           element.classList.remove("hover:bg-red-400", "line-through", "text-red-500")
        }  
        destination.appendChild(element);    
    }  
};

pendingList.addEventListener('click', event => {
   move(event.target, completedList, "completed") 
})

completedList.addEventListener('click', event => {
    move(event.target, pendingList, "not completed") 
 })