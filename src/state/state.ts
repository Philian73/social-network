import {posts, dialogs, messages, friends} from './'

import {PostType, DialogType, MessageType, FriendsType} from './'

export type MessagesPageType = {
   dialogs: DialogType[]
   messages: MessageType[]
}
export type ProfilePageType = {
   posts: PostType[]
}

export type SidebarType = {
   friends: FriendsType[]
}

export type rootStateType = {
   profilePage: ProfilePageType
   messagesPage: MessagesPageType
   sidebar: SidebarType
}

export const state: rootStateType = {
   profilePage: {
      posts
   },
   messagesPage: {
      dialogs,
      messages,
   },
   sidebar: {
      friends
   }
}