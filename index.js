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
    // testing input
    let inputValue = inputBox.value 
    inputBox.value = ""
    console.log(inputValue)
})
