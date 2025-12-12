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
  
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

    localStorage.setItem("room_name", room_name);

    window.location = "Mirage_page.html";
}    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    console.log("Room Name - "+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "Mirage_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html"
}
