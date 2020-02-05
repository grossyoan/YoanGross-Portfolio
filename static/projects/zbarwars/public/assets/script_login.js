console.log("WE GOOD BROTHER")
const loginImage = document.querySelector('.loginImage')
const signupButton = document.querySelector('.signupButton')
const loginButton = document.querySelector('.loginButton')
const welcomeText = document.querySelector('.welcomeText')
const background = document.querySelector('.map')
const login = document.querySelector('.login')
const loginAction = document.querySelector('.loginAction')
const signupAction = document.querySelector('.signupAction')
const history = document.querySelector('.history')
const leaderboard = document.querySelector('.leaderboard')
const friendList = document.querySelector('.friendList')
const downBarInfos = document.querySelector('.downBarInfos')
let closeButton = document.querySelectorAll('.closeButton')
let lottieAnimation = document.querySelector('.lottieAnimation')
const rotationDisclaimer = document.querySelector('.rotationDisclaimer')


loginImage.addEventListener('click', () =>
{
  let visible = document.querySelectorAll('.visible')
  for (var i = 0; i < visible.length; i++) 
  {
    visible[i].classList.remove('visible')
    console.log("yes")
  }
  login.classList.add('visible')
  signupButton.classList.add('visible')
  loginButton.classList.add('visible')
  welcomeText.classList.add('visible')
})



loginButton.addEventListener('click', () =>
{
  let visible = document.querySelectorAll('.visible')
  for (var i = 0; i < visible.length; i++) 
  {
    visible[i].classList.remove('visible')
    console.log("yes")
  }
  login.classList.add('visible')
  loginAction.classList.add('visible')
})




signupButton.addEventListener('click', () =>
{
  let visible = document.querySelectorAll('.visible')
  for (var i = 0; i < visible.length; i++) 
  {
      visible[i].classList.remove('visible')
      console.log("yes")
  }
  login.classList.add('visible')
  signupAction.classList.add('visible')
})



for (var j = 0; j < closeButton.length; j++) 
{
  closeButton[j].addEventListener('click', () =>
  {
    let visible = document.querySelectorAll('.visible')
    for (var i = 0; i < visible.length; i++) 
    {
      visible[i].classList.remove('visible')
      console.log("yes")
    }
  })
}

if ('ontouchstart' in window === false){
  rotationDisclaimer.style.display="flex"
  rotationDisclaimer.style.opacity="1"
  rotationDisclaimer.innerText="Z'Bar Wars was thought as a mobile experience. Restart on a mobile or emulate it with your Dev Tool! 🍺"
}

if(window.orientation === 90 || window.orientation === -90){
  rotationDisclaimer.style.display="flex"
  rotationDisclaimer.style.opacity="1"
  rotationDisclaimer.innerText="Oulah, ça tourne ! Repassez en Portrait, la vue est plus belle ;)"
}

window.addEventListener('orientationchange', function() {
    if(window.innerWidth < window.innerHeight){
      rotationDisclaimer.style.display="flex"
      rotationDisclaimer.style.opacity="1"
      rotationDisclaimer.innerText="Oulah, ça tourne ! Repassez en Portrait, la vue est plus belle ;)"

    }
    else
    {
      rotationDisclaimer.style.display="none"
      rotationDisclaimer.style.opacity="0"
    }
  });
