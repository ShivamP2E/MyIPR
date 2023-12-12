import { createContext, useContext,useState, useEffect} from "react";
// import {getFirestore,collection,addDoc } from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from 'firebase/auth'
    import {auth, db} from '../Firebase'
    // const firestore = getFirestore()
    const UserContext = createContext();

    export const AuthContextProvider = ({children}) =>{
    const [ user, setUser] = useState({});

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () => {
        return signOut(auth)
    }
    // const handleCreateNewUser = async(firstname, lastname,username,email,password) =>
    // {
    //     await addDoc(collection(db,'userdata'),{
    //         firstname,
    //         lastname,
    //         username,
    //         email,
    //         password,

    //     })
    // }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () =>{
            unsubscribe();
        }
    }, [])
    
    
    
    return (
        <UserContext.Provider value= {{createUser,user, signIn, logout}} >
            {children}
        </UserContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(UserContext); 
}