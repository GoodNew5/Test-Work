/**
 * https://dev.to/margaretkrutikova/how-to-mobx-state-tree-react-typescript-3d5j
*/
import { createContext, useContext } from 'react'
import { IRootStore } from 'stores'

const StoreContext = createContext<IRootStore>({} as IRootStore)

export const useStore = () => useContext(StoreContext)
export const StoreProvider = StoreContext.Provider
