const tweeter = Tweeter()
const renderer = Renderer()


$("#Twit_btn").on("click",function () {
    let PostText = $("#container").find("input").val()
    if (PostText == "") {
        return
    }else{
        tweeter.addPost(PostText)
        renderer.renderPosts(tweeter.getPosts())
    }
})


$("#posts").on("click",".Delete_Post",function () {
    let PostId = $(this).closest("div").find("div").data("id")
    tweeter.removePost(PostId);
    renderer.renderPosts(tweeter.getPosts())
})


$("#posts").on("click","#DeleteComment",function () {
    let commentID = $(this).closest("li").data("id")
    let PostId = $(this).closest("div").find("div").data("id")
    tweeter.removeComment(PostId,commentID);
    renderer.renderPosts(tweeter.getPosts())
})



$("#posts").on("click",".Add_Comment",function () {
    let PostId = $(this).closest("div").find("div").data("id")
    let CommentText = $(this).siblings("input").val()

    if(CommentText == ""){
        return
    }else{
        tweeter.addComment(CommentText,PostId)
        renderer.renderPosts(tweeter.getPosts())
    }
})




renderer.renderPosts(tweeter.getPosts())

