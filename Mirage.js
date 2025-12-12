// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPZzGUK_G1wtR-f1tcpLFsPofi3fxSb2w",
    authDomain: "mirage-a6478.firebaseapp.com",
    databaseURL: "https://mirage-a6478-default-rtdb.firebaseio.com",
    projectId: "mirage-a6478",
    storageBucket: "mirage-a6478.firebasestorage.app",
    messagingSenderId: "786097322316",
    appId: "1:786097322316:web:2eab7daa233f5a27b8f7e9"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//FIREBASE LINKS on top

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "Mirage_room.html";
}