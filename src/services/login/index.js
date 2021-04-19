import firebase from 'firebase';

export default (credential, password, userName) => {
  try {
    return new Promise((resolve) => {
      firebase.auth()
        .createUserWithEmailAndPassword(credential, password).then((data) => {
          data.user.updateProfile({
            displayName: userName,
          }).then(resolve(true));
        });
    });
  } catch (error) {
    return false;
  }
};
