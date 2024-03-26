// Retrieve todoList from local storage on page load
let todoList = JSON.parse(localStorage.getItem('todoList')) || [ 
{
    item: 'Buy Milk',
    dueDate: '20-05-2024',
},
{
    item: 'Go to College',
    dueDate: '12-03-2025',
}];

const addBtn = document.querySelector('button');
displayItems();

addBtn.addEventListener('click', (e) => {
    let inputEle = document.querySelector('.todo-input');
    let inputDate = document.querySelector('.todo-date');
    if (inputEle.value !== '' && inputDate.value !== '') {
        todoList.push({ item: inputEle.value, dueDate: inputDate.value });
        inputEle.value = '';
        inputDate.value = '';
        saveTodoList(); // Save todoList to local storage after adding an item
    }

    displayItems();
});

function displayItems() {
    let containerEle = document.querySelector('.todo-container');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        newHtml += `  <span> ${todoList[i].item} </span>
                        <span> ${todoList[i].dueDate}</span>
                        <button class="deleteBtn" onclick="deleteItem(${i});"> Delete </button>
                    `;
    }

    containerEle.innerHTML = newHtml;
}

function deleteItem(index) {
    todoList.splice(index, 1);
    saveTodoList(); // Save todoList to local storage after deleting an item
    displayItems();
}

function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList)); // Save todoList to local storage
}









// let todoList = [
//     {
//         item:'Buy Milk',
//         dueDate:'20-05-2024',
//     },
//     {
//         item:'Go to College',
//         dueDate:'12-03-2025',
//     }
// ];

// const addBtn = document.querySelector('button');
// displayItems();

// addBtn.addEventListener('click',(e) =>
// {
//     let inputEle = document.querySelector('.todo-input');
//     let inputDate = document.querySelector('.todo-date');
//     if(inputEle.value !='' && inputDate.value !='')
//     {
//         todoList.push({item:inputEle.value,dueDate:inputDate.value});
//         inputEle.value = '';
//         inputDate.value = '';
//     }
    
//     displayItems();

// });

// function displayItems()
// {
//     let containerEle = document.querySelector('.todo-container');
//     let newHtml = '';

//     for(let i=0;i<todoList.length;i++)
//     {
//         newHtml += `  <span> ${todoList[i].item} </span>
//                         <span> ${todoList[i].dueDate}</span>
//                         <button class="deleteBtn" onclick="todoList.splice(${i},1); displayItems();"> Delete </button>
//                     ` ;
//     }

//     containerEle.innerHTML = newHtml;

// }





































// let todoList = [];
// let todoDate = [];

// const addBtn = document.querySelector('button');

// addBtn.addEventListener('click',(e) =>
// {
//     let inputEle = document.querySelector('.todo-input');
//     let inputDate = document.querySelector('.todo-date');
//     if(inputEle.value !='' && inputDate.value !='')
//     {
//         todoList.push(inputEle.value);
//         inputEle.value = '';
//         todoDate.push(inputDate.value);
//         inputDate.value = '';
//     }
    
//     displayItems();

// });

// function displayItems()
// {
//     let containerEle = document.querySelector('.todo-container');
//     let newHtml = '';

//     for(let i=0;i<todoList.length;i++)
//     {
//         newHtml += ` <div> <span> ${todoList[i]} </span>
//                             <span> ${todoDate[i]}</span>
//                             <button onclick="todoList.splice(${i},1); displayItems();"> Delete </button>
//                     </div> ` 
//     }

//     containerEle.innerHTML = newHtml;

// }



