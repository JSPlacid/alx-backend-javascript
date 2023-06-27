import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log('Body:', user.body);
      console.log('First Name:', user.firstName);
      console.log('Last Name:', user.lastName);
    })
    .catch(error => {
      console.error('Signup system offline');
    });
}
