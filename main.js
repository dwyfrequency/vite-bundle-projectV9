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

// WITH NO CONFIG, dist/assets/index.b3752774.js      249.88 KiB
// Same size as "firebase": "^9.6.11" interesting
// Run `ls -lh dist/main.js` to get the above
