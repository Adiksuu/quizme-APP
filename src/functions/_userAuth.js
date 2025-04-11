import { signInWithPopup } from "firebase/auth";
import { errorsList } from "../api/other/errors";
import { auth, database } from "../api/database/connect";

function _userAuth(e, type, email, password, username, setError, setAuthorized) {
    e.preventDefault();

    if (type === 'login') {
        auth.signInWithEmailAndPassword(email, password).then(async () => {
            setAuthorized(true)
        }).catch((err) => {
            if (errorsList[err.code]) {
                setError(errorsList[err.code].message);
            } else {
                setError(err.code);
            }
        })
    } else {
        if (username.trim().length < 3) {
            setError('The username is too short')
            return
        }
        auth.createUserWithEmailAndPassword(email, password).then(() => {
            const data = {
                email, 
                password, 
                username
            }

            database.ref(`users/${auth.currentUser.uid}/`).set(data)
            setAuthorized(true)
        }).catch((err) => {
            if (errorsList[err.code]) {
                setError(errorsList[err.code].message);
            } else {
                setError(err.code);
            }
        })
    }
}

function _userGoogleAuth(auth, provider, setAuthorized) {
    signInWithPopup(auth, provider).then(async (result) => {
        const user = result.user;
        
        const userData = {
            email: user.email, 
            password: `google-${user.uid}`,
            username: user.displayName,
        }
        const snapshot = await database.ref(`users/${user.uid}/`).once('value')
        if (!snapshot.exists()) {
            database.ref(`users/${user.uid}/`).set(userData)
        }
        setAuthorized(true)
    }).catch((error) => {
        console.log(error)
    });
}

export { _userAuth, _userGoogleAuth }