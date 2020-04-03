
var a = { 
    apiKey: "AIzaSyA8wTDZ5lmdrGLd03-XiSndq5-2DZvjMDw",
authDomain: "portfolio-22014.firebaseapp.com",
databaseURL: "https://portfolio-22014.firebaseio.com",
projectId: "portfolio-22014",
storageBucket: "portfolio-22014.appspot.com",
messagingSenderId: "618375062033",
appId: "1:618375062033:web:a8d0b45160fc89402b87b0",
measurementId: "G-HM7SKDZM6S"
};

firebase.initializeApp(a);
var db = firebase.firestore();
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var message = document.querySelector("#message");
var submitButton = document.querySelector("#submitButton");
var form = document.querySelector("#form");

submitButton.addEventListener("click",function() {
    
    const savedName = username.value;
    const savedEmail = email.value;
    const savedMessage = message.value;
    
    username.value = null;
    email.value = null;
    message.value = null;

    db.collection('users').doc(savedEmail).set({
        name : savedName,
        message : savedMessage,

    }).then(function(){
        console.log("status saved!");    
    }).catch(function(error){
        console.log("Got an error",error);
    });
})
