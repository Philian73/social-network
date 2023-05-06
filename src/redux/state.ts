export type ActionTypes = ReturnType<typeof updateNewPostTextAC>
   | ReturnType<typeof addPostAC>
   | ReturnType<typeof updateNewMessageBodyAC>
   | ReturnType<typeof sendMessageAC>

export const updateNewPostTextAC = (text: string) => ({
   type: 'UPDATE-NEW-POST-TEXT',
   newText: text
}) as const

export const addPostAC = () => ({
   type: 'ADD-POST'
}) as const

export const updateNewMessageBodyAC = (text: string) => ({
   type: 'UPDATE-NEW-MESSAGE-BODY',
   body: text
}) as const

export const sendMessageAC = () => ({
   type: 'SEND-MESSAGE'
}) as const

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
   newMessageBody: string
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

type StoreType = {
   _state: RootStateType
   _callSubscriber: (state: RootStateType) => void
   getState: () => RootStateType
   subscribe: (observer: (state: RootStateType) => void) => void
   dispatch: (action: ActionTypes) => void
}

export const store: StoreType = {
   _state: {
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
         newMessageBody: ''
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
   },
   _callSubscriber() {
      console.log('State changed')
   },

   getState() {
      return this._state
   },
   subscribe(observer: (state: RootStateType) => void) {
      this._callSubscriber = observer
   },

   dispatch(action) {
      if (action.type === 'UPDATE-NEW-POST-TEXT') {
         this._state.profilePage.newPostText = action.newText
         this._callSubscriber(this._state)
      } else if (action.type === 'ADD-POST') {
         this._state.profilePage.posts.push({
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
         })
         this._state.profilePage.newPostText = ''
         this._callSubscriber(this._state)
      } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
         this._state.messagesPage.newMessageBody = action.body
         this._callSubscriber(this._state)
      } else if (action.type === 'SEND-MESSAGE') {
         this._state.messagesPage.messages.push({
            id: this._state.messagesPage.messages.length + 1,
            message: this._state.messagesPage.newMessageBody
         })
         this._state.messagesPage.newMessageBody = ''
         this._callSubscriber(this._state)
      }
   },
}