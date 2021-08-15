import { MdRssFeed, MdChat,MdPlayCircleFilled,MdGroup,MdBookmark,MdQuestionAnswer,MdEvent } from "react-icons/md";
import {IoMdBriefcase} from 'react-icons/io'
const sidbarList = [
    {
        id: 'feed',
        title: 'feed',
        iconName: <MdRssFeed />
    },
    {
        id: 'chats',
        title: 'chats',
        iconName: <MdChat />
    },
    {
        id: 'videos',
        title: 'videos',
        iconName: <MdPlayCircleFilled />
    },
    {
        id: 'groups',
        title: 'groups',
        iconName: <MdGroup />
    },
    {
        id: 'bookmarks',
        title: 'bookmarks',
        iconName: <MdBookmark />
    },
    {
        id: 'questions',
        title: 'questions',
        iconName: <MdQuestionAnswer />
    },
    {
        id: 'jobs',
        title: 'jobs',
        iconName: <IoMdBriefcase />
    },
    {
        id: 'events',
        title: 'events',
        iconName: <MdEvent />
    },
]

export {
    sidbarList
}