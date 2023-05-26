// imports from firebase

import { initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database2-17bf3-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsQuotes = ref(database, "endorsements")

const publishBtn = document.querySelector(".publishBtn")
const inputBox = document.querySelector(".inputBox")

// This allows user to add an endorsement 
publishBtn.addEventListener("click", () => {
    let inputValue = inputBox.value 
    appendToEndorsements(inputValue)
    clearInput()
})

// This allows user to just press enter
inputBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      let inputValue = inputBox.value;
      appendToEndorsements(inputValue);
      clearInput();
    }
  });
  

// Function to Clear input after submit
function clearInput() {
    inputBox.value = ""
}

function appendToEndorsements(text) {
    const endorsementList = document.querySelector(".endorsementList");
    const newEl = document.createElement("li");
    newEl.textContent = text;
    endorsementList.appendChild(newEl);
  }
  