(function(){
// Browser sanity check
  if(!('querySelector' in document && 'addEventListener' in document)) {
    concole.log('Old browser');
    return;
  }

  var data_submit = document.querySelector('#submit');

  document.addEventListener('DOMContentLoaded', function(){
    //  console.log('Dom loaed');
    //  var heading_text = document.querySelector('#content h1').innerText();
    //  console.log('heading test is:', heading_text);
    data_submit.setAttribute('disabled','disabled');
});

  // Name
  var name_input = document.querySelector('#name');
  name_input.addEventListener('focus', function(){
    console.log('Focusing on name input');
});

  name_input.addEventListener('blur', function(){
    console.log('Not focusing on name input');
});

  // Phone Number
  var tel_input = document.querySelector('#telephone');
  tel_input.addEventListener('focus', function(){
    console.log('Focusing on telephone input');
});

  tel_input.addEventListener('blur', function(){
    console.log('Not focusing on telephone input');
});
  tel_input.addEventListener('keyup', function(){
    // Remove non digit characters
    var clean_number = this.value.replace(/\D/g,'');
    // Remove any 1's at the beginning
    var sanitized_number = clean_number.replace(/^1/,'');
    // Check to see if number is at least 10 digits long, submit data
    if (sanitized_number.length === 10) {
      console.log('Number is valid.');
      data_submit.removeAttribute('disabled');
    }

  });

}());
