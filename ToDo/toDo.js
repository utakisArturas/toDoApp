let createTaskButton = document.querySelector('#createTask');
let popCloseButton = document.querySelector('#popupExit');
let viewTaskButton = document.querySelector('#viewTask');
let saveTaskToDatabase = document.querySelector('#popupSubmit')
let wrapper = document.querySelector('#wrapper');


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
