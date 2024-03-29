// //Set defaut mode to dark
// let mode = 'dark';

// //Listen for a click event on toggle switch
// themeSwitcher.addEventListener('click', function() {
//     //if mode is dark, apply light background
//     if (mode === 'dark') {
//         mode = 'light'
//         container.setAttribute('class', 'light');
//     }
//     //if mode is light, apply dark background
//     else {
//         mode = 'dark'
//         container.setAttribute('class', 'dark');
//     }
// })

// function renderMessage() {
//     const lastBlogData = JSON.parse(localStorage.getItem('blogData'));
//     if(lastBlogData !== null) {
//         document.querySelector('.blog-post_title').textContent = lastBlogData.blogTitle;
//     }

// }

// function renderMessageUser() {
//     const lastBlogData = JSON.parse(localStorage.getItem('blogData'));
//     if(lastBlogData !== null) {
//         document.querySelector('.blog-post_title').textContent = lastBlogData.blogTitle;
      
     
//     }

// }

// function renderMessageUser() {
//     const lastBlogData = JSON.parse(localStorage.getItem('blogData'));
//     if(lastBlogData !== null) {
//         document.querySelector('.blog-post').textContent = lastBlogData.blogUserName;
//         document.querySelector('.blog-post_title').textContent = lastBlogData.blogTitle;
//         document.querySelector('.blog-post_text').textContent = lastBlogData.blogText;
        
//     }
// }

// // function renderMessageText() {
// //     const lastBlogData = JSON.parse(localStorage.getItem('blogData'));
// //     if(lastBlogData !== null) {
// //         document.querySelector('.blog-post_text').textContent = lastBlogData.blogText;
// //     }
// // }
// renderMessageUser();
// // renderMessageText();
