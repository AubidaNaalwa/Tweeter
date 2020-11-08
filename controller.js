
const Controller = () => {
    const moudl = moudle()
    const vie = view()
    const addingnewpost = (post) => {
        moudl.addPost(post)
        vie.renderPosts(moudl.getUpdatedPosts())
    }
    const addingnewcomment = (postid, comment) =>{
        moudl.addAcommentToApost(postid, comment)
        vie.renderPosts(moudl.getUpdatedPosts())
    }
    const deleteThePost = (id)=>{
       moudl.removeAPost(id)
       vie.renderPosts(moudl.getUpdatedPosts())
    }
    const deleteTheComment = (postID,commentID) =>{
        moudl.removeACommentFromAPost(postID,commentID)
        vie.renderPosts(moudl.getUpdatedPosts())
    }
    return {
        addingnewpost,
        addingnewcomment,
        deleteThePost,
        deleteTheComment
    }
}
const controller = Controller()
$(`#grid-Twit`).on(`click`,`#twitbtn`,function(){

    if(!$(`#text-input`).val())
        return
    controller.addingnewpost($(`#text-input`).val())
    $(`#text-input`).val("")
});


$(`#grid-posts`).on(`click`,`.commentBtn`,function(){
    let text = $(this).closest('div').find(".commentText")
    if(!text.val()){
        return
    }
    let postcontainer = $(this).closest('.post-container')
    controller.addingnewcomment(postcontainer.data().id,text.val())
    text.val("")
});



$(`#grid-posts`).on(`click`,`.deleteBtn`,function(){
    let postcontainer = $(this).closest('.post-container')
    controller.deleteThePost(postcontainer.data().id    )
 
});


$(`#grid-posts`).on(`click`,`.X`,function(){
    let postcontainer = $(this).closest('li')
    controller.deleteTheComment($(this).closest('.post-container').data().id,postcontainer.data().id)
 
});

