import './firebase-index';
import firebase from 'firebase/firebase';

const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const authMethods = {

    // USER SIGN-UP
    signUpMethod: (firstName, lastName, email, password, setErrors, setCurrentUser) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                // Storing the user's data to firestore.
                addUser(firstName, lastName, email);

                // Setting the current user data into the state.
                setCurrentUser({ firstName, lastName, email });
            })
            .catch(err => {
                // Setting errors in the state received from server.
                setErrors(prev => ([...prev, err.message]))
            });

    },

    // USER LOGIN
    signInMethod: (email, password, setErrors, setCurrentUser) => {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                // Fetching the current signed in user's data from firestore.
                fetchUser(setErrors, setCurrentUser);
            })
            .catch(err => {
                // Setting errors in the state received from server.
                setErrors(prev => ([...prev, err.message]));
            });
    },

    // GOOGLE SIGN-IN
    googleLoginMethod: (setErrors, setCurrentUser) => {

        firebase.auth().signInWithPopup(googleProvider)
            .then(async res => {

                // Storing the user's data to firestore.
                addUser(res.user.displayName.split(" ")[0],
                    res.user.displayName.split(" ")[1],
                    res.user.email
                );

                // Setting the current user data into the state.
                setCurrentUser({
                    "firstName": res.user.displayName.split(" ")[0],
                    "lastName": res.user.displayName.split(" ")[1],
                    "email": res.user.email
                });

            }).catch((error) => {
                // Setting errors in the state received from server.
                setErrors(prev => ([...prev, error.message]));
            });
    },

    // FACEBOOK LOG-IN
    facebookLoginMethod: (setErrors, setCurrentUser) => {

        firebase.auth().signInWithPopup(facebookProvider)
            .then(async res => {

                // Storing the user's data to firestore.
                addUser(res.user.displayName.split(" ")[0],
                    res.user.displayName.split(" ")[1],
                    res.user.email
                );

                // Setting the current user data into the state.
                setCurrentUser({
                    "firstName": res.user.displayName.split(" ")[0],
                    "lastName": res.user.displayName.split(" ")[1],
                    "email": res.user.email
                });

            }).catch((error) => {
                // Setting errors in the state received from server.
                setErrors(prev => ([...prev, error.message]));
            });
    },

    // USER SIGN-OUT
    signOutMethod: (setErrors, setCurrentUser) => {

        firebase.auth().signOut().then(res => {
            // Setting the current user state back to empty object.
            setCurrentUser({})
        })
            .catch(err => {
                // Setting errors in the state received from server.
                setErrors(prev => ([...prev, err.message]));
            });
    },

    // USER AUTHENTICATION
    authHandlerMethod: (setLoading, setIsAuth) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setIsAuth(true);
                setLoading(false);

            } else {
                setIsAuth(false);
                setLoading(false);
            }
        });
    },

    // FETCH PRODUCTS FROM FIRESTORE.
    getProductsMethod: (setProducts) => {

        db.collection('products').get().then(
            (snapshot) => {
                const products = [];
                snapshot.docs.forEach(doc => {
                    const record = doc.data();
                    products.push(record);
                });
                setProducts(products);
            }
        )
    }

}

// Function to add the newly signed up user to the firestore.
const addUser = (firstName, lastName, email) => {

    const user = firebase.auth().currentUser;

    // Query to add a new user record to the Users collection.
    db.collection("Users")
        .doc(user.uid)
        .set({
            user_id: user.uid,
            first_name: firstName,
            last_name: lastName,
            email_address: email,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            console.log('User created!');
        }).catch((err) => console.log("An error occured while storing user data : ", err));
}

// Function to fetch current signed up user data from the firestore.
const fetchUser = (setErrors, setCurrentUser) => {

    const user = firebase.auth().currentUser;

    if (user) {

        // Query to fetch Sign-in user's data.
        db.collection("Users")
            .doc(user.uid)
            .get()
            .then(function (doc) {
                if (doc.exists) {
                    setCurrentUser({
                        "firstName": doc.data().first_name,
                        "lastName": doc.data().last_name,
                        "email": doc.data().email_address
                    });
                } else {
                    // Setting errors in the state received from server.
                    setErrors(['No record found for the provided credentials.']);
                }
            });

    }

}