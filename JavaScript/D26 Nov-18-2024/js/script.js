const studentForm = document.querySelector('#studentForm');
const showStudent = document.querySelector('#showStudent');
const errName = document.querySelector('#errName');
const errAge = document.querySelector('#errAge');
const errGender = document.querySelector('#errGender');
const errMobile = document.querySelector('#errMobile');

studentForm.addEventListener('submit', e => {
    e.preventDefault();
    let crrName, crrAge, crrGender, crrMobile;
    showStudent.textContent = '';
    const formData = new FormData(studentForm);
    const sname = formData.get('sname');
    const sage = formData.get('sage');
    const sgender = formData.get('sgender');
    const smobile = formData.get('smobile');

    if (!sname) {
        errName.textContent = 'Name is required';
    }else{
        errName.textContent = '';
        crrName = true;
    }

    if (!sage) {
        errAge.textContent = 'Age is required';
    }else if(isNaN(sage)){
        errAge.textContent = 'Age must be a number';
    }else{
        errAge.textContent = '';
        crrAge = true;
    }

    if (!sgender) {
        errGender.textContent = 'Please select your gender';
    }else if(sgender != "Male" && sgender != "Female"){
        errGender.textContent = 'Please select valid gender';
    }else{
        errGender.textContent = '';
        crrGender = true;
    }

    if (!smobile) {
        errMobile.textContent = 'Mobile number is required';
    }else if(/^01[0-9]{9}$/i.test(smobile) == false){
        errMobile.textContent = 'Invalid Mobile number';
    }else{
        errMobile.textContent = '';
        crrMobile = true;
    }

    if(crrName && crrAge && crrGender){
        showStudent.textContent =`Name: ${sname}, Age: ${sage}, Gender: ${sgender}`;
        studentForm.reset();
    }

});
