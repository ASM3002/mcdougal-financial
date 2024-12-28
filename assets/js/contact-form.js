
const firebaseConfig = {
  apiKey: "AIzaSyAcSXwoios4BswB123e_rkeipl4LibpQQ4",
  authDomain: "am-web-admin.firebaseapp.com",
  databaseURL: "https://am-web-admin-default-rtdb.firebaseio.com",
  projectId: "am-web-admin",
  storageBucket: "am-web-admin.firebasestorage.app",
  messagingSenderId: "920858578134",
  appId: "1:920858578134:web:3f8169fd49dbd943468d77"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Create Reference for Database
const database = firebase.database()

const ref = database.ref('mcdougal-financial/contact')

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
    message:message,
    date:Date()
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