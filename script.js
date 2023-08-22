

var btn = document.getElementById('add')
btn.addEventListener('click',addtask)

function addtask(){
    var task = document.getElementById('input').value
    console.log(task)
    var ul = document.getElementById('display')
    var li = document.createElement('li') 
    li.classList = 'list-group-item'
    li.innerHTML= `<span>${task}</span>&nbsp&nbsp&nbsp<button type='button' onclick='deleteTask(this)' class='btn btn-danger float-right'>Delete</button>`
    ul.appendChild(li)
    
}

function deleteTask(ele){
    console.log(ele)
    var ul = document.getElementById('display')
    var li = ele.parentElement
    console.log(li)
    ul.removeChild(li)



}