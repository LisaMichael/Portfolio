$(document).ready(function () {

// adding contact form to my database: 
  


  // test database created in class 
//   let firebaseConfig = {
//     apiKey: "AIzaSyC4N5iN40dKR8LNLwBw63QawtIxptSQQec",
//     authDomain: "lisa-test-oct24.firebaseapp.com",
//     databaseURL: "https://lisa-test-oct24.firebaseio.com",
//     projectId: "lisa-test-oct24",
//     storageBucket: "lisa-test-oct24.appspot.com",
//     messagingSenderId: "88210040314",
//     appId: "1:88210040314:web:0f83a6c9e1f5f9032a3043",
//     measurementId: "G-3WC6LSLK5T"
//   };


  // firebase.initializeApp(firebaseConfig);
  // let database = firebase.database();

  // var firebaseConfig = {
  //   apiKey: "AIzaSyDGwT6UnIscWMnVqa54JFT0Z3oso6JJsbI",
  //   authDomain: "traintime-ffb49.firebaseapp.com",
  //   databaseURL: "https://traintime-ffb49.firebaseio.com",
  //   projectId: "traintime-ffb49",
  //   storageBucket: "traintime-ffb49.appspot.com",
  //   messagingSenderId: "96272866734",
  //   appId: "1:96272866734:web:fc99e51f86ff8da6a6bc3f",
  //   measurementId: "G-C2YD3HTPKB"
  // };

//   firebase.initializeApp(firebaseConfig);
//   var database = firebase.database();

var firebaseConfig = {
    apiKey: "AIzaSyDGwT6UnIscWMnVqa54JFT0Z3oso6JJsbI",
    authDomain: "traintime-ffb49.firebaseapp.com",
    databaseURL: "https://traintime-ffb49.firebaseio.com",
    projectId: "traintime-ffb49",
    storageBucket: "traintime-ffb49.appspot.com",
    messagingSenderId: "96272866734",
    appId: "1:96272866734:web:fc99e51f86ff8da6a6bc3f",
    measurementId: "G-C2YD3HTPKB"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  // button for adding train schedule
  $('#add-btn').on('click', function (event) {

    event.preventDefault();

    // Grab user input 

    let tmpName = $("#name-input").val().trim();
    let tmpemail = $("#email-input").val().trim();
    let tmpsubject = $("#subject-input").val().trim();
    let tmpmessage = $("#message-input").val().trim();

    // no fields in input form should be blank


    // create temporary object for holding train data
    let tempContact = {
      name: tmpName,
      email: tmpemail,
      subject: tmpsubject,
      message: tmpmessage,

    };  // end of newTrain input



    database.ref().push(tempContact)

    // clear all of the text boxes 
    $("#name-input").val("");
    $("#email-input").val("");
    $("#subject-input").val("");
    $("#message-input").val("");
    // }

  }); // end of submit form 

  database.ref().on("child_added", function (childSnapshot) {
    let tmpName = childSnapshot.val().name;
    let tmpemail = childSnapshot.val().email;
    let tmpsubject = childSnapshot.val().subject;
    let tmpmessage = childSnapshot.val().message;
  });

})