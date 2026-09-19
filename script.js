function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('open');
}
function sendMessage(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const message=document.getElementById('message').value.trim();
  const text=`Hello, my name is ${name}. Mobile: ${phone}. Message: ${message}`;
  window.open('https://wa.me/919999999999?text='+encodeURIComponent(text),'_blank');
}
