// username, title and content
const button = document.getElementById('submit-btn');
const userName = document.getElementById('userName')

button.addEventListener('click', function (event){
    event.preventDefault();

    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

    let blog = {
        userName: 'blah', // username.value,
        title: 'blahhh', //title.value,
        content: 'blahhhh' //content.value.trim(),
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

