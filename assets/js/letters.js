
$(document).ready(function () {

anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



  // adding contact form to my database: 

   // test database created in class 
  var firebaseConfig = {
    apiKey: "AIzaSyC4N5iN40dKR8LNLwBw63QawtIxptSQQec",
    authDomain: "lisa-test-oct24.firebaseapp.com",
    databaseURL: "https://lisa-test-oct24.firebaseio.com",
    projectId: "lisa-test-oct24",
    storageBucket: "lisa-test-oct24.appspot.com",
    messagingSenderId: "88210040314",
    appId: "1:88210040314:web:0f83a6c9e1f5f9032a3043",
    measurementId: "G-3WC6LSLK5T"
  };


 

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  

  // button for adding train schedule
  $('#add-btn').on('click', function () {

    event.preventDefault();

    // Grab user input 

    let tmpName = $('#name-input').val().trim();
    let tmpemail = $('#email-input').val().trim();
    let tmpsubject = $('#subject').val().trim();
    let tmpmessage = $('#message').val().trim();

    // no fields in input form should be blank
    
   // else {

      // create temporary object for holding train data
      let tempContact = {
        Name: tmpName,
        email: tmpemail,
        subject: tmpsubject,
        message: tmpmessage,

      };  // end of newTrain input



      database.ref().push(tempContact)

      // clear all of the text boxes 
      $("#name").val("");
      $("#email").val("");
      $("#subject").val("");
      $("#message").val("");
   // }

  }); // end of submit form 


})