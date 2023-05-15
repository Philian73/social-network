import React, {FC} from 'react'

import {StoreType} from '../../redux/store'
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/messagesReducer'

import {Messages} from './Messages'

type PropsType = {
   store: StoreType
}
export const MessagesContainer: FC<PropsType> = ({store}) => {
   const state = store.getState().messagesPage

   const updateNewMessageBody = (text: string) => store.dispatch(updateNewMessageBodyAC(text))
   const sendMessage = () => store.dispatch(sendMessageAC())

   return (
      <Messages messagesPage={state}
                updateNewMessageBody={updateNewMessageBody}
                sendMessage={sendMessage}
      />
   )
}