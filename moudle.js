const moudle = () => {
    let posts = []

    let postId = 0;
    let commentID = 0;
    const addPost = (post) => {
        posts.push({
            id: postId,
            content: post,
            comments: [

            ]
        });
        postId++;
        return postId - 1;
    }
    const returnPost = (post) => {
        for (let i of posts) {
            if (i.content === post) {
                return i;
            }
        }
        return null
    }
    const removeACommentFromAPost = (postID, commentID) => {
        for (let i of posts) {
            if (parseInt(i.id) === postID) {
                for (let j in i.comments)
                    if (commentID === parseInt(i.comments[j].id)) {
                        i.comments.splice(j, 1)
                    }
            }
        }
    }

    const removeAPost = (id) => {
        for (let i in posts) {
            if (parseInt(posts[i].id) === id) {
                posts.splice(i, 1)
            }
        }
    }
    
    const addAcommentToApost = (postID, comment) => {
        for (let i of posts) {
            if (parseInt(i.id) === postID) {
                i.comments.push({ id: commentID, comment: comment });
                commentID++;
                break;
            }
        }
    }


    const getUpdatedPosts = () => posts

    return {
        addPost,
        returnPost,
        removeACommentFromAPost,
        removeAPost,
        addAcommentToApost,
        getUpdatedPosts
    }


}