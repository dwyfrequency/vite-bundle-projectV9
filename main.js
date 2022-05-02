import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import firebaseConfig from "./hidden/firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// const analytics = getAnalytics(app);

async function component() {
  const element = document.createElement("div");

  element.innerHTML = JSON.stringify(
    await getDoc(
      doc(
        firestore,
        "users/Ncf7nIwi1jgnPuwwdWvgruWYxpr2/todos/bEYKh45q9H39is5udWlg"
      )
    )
  );

  return element;
}

document.body.appendChild(component());

// WITH NO CONFIG, -rw-r--r--  1 jackdwyer  primarygroup   187K Apr 18 17:38 dist/main.js
// Run `ls -lh dist/main.js` to get the above
