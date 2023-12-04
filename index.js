$(document).ready(function () {
  $('#btnSubmit').click(function (e) {
    e.preventDefault();
    validate();
  });
});

function dateValidate() {
  let age = $('#age').val();

  if (age === '') {
    $('#spanAge').text('age is required.');
  } else if (isNaN(age)) {
    $('#spanAge').text('Age should be a number');
  } else if (age <= 0) {
    $('#spanAge').text('Age should not be less than or equal to zero.');
  } else {
    $('#spanAge').text('');
  }
}

function validateEmpID() {
  let empID = $('#empid').val();
  let numbers = /\d/;

  if (empID === '') {
    $('#spanEmpid').text('empid is required.');
  } else if (!empID.match(numbers)) {
    $('#spanEmpid').text('EmployeeID cannot be a character');
  } else if (empID.length < 5) {
    $('#spanEmpid').text('EmployeeID should be at least 5 characters long.');
  } else {
    $('#spanEmpid').text('');
  }
}

function validateUserName() {
  let username = $('#empname').val();
  let char = /^[a-zA-Z, ' ']+$/;

  if (username === '') {
    $('#spanEmpname').text('empname is required.');
  } else if (!username.match(char)) {
    $('#spanEmpname').text('Please enter only characters');
  } else if (username.length < 6 || username.length > 20) {
    $('#spanEmpname').text('Name should be between 6 and 20 characters long');
  } else {
    $('#spanEmpname').text('');
  }
}

function validate() {
  // Designation validation
  let designation = $('#designation').val();
  let char = /^[a-zA-Z, ' ']+$/;

  if (designation === '') {
    $('#spanDesignation').text('designation is required.');
  } else if (!designation.match(char)) {
    $('#spanDesignation').text('Designation should be in characters');
  } else {
    $('#spanDesignation').text('');
  }

  // Salary validation
  let salary = $('#salary').val();
  let num = /[0-9]+/;

  if (salary === '') {
    $('#spanSalary').text('salary is required.');
  } else if (!salary.match(num)) {
    $('#spanSalary').text('Salary should be in number');
  } else {
    $('#spanSalary').text('');
  }

  // drop down validation
  let cities = $('#location').val();
  if (!cities) {
    $('#spanLocation').text('location is required.');
  } else {
    $('#spanLocation').text('');
  }

  // email validation
  let email = $('#email').val();
  let test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email === '') {
    $('#spanEmail').text('email is required.');
  } else if (!email.match(test)) {
    $('#spanEmail').text('EmailID should be in the proper format.');
  } else {
    $('#spanEmail').text('');
  }

  // Joini date validation
  let joining = $('#joiningDate').val();
  if (joining === '') {
    $('#spanJoiningdate').text('joiningDate is required.');
  } else {
    $('#spanJoiningdate').text('');
  }

  // Conatct number validation
  let phone = $('#contact').val();
  let check = /^\d{10}$/;

  if (phone === '') {
    $('#spanContact').text('contact is required.');
  } else if (!phone.match(check)) {
    $('#spanContact').text(
      'Contact number should be number and 10 digits long'
    );
  } else {
    $('#spanContact').text('');
  }

  // gender validation
  let selectedGender = $("input[name='gender']:checked").val();

  if (!selectedGender) {
    $('#spanGender').text('gender is required.');
  } else {
    $('#spanGender').text('');
  }

  validateEmpID();
  validateUserName();
  dateValidate();

  if (
    $('#spanEmpid').text() === '' &&
    $('#spanEmpname').text() === '' &&
    $('#spanAge').text() === '' &&
    $('#spanDesignation').text() === '' &&
    $('#spanSalary').text() === '' &&
    $('#spanLocation').text() === '' &&
    $('spanEmail').text() === '' &&
    $('#spanJoiningdate').text() === '' &&
    $('#spanContact').text() === ''
  ) {
    $(
      '#empid, #empname, #age, #designation, #salary, #location, #email, #joiningDate, #contact'
    ).val('');
    genderclear();
  }
}

function genderclear() {
  if ($('#spanGender').text() === '') {
    $("input[name='gender']").prop('checked', false);
  }
}
