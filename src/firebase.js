import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAlw1PApQjx3A07qh-DOEO8TkWrQtnZkBk',
  authDomain: 'todosprogect.firebaseapp.com',
  projectId: 'todosprogect',
  storageBucket: 'todosprogect.appspot.com',
  messagingSenderId: '89718872241',
  appId: '1:89718872241:web:02df770f39bf5e27772a90',
  databaseURL:
    'https://todosprogect-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
