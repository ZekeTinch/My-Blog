// username, title and content
const submitEl = document.querySelector('#submit');
const nameInput = document.querySelector('#username');
const contentInput = document.querySelector('#content')
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');


signUpButton.addEventListener('click', function() {
    event.preventDefault();

    const blogs = JSON.parse(localStorage.getItem('blog')) || [];

    const blog = {
    userName: userName.value,
    title: title.value,
    content: content.value
    };

    blogs.push(blog);

    localStorage.setItem('blog', JSON.stringify(blogs));

    window.location.href = 'blog.html'
})
console.log('hit')



// let mode = 'dark';
// themeSwitcher.addEventListener('click', function () {
//     if (mode === 'dark') {
//         mode = 'light';
//         container.setAttribute('class', 'light');
//     }
//     else {
//         mode = 'dark';
//         container.setAttribute('class', 'dark');
//     }
// });


const array = function(submitEl, nameInput, contentInput){
    
}