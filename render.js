let postsContainer = $("#posts")
const date = new Date().toLocaleDateString('en-GB');


const Renderer = function () {

    const renderPosts = function (Posts) {
        postsContainer.empty();
        for (const post of Posts) {
            CreateNewPost(post) 
        }
    }
    

    
    const CreateNewPost = function (post) { 
        let NewPost = $("<div></div>")
        
        NewPost.append(`<h2>Post ${post.id[1]}</h2>`)
        NewPost.append(`<div data-id = '${post.id}'>${post.text}</div>`)
        NewPost.append(`<ul id = "${post.id}Comments"></ul>`)
        
        postsContainer.append(NewPost)
        NewPost.append("<button class='Delete_Post'>Delete</button>")
        CreateComments(post)
        $(`#${post.id}Comments`).append("<input type='text' id='Comment_text' placeholder = 'Comment'>")
        $(`#${post.id}Comments`).append(`<button class='Add_Comment'>comment</button></li>`)
    }
    
    const CreateComments = function (post) {
        for (const comment of post.comments) {

            let newComment = $(
                `<li data-id = '${comment.id}'>${comment.text} 
                <button id='DeleteComment'>X</button></li>`
            )

            $(`#${post.id}Comments`).append(newComment)
        }
    }


    return {
        renderPosts : renderPosts
    }
}