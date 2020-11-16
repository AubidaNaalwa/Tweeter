const moudle = () => {
    let posts = []
    let postId = 0;
    let commentID = 0;
    let userName = []
    let userId = 0;
    let currentUser = -1 ;
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

    const removeACommentFromAPost = (postID, commentID) => {
        for (let i of posts) {
            if (parseInt(i.id) === postID) {
                for (let j in i.comments)
                    if (commentID === parseInt(i.comments[j].id)) {
                        i.comments.splice(j, 1)
                        break;
                    }

                break;
            }
        }
    }

    const removeAPost = (id) => {
        for (let i in posts) {
            if (parseInt(posts[i].id) === id) {
                posts.splice(i, 1)
                break;
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

    const addUserName = (user,pass) =>{
        if(checkUser(user,pass))
        {
            alert("already have a user")
            return false
        }
        userName.push({user:user,pass:pass, Id:userId});
        currentUser = userId
        userId++;
        return true
    }

    const checkUser =(user,pass) => {
        for(let i of userName){
            if(i.user === user && i.pass === pass){
                // load posts
                currentUser = i.userId
                return true
            }
        }

        return false
    }
    const logout = () =>{
        //save posts 
    }
    return {
        addPost,
        removeACommentFromAPost,
        removeAPost,
        addAcommentToApost,
        getUpdatedPosts,
        addUserName,
        checkUser,
        logout
    }


}