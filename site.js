(funciton(){
// Browser sanity check
  if(!('querySelector' in document && 'addEventListener' in document)) {
    concole.log('Old browser');
    return;
  }

  var phone_submit = document.querySelector('#signup');

  document.addEventListener('DOMContentLoaded', function(){
    //  console.log('Dom loaed');
    //  var heading_text = document.querySelector('#content h1').innerText();
    //  console.log('heading test is:', heading_text);
    phone_submit.setAttribute('disabled','disabled');
});

  var tel_input = document.querySelector('#telephone');
  tel_input.addEventListener('focus', funciton(){
    concole.log('Focusing on telephone input');
});
  tel_input.addEventListener('blur', funciton(){
    concole.log('Not focusing on telephone input');
});
  tel_input.addEventListener('keyup', funciton(){
    // Remove non digit characters
    var clean_number = this.value.replace(/\D/g,'');
    // Remove any 1's at the beginning
    var sanitized_number = clean_number.replace(/^1/,'');
    // Check to see if number is at least 10 digits long
    if (sanitized_number.length === 10) {
      console.log('Number is valid.');
      phone_submit.removeAttribute('disabled');
    }

  });

}());
