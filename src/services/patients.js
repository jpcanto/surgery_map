import firebase from 'firebase';

const db = firebase.firestore();

export async function findPatient(id) {
  const ref = db.collection(`patients/${id}`);
  const snapshot = await ref.get();
  console.log(snapshot);
}

export function storePatient(
  {
    name, cpf, age, gender, phoneNumber, email, surgery,
    hospital, paid, procedureDate, payDate, obs,
  }, userId,
) {
  console.log(userId);
  return db.collection('accounts')
    .doc(userId).collection('patients')
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
    .then(() => 'Paciente cadastrado com sucesso')
    .catch((error) => `Ocorreu um erro ao tentar cadastrar: ${error}`);
}

export function updatePatient(
  {
    name, cpf, age, gender, phoneNumber, email, surgery,
    hospital, paid, procedureDate, payDate, obs, patientId,
  }, userId,
) {
  return db.collection('accounts')
    .doc(userId).collection('patients')
    .doc(patientId)
    .set({
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
    .then(() => 'Paciente editado com sucesso')
    .catch((error) => `Ocorreu um erro ao tentar editar: ${error}`);
}

export async function listPatients(id) {
  const ref = db.collection('accounts').doc(id).collection('patients');
  const snapshot = await ref.get();
  const patients = [];
  snapshot.forEach((patient) => {
    patients.push({ id: patient.id, ...patient.data() });
  });
  return patients.length ? patients : false;
}
