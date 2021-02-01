import React, {useEffect, useState} from 'react';
import firebase from '../firebase';

function useAuth(){
    const [loggedUser, setLoggerUser] = useState(null);

    useEffect(()=>{
        const unsuscribe = firebase.auth.onAuthStateChanged(usuario=>{
            if(usuario){
                setLoggerUser(usuario);
            }
            else{
                setLoggerUser(null);
            }

            return () => unsuscribe();
        });

    },[]);

    return loggedUser;
}

export default useAuth;