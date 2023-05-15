import {createContext, FC, ReactNode} from 'react'

import {StoreType} from './redux/store'

export type ProviderType = {
   store: StoreType
   children: ReactNode
}

export const StoreContext = createContext({} as StoreType)

export const Provider: FC<ProviderType> = ({store, children}) => {
   return (
      <StoreContext.Provider value={store}>
         {children}
      </StoreContext.Provider>
   )
}