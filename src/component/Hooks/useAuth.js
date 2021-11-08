import { useContext } from "react"
import { Context } from "../Context/ContextProvider"

const useAuth = () =>{
  return useContext(Context)
}

export default useAuth