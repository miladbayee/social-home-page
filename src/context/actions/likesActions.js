
export const toggleLikeAction = (postId) => {
    return {
        type: 'likes/toggleLike',
        payload:  postId 
    }
}

export const toggleHeartAction = (postId) => {
    return {
        type: 'likes/toggleHeart',
        payload:  postId 
    }
}