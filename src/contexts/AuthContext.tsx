import { ReactNode, createContext, useState } from "react";

import { CompanyDTO } from "@dtos/CompanyDTO";



type AuthContextType = {
  company: CompanyDTO
  signIn: (data: CompanyDTO) => void
}


export const AuthContext = createContext({} as AuthContextType)


type AuthContextProviderProps = {
  children: ReactNode
}



export function AuthContextProvider({children}: AuthContextProviderProps) {
  const [company, setCompany] = useState({} as CompanyDTO)

  
  function signIn(data: CompanyDTO) {

    setCompany(data)

  }

  return <AuthContext.Provider value={{company, signIn}}>
    {children}
  </AuthContext.Provider>
}