const userform = document.querySelector('#userform');
const showInfo = document.querySelector('#showInfo');
const errName = document.querySelector('#errName');
const errAge = document.querySelector('#errAge');
const errGender = document.querySelector('#errGender');
const errMobile = document.querySelector('#errMobile');
const errEmail = document.querySelector('#errEmail');
const errPassword = document.querySelector('#errPassword');


userform.addEventListener('submit', e => {
    e.preventDefault();
    let crrName, crrAge, crrGender, crrMobile, crrEmail, crrPassword;
    showInfo.textContent = '';
    const formData = new FormData(userform);
    const uname = formData.get('uname');
    const uage = formData.get('uage');
    const ugender = formData.get('ugender');
    const umobile = formData.get('umobile');
    const uemail = formData.get('uemail');
    const upassword = formData.get('upassword');

    if (!uname) {
        errName.textContent = 'Name is required';
    }else{
        errName.textContent = '';
        crrName = true;
    }

    if (!uage) {
        errAge.textContent = 'Age is required';
    } else if (isNaN(uage) || parseInt(uage) < 9) {
        errAge.textContent = 'Age must be above 9';
    } else {
        errAge.textContent = '';
        crrAge = true;
    }

    if (!ugender) {
        errGender.textContent = 'Please select your gender';
    }else if(ugender != "Male" && ugender != "Female" && ugender != "Others"){
        errGender.textContent = 'Please select valid gender';
    }else{
        errGender.textContent = '';
        crrGender = true;
    }

    if (!umobile) {
        errMobile.textContent = 'Mobile Number is required';
    }else if(/^01[0-9]{9}$/i.test(umobile) == false){
        errMobile.textContent = 'Invalid Mobile number';
    }else{
        errMobile.textContent = '';
        crrMobile = true;
    }

    if (!uemail) {
        errEmail.textContent = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(uemail)) {
        errEmail.textContent = 'Invalid email address';
    } else {
        errEmail.textContent = '';
        crrEmail = true;
    }

    if (!upassword) {
        errPassword.textContent = 'Password is required';
    } else if (upassword.length < 8 || upassword.length > 128) {
        errPassword.textContent = 'Password must be between 8 and 128 characters long';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(upassword)) {
        errPassword.textContent = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    } else {
        errPassword.textContent = '';
        crrPassword = true;
    }

    if (crrName && crrAge && crrGender && crrMobile && crrEmail && crrPassword) {
        showInfo.textContent = `Name: ${uname}\nAge: ${uage}\nGender: ${ugender}\nMobile: ${umobile}\nEmail: ${uemail}\nPassword: ${upassword}`;
        userform.reset();
    }
});