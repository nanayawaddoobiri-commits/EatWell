import { auth } from "./firebase.js";
import { GoogleAuthProvider, signInWithPopup } from 
"https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").onclick = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Logged in:", user);
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error(error);
  }
};