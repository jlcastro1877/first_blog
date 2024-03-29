const userName = document.querySelector('#UserName');
const title = document.querySelector('#title');
const area = document.querySelector('#textArea');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', function() {
    event.preventDefault();
    
    const blogData = {
        blogUserName: userName.value,
        blogTitle: title.value,
        blogText: area.value,
    };

    localStorage.setItem('blogData', JSON.stringify(blogData));
})
