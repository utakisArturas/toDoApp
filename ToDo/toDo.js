let createTaskBtn = document.querySelector('#createTask');
let popCloseButton = document.querySelector('#popupExit');


createTaskBtn.addEventListener('click',()=>{
    document.querySelector('#popup').style.display = "flex";
})

popCloseButton.addEventListener('click',()=>{
    document.querySelector('#popup').style.display = "none";
});