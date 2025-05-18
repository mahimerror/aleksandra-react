import { createContext } from "react"
import PropTypes from "prop-types"
export const MainContext = createContext()

function ContextProvider({children}) {

    const mainStateInfo = {

    }
  return (
    <MainContext.Provider value={mainStateInfo}>{children}</MainContext.Provider>
  )
}

ContextProvider.propTypes = {
    children: PropTypes.node
}

export default ContextProvider