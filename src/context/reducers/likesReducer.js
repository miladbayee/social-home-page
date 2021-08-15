
const likesReducer = (state, action) => {
    switch (action.type) {
        case 'likes/toggleLike':
            const postId = action.payload

            state.likes.forEach(item => {
                if (item.postId === postId) {
                    item.isLiked = !item.isLiked
                    if (item.isLiked) return item.likeCount++
                    return item.likeCount--
                }
            })

            return {
                ...state,
            }
        case 'likes/toggleHeart':
            const heartId = action.payload
            state.likes.forEach(item => {
                if (item.postId === heartId) {
                    item.isHearted = !item.isHearted
                }
            })
            return {
                ...state
            }
        default:
            return state
    }
}

export default likesReducer