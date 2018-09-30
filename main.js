  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC9vKgC-2nhEmX94VfWrE4uJ54AbHVJcO8",
    authDomain: "grouper-1b66a.firebaseapp.com",
    databaseURL: "https://grouper-1b66a.firebaseio.com",
    projectId: "grouper-1b66a",
    storageBucket: "grouper-1b66a.appspot.com",
    messagingSenderId: "525729804807"
  };
  firebase.initializeApp(config);

    function SignUp() {
      var email = document.getElementById('email1').value;
      var password = document.getElementById('password1').value;
      if (email.length < 1) {
        alert('Please enter a valid email address.');
        return;
      }
      if (password.length < 1) {
        alert('Please enter a valid password.');
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    }
function toggleSignIn() {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut();
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
      }
    }
