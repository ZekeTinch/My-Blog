// username, title and content
const button = document.getElementById('submit-btn');
const userName = document.querySelector('#userName');
const title = document.querySelector('#title');
const content = document.querySelector('#content');


button.addEventListener('click', function (event){
    event.preventDefault();

    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

    let blog = {
        userName: userName.value,
        title: title.value,
        content: content.value.trim(),
    };

    blogs.push(blog);

    localStorage.setItem('blogs', JSON.stringify(blogs));
    location.assign('blog.html')
})



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

