
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
  
  const ref = database.ref('mcdougal-financial/personal-info')
  
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
      request_deletion:request_deletion,
      date: Date()  
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