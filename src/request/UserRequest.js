import firebase from 'firebase';

export async function Login(email,password) {
    try {
        let response = await firebase.auth().signInWithEmailAndPassword(email, password);
        let {user} = response;
        debugger
        console.log("Se realizo Login correctamente");
        return {id: user.uid, email: user.email};
    }catch(err){
        console.log(err);
        return null;
    } 
}


export async function  SignUp(email,password) {
    try {
        let response = await firebase.auth().createUserWithEmailAndPassword(email , password);
        let {user} = response; //destructuring objetcts
        firebase.firestore().collection('users').doc(user.uid).set({
            email: user.email
        });
        console.log("Se creo Usuario correctamente");
        return {id: user.uid, email: user.email};
    }catch(err){
        console.log(err);
    } 
    return null;
}

export async function  Logout(email,password) {
    try {
        firebase.auth().signOut(); 
        console.log("Se cerro sesion correctamente");
        return;
    }catch(err){
        console.log(err);
    } 
    return null;
}