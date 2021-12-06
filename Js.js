const task = document.querySelector('.addTask');
const newTask = document.getElementById('first-input');
const addTask = document.getElementsByClassName('addTask')[0];
const newTaskUl = document.getElementById('addTask-ul');

//console.log(addTask);
// newTask.addEventlistener('focus',function(){
//   newTask.style.border = 'none';
// });

loadEventListener();

function loadEventListener(){

  // dom event load
  document.addEventListener('DOMContentLoaded',getTasks);
//  document.addEventListener('DOMContentLoaded',getTasks);
}

// event load function
function getTasks(){
  var job;
  if (localStorage.getItem('job') === null){
      job = [];
    }
    else {
      job = JSON.parse(localStorage.getItem('job'))
    }

    job.forEach(function(job){
      var divItem = document.createElement('div');
      divItem.className = 'divItem';
      // create li for tasks
      var li = document.createElement('li');
      li.className = 'collection-item'
      liTextNode = document.createTextNode(job)
      li.appendChild(liTextNode)
      divItem.appendChild(li)
      newTaskUl.appendChild(divItem)

      // create links to delete that specific item

      var link = document.createElement('a');
      link.className = 'delete-item';
      link.href = '#'
      newTask.style.borderBottom = '2px solid #099999';
      link.onclick = function(){newTaskUl.removeChild(divItem);
      newTask.style.borderBottom = '1px solid gray';
      }
      //var linkTextNode = document.createTextNode(' x ')
      var linkTextNode = link.innerHTML = "<span class='fa fa-remove'></span>"

      //link.appendChild(linkTextNode);
      // newTaskUl.appendChild(link)
      divItem.appendChild(link)

    });
}

function enterCheak(e){
  //alert(e.keyCode)
  if (e.keyCode == 13)
    create();

    // to prevent space in box
  if(e.keyCode == 32){
    e.preventDefault();
    newTask.value = '';
    alert("space is not allowed \n please Enter a valid task!");
  }
}
function removeborder(e){
  e.style.outline='none';
  document.getElementById('p-newTask').style.display ="block";
  //document.getElementById('p-newTask').style.transitionDelay ="3s";
}
function create(){
  if(newTask.value != ''){
  // create genral div for border
var divItem = document.createElement('div');
divItem.className = 'divItem';
// create li for tasks
var li = document.createElement('li');
li.className = 'collection-item'
liTextNode = document.createTextNode(newTask.value)
li.appendChild(liTextNode)
divItem.appendChild(li)
newTaskUl.appendChild(divItem)

// create links to delete that specific item

var link = document.createElement('a');
link.className = 'delete-item';
link.href = '#'
newTask.style.borderBottom = '2px solid #099999';
link.onclick = function(){newTaskUl.removeChild(divItem);
newTask.style.borderBottom = '1px solid gray';

}
//var linkTextNode = document.createTextNode(' x ')
var linkTextNode = link.innerHTML = "<span class='fa fa-remove'></span>"

//link.appendChild(linkTextNode);
// newTaskUl.appendChild(link)
divItem.appendChild(link)
newTaskUl.appendChild(divItem)
  // add to local storage
  TasklocalStorage(newTask.value);

  // to clear value
newTask.value = ''; // to earse first-input value
}
else {
  alert("please enter your new task!");
}
}
function clearAll(){
  addTask.removeChild(newTaskUl);
  var job;
  if (localStorage.getItem('job') === null){
      job = [];
    }
    else {
      job = JSON.parse(localStorage.getItem('job'))
    }
   localStorage.removeItem('job');

}

// local storage section
function TasklocalStorage(task){
    var job;
    if (localStorage.getItem('job') === null){
        job = [];
      }
      else {
        job = JSON.parse(localStorage.getItem('job'))
      }
      job.push(task);
      localStorage.setItem('job',JSON.stringify(job))

}
function cheakFilter(e){
  // var text = e.target.value.toLowerCase();
  //  document.querySelectorAll('.collection-item').forEach(function(task) {
  //   //  var item = task.firstChild.textContent;
  //     const item = task.firstChild.textContent;
  //     if (item.toLowerCase().indexOf(text) != -1) {
  //       document.querySelector('.divItem').style.display = 'block';
  //     }else {
  //       document.querySelector('.divItem').style.display = 'none'
  //     }
  // });

  // const text = e.target.value.toLowerCase();
  //
  // document.querySelectorAll('.collection-item').forEach(function(task){
  //   const item = task.firstChild.textContent;
  //   if(item.toLowerCase().indexOf(text) != -1){
  //     task.style.display = 'block';
  //   } else {
  //     task.style.display = 'none';
  //   }
  // });

  //console.log(ev.target.value.toLowerCase())
}
