(funciton()){

if(!('querySelector' in document && 'addEventListener' in document)) {
  concole.log('Old brouser');
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
  concole.log('focus');
});
tel_input.addEventListener('blur', funciton(){
  concole.log('not focus');
});
tel_input.addEventListener('keyup', funciton(){
  concole.log('value', this.value);
  var clean_number = this.value.replace(/\D/g,'');
  var sanitized_number = clean_number.replace(/^1/,'');
  if (sanitized_number.length === 10) {
    console.log('awesome sause b')
    phone_submit.removeAttribute('disabled')
  }

});

}());
