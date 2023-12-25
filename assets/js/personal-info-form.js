
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
  
  const ref = database.ref('personal-info-requests')
  
  //Get Contact Form Data from HTML
  const personal_form = document.getElementById('personal-info-form');
  const alert = document.querySelector('.personal-info-form-alert');
  
  personal_form.addEventListener('submit', submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal('name');
    var email = getElementVal('email');
    var phone = getElementVal('phone');
    var message = getElementVal('message');
    var prohibit_sale = getCheckVal('prohibit-sale');
    var request_copy = getCheckVal('request-copy');
    var request_deletion = getCheckVal('request-deletion');
  
    ref.push({
      name:name,
      email:email,
      phone:phone,
      message:message,
      prohibit_sale:prohibit_sale,
      request_copy:request_copy,
      request_deletion:request_deletion  
    })
  
    alert.style.display="block";
  
    setTimeout(() =>{
      alert.style.display="none";
    }, 2000)
    personal_form.reset();
  }
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
  const getCheckVal = (id) => {
    return document.getElementById(id).checked;
  }