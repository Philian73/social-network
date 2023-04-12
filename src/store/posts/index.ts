export type PostType = {
   id: number
   message: string
   likesCount: number
}

export const posts: PostType[] = [
   {id: 1, message: 'Hi, how are you?', likesCount: 15},
   {id: 2, message: 'It\'s my first post', likesCount: 20},
]