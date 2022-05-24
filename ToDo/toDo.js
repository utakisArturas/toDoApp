let createTaskButton = document.querySelector('#createTask');
let popCloseButton = document.querySelector('#popupExit');
let viewTaskButton = document.querySelector('#viewTask');
let saveTaskToDatabase = document.querySelector('#popupSubmit')
let wrapper = document.querySelector('#wrapper');
let taskOutput = document.querySelector('#listItem');


const taskGetUrl = 'https://testapi.io/api/wehevov449/resource/toDoApp';
const taskPostUrl = 'https://testapi.io/api/wehevov449/resource/toDoApp';


createTaskButton.addEventListener('click',()=>{
    document.querySelector('#popup').style.display = "flex";
})

popCloseButton.addEventListener('click',()=>{
    document.querySelector('#popup').style.display = "none";
});

viewTaskButton.addEventListener('click',()=>{
    fetch(taskGetUrl)
    .then(res =>{
        return res.json()
    })
    .then(data =>{
<<<<<<< Updated upstream
        data.data.forEach(element => {
        let listItem = document.querySelector('#listItem');
        let taskOutput = document.querySelector('#taskOutput');
        let li = document.createElement('li');
        let editButton = document.createElement('button')
        editButton.textContent ='EDIT'
        let doneButton = document.createElement('button')
        doneButton.textContent = 'DONE'
        li.textContent = `Task type : ${element.type} ; ${element.content} ; End date - ${element.endDate} ; Status : ${element.status}`;
        li.append(editButton,doneButton)
        listItem.append(li);
        taskOutput.append(listItem)
        wrapper.append(taskOutput);
        taskOutput.style.display = 'flex';
=======
        clearTaskView();
        let loggedInUserTasks = data.data.filter(isCurrentUserOwner);
        loggedInUserTasks.forEach(element => {
            if(element.status === 'false'){
                let listItem = document.querySelector('#listItem');
                let taskOutput = document.querySelector('#taskOutput');
                let li = document.createElement('li');
                li.setAttribute('id',element.id)
                let editButton = document.createElement('button')
                editButton.textContent ='EDIT'
                let doneButton = document.createElement('button')
                doneButton.textContent = 'DONE'
                doneButton.addEventListener('click',(event)=>{
                    const id = event.target.parentElement.id;
                    const parentElement = event.target.parentElement;
                    setElementStatusTrue(id,parentElement);
                });
                li.textContent = `ID: ${element.id}. Task type : ${element.type}.  ${element.content}. End date : ${element.endDate}. Status : ${element.status}`;
                li.append(editButton,doneButton)
                listItem.append(li);
                taskOutput.append(listItem)
                wrapper.append(taskOutput);
                taskOutput.style.display = 'flex';
            }
            else{
                console.log(element);
            }
>>>>>>> Stashed changes
        });
    })
    .catch((err) => {
        console.log(err);
    });
})

saveTaskToDatabase.addEventListener('click',()=>{
        fetch(taskPostUrl,{
            method:'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
            type : document.querySelector('#type').value,
            content : document.querySelector('#content').value,
            owner : 'TBD',
            endDate : document.querySelector('#endDate').value,
            status : 'false'
            })
            
        })
})
<<<<<<< Updated upstream
=======

function isCurrentUserOwner(task){
    return (task.owner === sessionStorage.getItem("loggedInUserEmail"));
}
function setElementStatusTrue(id,element){
    fetch(`https://testapi.io/api/wehevov449/resource/toDoApp/${id}`)
    .then(res =>{
        return res.json()
    })
    .then(data=>{
        let type = data.type;
        let content = data.content;
        let owner = sessionStorage.getItem("loggedInUserEmail");
        let endDate = data.endDate;
        let status = 'true';
        fetch(`https://testapi.io/api/wehevov449/resource/toDoApp/${id}`,{
        method: 'PUT',
        headers:{
        'Content-Type':'application/json'
        },
        body: JSON.stringify({type : type,content : content,owner: owner,endDate : endDate,status: status}) 
        })
        console.log(data);
    });
    element.remove();
}
function clearTaskView(){
    taskOutput.innerHTML = " ";
}
>>>>>>> Stashed changes
