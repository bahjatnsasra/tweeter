let _posts = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
];




const Tweeter = function () {
    let postIdCounter = _posts.length;
    let commentIdCounter = 0 ;
    for (let post of _posts) {
        commentIdCounter += post.comments.length
    }


    const getPosts =function () {
        return _posts
    }

    const addPost = function(newText){
        postIdCounter++;
        newPost = {
            id : `p${postIdCounter}`,
            text : newText,
            comments: [ ]
        }
        _posts.push(newPost);
    }

    const removePost =function (postID) {
        for (let post of _posts) {
            if (post.id == postID) {
                _posts.splice(_posts.indexOf(post),1);
            }
        }
    }


    const addComment =function (newText,postID) {
        commentIdCounter++;

        let newComment = {
            id: `c${commentIdCounter}`,
            text : newText
        }

        for (let post of _posts) {
            if (post.id == postID) {
                post.comments.push(newComment)
            }
        }
    }

    const removeComment = function (postID,commentID) {
        for (let post of _posts) {
            if (post.id == postID) {
                removeCommentHelper(post.comments,commentID)
            }
        }

        return
    }

    const removeCommentHelper = function(Comments ,commentID ) {
        for(let comment of Comments){
            if (comment.id == commentID) {
                Comments.splice(Comments.indexOf(comment),1)
            }
        }
        return 
    }

    return {
        addPost:addPost,
        getPosts:getPosts,
        removePost:removePost,
        addComment:addComment,
        removeComment:removeComment
    }

}

