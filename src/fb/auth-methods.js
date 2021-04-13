import firebaseConfig from './firebase-index';
import firebase from 'firebase/firebase';

export const authMethods = {

    signup: (email, password, setErrors, setToken) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async res => {
                const token = await Object.entries(res.user)[5][1].b
                //set token to localStorage 
                await localStorage.setItem('token', token)
                //grab token from local storage and set to state. 
                setToken(window.localStorage.token)
                console.log(res)
            })
            .catch(err => {
                setErrors(prev => ([...prev, err.message]))
            })
    },
    signin: (email, password) => {

    },
    signout: (email, password) => {

    }

}