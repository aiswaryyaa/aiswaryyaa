var firebaseConfig = {
    apiKey: "AIzaSyDZsNlqO-UGRM_PZ4M8BtVB0pxGp_FjIaA",
    authDomain: "contact-form-15355.firebaseapp.com",
    projectId: "contact-form-15355",
    storageBucket: "contact-form-15355.appspot.com",
    messagingSenderId: "753159902888",
    appId: "1:753159902888:web:00c4d8b23b531ae5a9549d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');




// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name,email,message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contact-form').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,email,message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}