// imports from firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://realtime-database2-17bf3-default-rtdb.firebaseio.com/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const endorsementsQuotes = ref(database, "endorsements");

const publishBtn = document.querySelector(".publishBtn");
const inputBox = document.querySelector(".inputBox");
const endorsementList = document.querySelector(".endorsementList");

// This allows user to add an endorsement
publishBtn.addEventListener("click", () => {
  let inputValue = inputBox.value;
  appendToEndorsements(inputValue);
  clearInput();
});

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
  inputBox.value = "";
}

// Function to append endorsement to the list
function appendToEndorsements(text) {
    const endorsementKey = push(endorsementsQuotes).key; // Generate a unique key for the endorsement
    const newEl = document.createElement("li");
    newEl.textContent = text;
    endorsementList.appendChild(newEl);
    push(ref(database, `endorsements/${endorsementKey}`), text);
    
    // Remove endorsement on double-click
    newEl.addEventListener("dblclick", () => {
      remove(ref(database, `endorsements/${endorsementKey}`));
      endorsementList.removeChild(newEl);
    });
  
    // Change background color on hover
    newEl.addEventListener("mouseenter", () => {
      newEl.style.backgroundColor = "#C82332";
    });
  
    newEl.addEventListener("mouseleave", () => {
      newEl.style.backgroundColor = "";
    });
}
