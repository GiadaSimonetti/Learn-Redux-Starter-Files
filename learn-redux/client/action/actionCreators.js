// increment
function increment(index){
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
// add comments
function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// remove comment
function removeCommet(postId, i) {
        type: 'REMOVE_COMMENT',
        postId,
        i
}
