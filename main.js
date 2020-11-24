const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') 
  {msg.classList.add('error');
    msg.innerHTML = 'Please enter fields';
 
      }
    else {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    
      userlist.appendChild(li);

nameInput.value = '';
emailInput.value = '';

    }
  }
    
    