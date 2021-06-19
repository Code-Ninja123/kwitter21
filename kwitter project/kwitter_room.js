
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBVRYdMR-LUMAgseowadiDgcHCI7L8nNcc",
  authDomain: "kwitter-class-k.firebaseapp.com",
  databaseURL: "https://kwitter-class-k-default-rtdb.firebaseio.com",
  projectId: "kwitter-class-k",
  storageBucket: "kwitter-class-k.appspot.com",
  messagingSenderId: "762395598461",
  appId: "1:762395598461:web:a6daae82210a6aa08e9b14"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose: "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
 console.log("Room names" + Room_names);
 row = "<div class='room_name' id = "+ Room_names + "onclick ='redirectToRoomName(this.id)'># "+ Room_names +"</div><hr>"; 
 document.getElementById("output").innerHTML +=row;
 
  //End code
  });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function log_out(){
localStorage.removeItem("user_name");
localStorage.removeItem("user_name");
window.location = "index.html";
}