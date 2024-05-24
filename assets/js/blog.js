const blogList = document.querySelector('.list')

function renderBlogs() {
    // get blogs
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

    // loop over blogs
    for (const blog of blogs) {
        // for each blog, create html and append
        console.log(blog);

        const infoEl = `
            <div>
                <p>${blog.userName}</p>
                <p>${blog.title}</p>
                <p>${blog.content}</p>
            </div>
        `
        blogList.innerHTML = blogList.innerHTML + infoEl;
    }

}

renderBlogs();