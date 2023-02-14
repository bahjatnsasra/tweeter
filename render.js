let postIdCounter = 0;
let postsContainer = $("#posts")
const date = new Date().toLocaleDateString('en-GB');


const Renderer = function () {

    const renderPosts = function (Posts) {
        postsContainer.empty();
        for (const post of Posts) {
            CreateNewPost(post) 
        }
    }
    
    const CommentForm = function () {
        
    }

    
    const CreateNewPost = function (post) { 
        postIdCounter++;
        let NewPost = $("<div></div>")
        
        
        NewPost.append(`<div id = "${post.id}" data-id = '${post.id}'>${post.text}</div>`)
        NewPost.append(`<ul id = "${post.id}Comments"></ul>`)
        
        postsContainer.append(NewPost)
        NewPost.append("<button class='Delete_Post'>Delete</button>")
        CreateComments(post)
        $(`#${post.id}Comments`).append("<input type='text' id = 'Comment_text' placeholder = 'Comment'>")
        $(`#${post.id}Comments`).append(`<button class='Add_Comment'>comment</button></li>`)
    }
    
    const CreateComments = function (post) {
        const DeleteComment_btn = $("<button id='DeleteComment'>X</button>")
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