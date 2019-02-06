


if(!('querySelector' in document && 'addEventListener' in document)) {
  concole.log('Old brouser');
  return;
}

document.addEventListener('DOMContentLoaded', function(){
  console.log('Dom loaed');
  var heading_text = document.querySelector('#content h1').innerText();
  console.log('heading test is:', heading_text);
})
