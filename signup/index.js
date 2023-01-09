function form_validation() {
  // for name validation
  var aname = document.getElementById("fname").value;

  if (aname == "") {
    alert("please fill the name");
    document.getElementById("fname").focus();
    return false;
  } else if (aname.length < 3 || aname.length > 15) {
    alert(" the name charecter must be between 3 and 15");
    document.getElementById("fname").focus();
    return false;
  }

  // for last name validation
  var alname = document.getElementById("lname").value;

  if (alname == "") {
    alert("please fill the last name");
    document.getElementById("lname").focus();
    return false;
  } else if (alname.length < 3 || alname.length > 15) {
    alert("the last name charecter must be between 3 and 8");
    document.getElementById("lname").focus();
    return false;
  }

  // for mobile validation
  var amobile = document.getElementById("mobile").value;

  if (amobile == "") {
    alert("please fill the mobile number");
    document.getElementById("mobile").focus();
    return false;
  } else if (isNaN(amobile)) {
    alert("mobile number must be only digit");
    document.getElementById("mobile").focus();
    return false;
  } else if (amobile.length < 10 || amobile.length > 10) {
    alert("mobile number must be 10 digit");
    document.getElementById("mobile").focus();
    return false;
  }

  // for email validation
  //    vairable for email
  var eemail = document.getElementById("email").value;
  var at = eemail.indexOf("@");
  var dot = eemail.lastIndexOf(".");

  if (eemail == "") {
    alert("please fill the email id");
    document.getElementById("email").focus();
    return false;
  } else if (at < 1 || dot >= eemail.length) {
    alert("invalid @ position or dot position");
    document.getElementById("email").focus();
    return false;
  } else if (dot - at < 6 || dot - at > 15) {
    alert("charecter must be between 6 and 15 in between @ and dot(.)");
    document.getElementById("email").focus();
    return false;
  }

  // for password matching
  var pass1 = document.getElementById("password").value;
  var pass2 = document.getElementById("cpassword").value;

  if (pass1 == "") {
    alert("please fill the password");
    document.getElementById("password").focus();
    return false;
  } else if (pass2 == "") {
    alert("please fill the conform password");
    document.getElementById("cpassword").focus();
    return false;
  } else if (pass1 != pass2) {
    alert("conform password must be same");
    document.getElementById("cpassword").focus();
    return false;
  }

  // for dob validation
  var ado = document.getElementById("dob").value;

  if (ado == "") {
    alert("please fill date of birth");
    document.getElementById("dob").focus();
    return false;
  }
}
