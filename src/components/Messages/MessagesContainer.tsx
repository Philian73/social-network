import React from 'react'

import {StoreContext} from '../../StoreContext'

import {actions} from '../../redux/messagesReducer'

import {Messages} from './Messages'

export const MessagesContainer = () => (
   <StoreContext.Consumer>
      {store => {
         const state = store.getState().messagesPage

         const updateNewMessageBody = (text: string) => store.dispatch(actions.updateNewMessageBodyAC(text))
         const sendMessage = () => store.dispatch(actions.sendMessageAC())

         return (
            <Messages messagesPage={state}
                      updateNewMessageBody={updateNewMessageBody}
                      sendMessage={sendMessage}
            />
         )
      }}
   </StoreContext.Consumer>
)
