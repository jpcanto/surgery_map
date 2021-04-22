import firebase from 'firebase';

const db = firebase.firestore();

export function storePatient(
  name,
  cpf,
  age,
  gender,
  phoneNumber,
  email,
  surgery,
  hospital,
  paid,
  procedureDate,
  payDate,
  obs,
) {
  db.collection('patients')
    .add({
      name,
      cpf,
      age,
      gender,
      phoneNumber,
      email,
      surgery,
      hospital,
      paid,
      procedureDate,
      payDate,
      obs,
    })
    .then(() => {
      console.log('Document successfully written!');
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
}

export async function listPatients() {
  const ref = db.collection('patients');
  const snapshot = await ref.get();
  const patients = [];
  snapshot.forEach((patient) => {
    patients.push({ id: patient.id, ...patient.data() });
  });
  return patients.length ? patients : false;
}
