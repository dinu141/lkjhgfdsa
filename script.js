function clicksubmitbutton(event){
    const username = document.getElementById("username").ariaValueMax;
    const welcomeMessage = document.getELementById('welcome-message');
    welcomeMessage.textContent ='welcome,'+username +'!';
    welcomeMessage.style.display ='block';
}
