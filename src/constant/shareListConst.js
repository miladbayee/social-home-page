import { MdPermMedia, MdLabel, MdRoom } from "react-icons/md";
import { HiEmojiHappy } from "react-icons/hi";


const shareList = [
    {
        id: 'photo & video',
        title: 'photo & video',
        iconName: <MdPermMedia />
    },
    {
        id: 'tag',
        title: 'tag',
        iconName: <MdLabel />
    },
    {
        id: 'location',
        title: 'location',
        iconName: <MdRoom />
    },
    {
        id: 'groups',
        title: 'groups',
        iconName: <HiEmojiHappy />
    },
]

export {
    shareList
}