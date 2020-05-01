import * as firebase from 'firebase';

export function useFirebase() {
  
  var provider = new firebase.auth.GoogleAuthProvider();
 

  const userLogin = async (email:any ,password:any) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(resp=>{ console.log(resp); },err=>{ console.log(err); })
  };
 
  return {
    userLogin
  };
}

