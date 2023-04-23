export type PostType = {
   id: number
   message: string
   likesCount: number
}

export type MessageType = {
   message: string
   id: number
}

export type DialogType = {
   id: number
   name: string
}

export type FriendsType = {
   id: number
   nameFriend: string
   avatar: string
}

export type MessagesPageType = {
   dialogs: DialogType[]
   messages: MessageType[]
}

export type ProfilePageType = {
   posts: PostType[]
   newPostText: string
}

export type SidebarType = {
   friends: FriendsType[]
}

export type RootStateType = {
   profilePage: ProfilePageType
   messagesPage: MessagesPageType
   sidebar: SidebarType
}

export const state: RootStateType = {
   profilePage: {
      posts: [
         {id: 1, message: 'Hi, how are you?', likesCount: 15},
         {id: 2, message: 'It\'s my first post', likesCount: 20},
      ],
      newPostText: '',
   },
   messagesPage: {
      dialogs: [
         {id: 1, name: 'Nikolay'},
         {id: 2, name: 'Darya'},
         {id: 3, name: 'Nikita'},
         {id: 4, name: 'Maxim'},
         {id: 5, name: 'Vasiliy'},
         {id: 6, name: 'Andrei'},
      ],
      messages: [
         {id: 1, message: 'Hi'},
         {id: 2, message: 'How are you doing?'},
         {id: 3, message: 'See you?'},
         {id: 4, message: 'Yo'},
         {id: 5, message: 'Yo'},
      ],
   },
   sidebar: {
      friends: [
         {
            id: 1,
            nameFriend: 'Darya',
            avatar: 'https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13'
         },
         {
            id: 2,
            nameFriend: 'Maxim',
            avatar: 'https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13'
         },
         {
            id: 3,
            nameFriend: 'Nikita',
            avatar: 'https://avatars.mds.yandex.net/i?id=2bf8c047d61a77491675e765c2a8f65d538037fe-9182388-images-thumbs&n=13'
         },
      ],
   },
}

let rerenderEntireTree = (state: RootStateType) => {
   console.log('State changed')
}

export const addPost = () => {
   state.profilePage.posts.push({
      id: state.profilePage.posts.length + 1,
      message: state.profilePage.newPostText,
      likesCount: 0,
   })
   state.profilePage.newPostText = ''
   rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
   state.profilePage.newPostText = newText
   rerenderEntireTree(state)
}

export const subscribe = (observer: (state: RootStateType) => void) => {
   rerenderEntireTree = observer
}