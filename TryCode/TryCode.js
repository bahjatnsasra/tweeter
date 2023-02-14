let postIdCounter = 0;
let postsContainer = $("#posts")
const date = new Date().toLocaleDateString('en-GB');



const renderPosts = function (Posts) {
    postsContainer.empty();
    for (const post of Posts) {
        CreateNewPost(post) 
    }
}


const CreateNewPost = function (post) { 
    postIdCounter++;
    let NewPost = $("<div></div>")
    NewPost.append(`<h2>Post ${postIdCounter}</h2>`)
    NewPost.append(`<h5>Date ${date}</h5>`)
    NewPost.append(`<div id = "${post.id}" data-id = '${post.id}'>${post.text}</div>`)
    NewPost.append(`<ul id = "${post.id}Comments"></ul>`)
    postsContainer.append(NewPost)
    CreateComments(post)
}

const CreateComments = function (post) {
    for (const comment of post.comments) {
        let newComment = $(`<div data-id = '${comment.id}'>${comment.text}</div>`)
        $(`#${post.id}Comments`).append(newComment)
    }
}


renderPosts(posts)

const Renderer = function () {
    return {
        renderPosts : renderPosts
    }
}