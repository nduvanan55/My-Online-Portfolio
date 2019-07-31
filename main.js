// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDowFjLhl1LfTX4AUqn88-Bru8lDvA9DoE",
    authDomain: "portfolio-b2da2.firebaseapp.com",
    databaseURL: "https://portfolio-b2da2.firebaseio.com",
    projectId: "portfolio-b2da2",
    storageBucket: "portfolio-b2da2.appspot.com",
    messagingSenderId: "489570578958",
    appId: "1:489570578958:web:17c2c13db172e4a1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
console.log(firebase);
var messagesRef = firebase.database().ref('messages');
//listen for form submit
document.getElementById('form').addEventListener('submit',submitForm);
// submit form
function submitForm(e){
  e.preventDefault();
  //get values
  var name=getInputVal('name');
  var email=getInputVal('email');
  var message=getInputVal('message');
//save message
saveMessage(name,email,message);

}

//function to get form values
function getInputVal(id){
return document.getElementById(id).value;

}

//save message to firebasejs
function saveMessage(name,email,message){
var newMessageRef = messagesRef.push();
newMessageRef.set({name:name, email:email, message:message});

}
