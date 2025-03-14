import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const name = 'hello';
    const authInfo = {
        name

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;