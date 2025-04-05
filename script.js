function clicksubmitbutton(event){
    const username=document.getELementById("username").ariaValueMax;
    const welcomeMessage=document.getELementById('welcome-message');
    welcomeMessage.textContent+'welcome,'+username +'!';
    welcomeMessage.style.display='block';
}