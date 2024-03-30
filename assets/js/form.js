//I got all content from ids
const userName = document.querySelector('#UserName');
const title = document.querySelector('#title');
const area = document.querySelector('#textArea');
const submitBtn = document.querySelector('#submitbtn');

//To listen the event click and store data in the localStorage object and set it to the localStorage.
submitBtn.addEventListener('click', function() {
    // event.preventDefault();
    
    const blogData = {
        blogUserName: userName.value,
        blogTitle: title.value,
        blogText: area.value,
    };

    localStorage.setItem('blogData', JSON.stringify(blogData));
})
