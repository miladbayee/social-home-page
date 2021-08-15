import { useReducer } from "react"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import reducer from './reducers/likesReducer'

const initialState = {
    users: [
        { id: 'user1', profileImage: 'assets/images/users/1.jpg', name: 'Jack David', isOnline: false },
        { id: 'user2', profileImage: 'assets/images/users/2.jpg', name: 'Yarn Nilcon', isOnline: true },
        { id: 'user3', profileImage: 'assets/images/users/3.jpg', name: 'Emad Rahim', isOnline: false },
        { id: 'user4', profileImage: 'assets/images/users/4.jpg', name: 'Jan Dove', isOnline: true },
        { id: 'user5', profileImage: 'assets/images/users/5.jpg', name: 'Sara Eshmit', isOnline: true },
        { id: 'user6', profileImage: 'assets/images/users/6.jpg', name: 'Zozan Yi', isOnline: false },
        { id: 'user7', profileImage: 'assets/images/users/7.jpg', name: 'Emi Harson', isOnline: false },
        { id: 'user8', profileImage: 'assets/images/users/8.jpg', name: 'Layli Rabson', isOnline: true },
        { id: 'user9', profileImage: 'assets/images/users/9.jpg', name: 'Mari Navin', isOnline: true },
    ],
    posts: [
        { id: 'post 1', userId: 'user1', postImage: 'assets/images/posts/1.jpg', body: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', time: '5 min ago' },
        { id: 'post 2', userId: 'user2', postImage: 'assets/images/posts/2.jpg', body: 'qui est esse', time: '3 min ago' },
        { id: 'post 3', userId: 'user2', postImage: 'assets/images/posts/3.jpg', body: 'ea molestias quasi exercitationem repellat qui ipsa sit aut', time: '8 min ago' },
        { id: 'post 4', userId: 'user3', postImage: 'assets/images/posts/4.jpg', body: 'eum et est occaecati', time: '2 min ago' },
        { id: 'post 5', userId: 'user4', postImage: 'assets/images/posts/5.jpg', body: 'nesciunt quas odio', time: '4 min ago' },
        { id: 'post 6', userId: 'user5', postImage: 'assets/images/posts/6.jpg', body: 'dolorem eum magni eos aperiam quia', time: '9 min ago' },
        { id: 'post 7', userId: 'user1', postImage: 'assets/images/posts/7.jpg', body: 'magnam facilis autem', time: '12 min ago' },
        { id: 'post 8', userId: 'user6', postImage: 'assets/images/posts/8.jpg', body: 'dolorem dolore est ipsam', time: '1 hr ago' },
        { id: 'post 9', userId: 'user7', postImage: 'assets/images/posts/9.jpg', body: 'nesciunt iure omnis dolorem tempora et accusantium', time: '2 hr ago' },
        { id: 'post 10', userId: 'user8', postImage: 'assets/images/posts/10.jpg', body: 'optio molestias id quia eum', time: '1 day ago' },
        { id: 'post 11', userId: 'user9', postImage: 'assets/images/posts/11.jpg', body: 'et ea vero quia laudantium autem', time: '1 day ago' },
        { id: 'post 12', userId: 'user4', postImage: 'assets/images/posts/12.jpg', body: 'in quibusdam tempore odit est dolorem', time: '1 day ago' },
    ],
    likes: [
        { id: 'post1', postId: 'post 1', isLiked: false, likeCount: 32, isHearted: true, commentCount: 8 },
        { id: 'post2', postId: 'post 2', isLiked: true, likeCount: 60, isHearted: false, commentCount: 12 },
        { id: 'post3', postId: 'post 3', isLiked: true, likeCount: 64, isHearted: true, commentCount: 15 },
        { id: 'post4', postId: 'post 4', isLiked: false, likeCount: 82, isHearted: false, commentCount: 25 },
        { id: 'post5', postId: 'post 5', isLiked: true, likeCount: 9, isHearted: true, commentCount: 2 },
        { id: 'post6', postId: 'post 6', isLiked: false, likeCount: 24, isHearted: false, commentCount: 4 },
        { id: 'post7', postId: 'post 7', isLiked: true, likeCount: 21, isHearted: false, commentCount: 3 },
        { id: 'post8', postId: 'post 8', isLiked: true, likeCount: 45, isHearted: true, commentCount: 9 },
        { id: 'post9', postId: 'post 9', isLiked: false, likeCount: 12, isHearted: true, commentCount: 2 },
        { id: 'post10', postId: 'post 10', isLiked: false, likeCount: 86, isHearted: false, commentCount: 11 },
        { id: 'post11', postId: 'post 11', isLiked: true, likeCount: 2, isHearted: true, commentCount: 0 },
        { id: 'post12', postId: 'post 12', isLiked: false, likeCount: 11, isHearted: true, commentCount: 2 },
    ]
}

const AppState = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}

export default AppState