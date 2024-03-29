const userName = document.querySelector('#UserName');
const title = document.querySelector('#title');
const area = document.querySelector('#textArea');
const submitBtn = document.querySelector('#increment');

submitBtn.addEventListener('click', function() {
    // event.preventDefault();
    console.log(userName.value);
    console.log(title.value);
    console.log(area.value);
})