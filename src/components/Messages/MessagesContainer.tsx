import React from 'react'

import {StoreContext} from '../../StoreContext'

import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/messagesReducer'

import {Messages} from './Messages'

export const MessagesContainer = () => (
   <StoreContext.Consumer>
      {store => {
         const state = store.getState().messagesPage

         const updateNewMessageBody = (text: string) => store.dispatch(updateNewMessageBodyAC(text))
         const sendMessage = () => store.dispatch(sendMessageAC())

         return (
            <Messages messagesPage={state}
                      updateNewMessageBody={updateNewMessageBody}
                      sendMessage={sendMessage}
            />
         )
      }}
   </StoreContext.Consumer>
)
