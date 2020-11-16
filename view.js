const view = () => {

    //the main idea here that each comment container has the same struct but we want each time the user insert a post 
    //the controller use this struct to add the comment 
    //and for that we use the "postContainer"

    const renderPosts =(posts) =>{
        let postContainer;
        let commentContainer;
        $(`#grid-posts`).empty()
        for(let post of posts){
            postContainer = `<div class = "post-container" id = "post-${post.id}" data-id = ${post.id}><div class="thepost">${post.content}</div>
            <div class="commentContainer"></div>
            <div class="replyContainer">
                <input type="text" name="inputText" class="commentText" placeholder ="Got a something to say?">
                <button class ="commentBtn">Comment</button>
                <button class ="deleteBtn">delete Post</button>
            </div>
        </div>`;
            $("#grid-posts").prepend(postContainer);
            commentContainer = $(`#post-${post.id}`).find(".commentContainer")
            for(let comment of post.comments){
                commentContainer.append(`<li class ="comment-${comment.id}" data-id = ${comment.id}><span class ="X fas fa-trash">  </span><span>${comment.comment}</span></li>`)
            }
        }
    }
    
    const enterTheScreen =(posts) =>{
        $(`#loginContainer`).css(`display`,`none`);
        $(`#container`).css(`display`,`grid`);
        renderPosts(posts)
    }

    const logout =() =>{
        $(`#loginContainer`).css(`display`,`grid`);
        $(`#container`).css(`display`,`none`);
    }
    return {
        renderPosts,
        enterTheScreen,
        logout
    }

}