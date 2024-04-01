// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

//Catch all the data that is storaged on the localStorage,
function renderMessage() {
    const lastBlogData = JSON.parse(localStorage.getItem('blogData'));
    if (lastBlogData !== null) {
      document.querySelector('.blog-post_title').textContent = lastBlogData.blogTitle;
      document.querySelector('.blog-post_text').textContent = lastBlogData.blogText;
      document.querySelector('.blog-user').textContent = lastBlogData.blogUserName;
    }
  }

  // When Loading this function is called and update the blog informations.
  renderMessage();