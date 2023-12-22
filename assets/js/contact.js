const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    // Preventing page reload on submit
    event.preventDefault(); 

    // Selecting the email value filled by the user
    const email = document.getElementById("email").value;

    // Checking for valid email using a simple regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Wrong email format");
      return;
    }

    // If everything passes, show success message
    alert("Form submitted successfully");
});