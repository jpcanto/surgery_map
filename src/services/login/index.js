import firebase from 'firebase';

export default async (credential, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(credential, password);
    return true;
  } catch (error) {
    return false;
  }
};
