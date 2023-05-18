export type FriendType = {
   id: number
   nameFriend: string
   avatar: string
}

export type SidebarType = {
   friends: FriendType[]
}

const initialState: SidebarType = {
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
}

export const sidebarReducer = (state = initialState): SidebarType => state