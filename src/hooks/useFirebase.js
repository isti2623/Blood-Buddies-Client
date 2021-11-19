import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const registerUser = (email, password, name, navigate, location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                /* let from = location?.state?.from?.pathname || "/";
                navigate(from, { replace: true }); */
                const newUser = { email, displayName: name };
                setUser(newUser);
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                setAuthError('');

            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }



    const loginUser = (email, password, navigate, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let from = location?.state?.from?.pathname || "/";
                navigate(from, { replace: true });
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    const signInWithGoogle = (navigate, location) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                /*   let from = location?.state?.from?.pathname || "/";
                  navigate(from, { replace: true }); */
                setAuthError('');
                const user = result.user;

            }).catch((error) => {
                //setAuthError(error.message);
                console.log(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //Observer User State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe
    }, [])



    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        registerUser,
        logOut,
        isLoading,
        authError,
        signInWithGoogle,
        loginUser,
    }
}

export default useFirebase;