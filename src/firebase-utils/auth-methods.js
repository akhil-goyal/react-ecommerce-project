import './firebase-index';
import firebase from 'firebase/firebase';

const db = firebase.firestore();

export const authMethods = {

    // USER SIGN-UP
    signUpMethod: (firstName, lastName, email, password, setErrors, setToken) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async res => {

                const user = firebase.auth().currentUser;

                addUser(user.uid, firstName, lastName, email);

                // Extracting the token from response.
                const token = await Object.entries(res.user)[5][1].b;

                // Setting the extracted token in localstorage.
                await localStorage.setItem('token', token);

                // Setting the local storage token into the state.
                setToken(window.localStorage.token);
            })
            .catch(err => {
                // Setting errors in the state received from server.
                setErrors(prev => ([...prev, err.message]))
            });

    },

    // USER LOGIN
    signInMethod: (email, password, setErrors, setToken) => {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async res => {

                // Extracting the token from response.
                const token = await Object.entries(res.user)[5][1].b;

                // Setting the extracted token in localstorage.
                await localStorage.setItem('token', token);

                // Setting the local storage token into the state.
                setToken(window.localStorage.token);

            })
            .catch(err => {
                // Setting errors in the state received from server.
                setErrors(prev => ([...prev, err.message]));
            });
    },

    // USER SIGN-OUT
    signOutMethod: (setErrors, setToken) => {

        firebase.auth().signOut().then(res => {

            // Deleting the token from localstorage.
            localStorage.removeItem('token');

            // Setting the token state back to null.
            setToken(null);
        })
            .catch(err => {
                // Setting errors in the state received from server.
                setErrors(prev => ([...prev, err.message]));

                // Deleting the token from localstorage.
                localStorage.removeItem('token');

                // Setting the token state back to null.
                setToken(null);
            });
    }

}

const addUser = (uid, firstName, lastName, email) => {

    db.collection("Users")
        .doc(uid)
        .set({
            user_id: uid,
            first_name: firstName,
            last_name: lastName,
            email_address: email,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            console.log('User created!');
        }).catch((err) => console.log("An error occured while storing user data : ", err));
}