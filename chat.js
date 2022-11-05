var firebaseConfig = {
    apiKey: "AIzaSyD-tELd7yd7GGuViF2dc0_h-wEljJbV5m4",
    authDomain: "social-website-188bb.firebaseapp.com",
    databaseURL: "https://social-website-188bb-default-rtdb.firebaseio.com",
    projectId: "social-website-188bb",
    storageBucket: "social-website-188bb.appspot.com",
    messagingSenderId: "595229731257",
    appId: "1:595229731257:web:f6d7247564367f95ebae68",
};

   firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

