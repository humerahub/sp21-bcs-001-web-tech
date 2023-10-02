$(document).ready(function () {
  jQuery.validator.addMethod(
    "passwordMatch",
    function (value, element) {
      return value === $("#password").val();
    },
    "Passwords do not match"
  );

  $("form").validate({
    rules: {
      username: {
        required: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
      "confirm-password": {
        required: true,
        passwordMatch: true,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      username: {
        required: "Please enter your username",
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 6 characters long",
      },
      "confirm-password": {
        required: "Please confirm your password",
      },
      email: {
        required: "Please enter a valid email address",
        email: "Please enter a valid email address",
      },
    },
    submitHandler: function (form) {
      alert("Form submitted!");
    },
  });
});
