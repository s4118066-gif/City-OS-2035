import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  // paste your config here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function logEvent(data) {
  try {
    await addDoc(collection(db, "events"), data);
    console.log("Event logged");
  } catch (e) {
    console.error("Error:", e);
  }
}
