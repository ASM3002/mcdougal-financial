
const firebaseConfig = {
  apiKey: "AIzaSyCmjbSD_pnz61aBgjuCUgzjqMLOeL-Xr78",
  authDomain: "mcdougal-financial-web.firebaseapp.com",
  databaseURL: "https://mcdougal-financial-web-default-rtdb.firebaseio.com",
  projectId: "mcdougal-financial-web",
  storageBucket: "mcdougal-financial-web.appspot.com",
  messagingSenderId: "857586597343",
  appId: "1:857586597343:web:da23b0169540836b4a986a",
  measurementId: "G-7YSHXJZ7BR"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Create Reference for Database
const database = firebase.database()

const ref = database.ref('messages')

//Get Contact Form Data from HTML
const form = document.getElementById('contactForm');
const alert = document.querySelector('.contact-form-alert');

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal('name');
  var email = getElementVal('email');
  var phone = getElementVal('phone');
  var message = getElementVal('message');

  ref.push({
    name:name,
    email:email,
    phone:phone,
    message:message
  })

  alert.style.display="block";

  setTimeout(() =>{
    alert.style.display="none";
  }, 2000)
  form.reset();
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}