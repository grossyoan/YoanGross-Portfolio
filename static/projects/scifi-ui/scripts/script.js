const parallax = document.querySelector('html')

const UI = document.querySelector('.movingUI')

const UIAnim = document.querySelector('.UIAnimSettings')

const backgroundMove = document.querySelector('.movingBackground')

const loadingLandingText = document.querySelector('.entranceLoadingText')

const buttonSwitchBorder = document.querySelector('.buttonSwitch1 button')

const buttonSwitchBorder2 = document.querySelector('.buttonSwitch2 button')

const buttonSwitch1 = document.querySelector('.buttonSwitch1')

const buttonColor1 = document.querySelector('.buttonColor1')

const buttonSwitch2 = document.querySelector('.buttonSwitch2')

const buttonColor2 = document.querySelector('.buttonColor2')

const dateText = document.querySelector('.date')

const timeText = document.querySelector('.time')

const loadingScreen = document.querySelector('.loadingScreen')

const loadingScreenText = document.querySelector('.loadingScreen div')

const loadingScreenBar1 = document.querySelector('.bar1')

const loadingScreenBar2 = document.querySelector('.bar2')

const loadingScreenBar3 = document.querySelector('.bar3')

const loadingScreenBar4 = document.querySelector('.bar4')

const mapAppear = document.querySelector('.typeWriter')

const TypewriterApearingText = document.querySelector('.appearingText')

const graphicAppear = document.querySelector('.graphic')

const batteriesAppear = document.querySelector('.batteries')

const map1Appear = document.querySelector('.map1')

const buttonPanelAppear = document.querySelector('.buttonPanel')

const userManual = document.querySelector('.userManual')

const credits = document.querySelector('.credits')

const settingsMap = document.querySelector('.settings')

const settingsContentLeft = document.querySelector('.settingsContentLeft')

const settingsContentRight = document.querySelector('.settingsContentRight')

const loadingCurveFade = document.querySelector('.curveBoxLoading')

const loadingCurveScreen = document.querySelector('.curveBoxLoadingBar')

const curvesMap = document.querySelector('.curves')

const lineGraph1 = document.querySelector('.stroke1')

const lineGraph2 = document.querySelector('.stroke2')

const lineGraph3 = document.querySelector('.stroke3')

const mapClick = document.querySelector('.map1 button')

const mapBlock = document.querySelector('.map1')

const backgroundBlockAnim = document.querySelector('.backgroundAnimSettings')

const alreadyExplodedAlert = document.querySelector('.explodedEarthAlert')

const battery1ClickPlus = document.querySelector('.batterySelectorBlock1 .batteryPlus')

const battery1ClickMinus = document.querySelector('.batterySelectorBlock1 .batteryMinus')

const battery1ColorHeight = document.querySelector('.batteryShape1 .batteryInsideColor')

const battery2ClickPlus = document.querySelector('.batterySelectorBlock2 .batteryPlus')

const battery2ClickMinus = document.querySelector('.batterySelectorBlock2 .batteryMinus')

const battery2ColorHeight = document.querySelector('.batteryShape5 .batteryInsideColor')

let backgroundAnimState=0

let date = new Date()

let dd = date.getDate()

let mm = date.getMonth()+1

let yyyy = date.getFullYear()

let BS1State = 0

let BS2State = 0

let windowWidth = window.innerWidth 

let windowHeight = window.innerHeight 

let parallaxUI = 1

let parallaxBackground = 1





const hideLoadingPage = () =>

{

    loadingScreenText.style.display='none'

    loadingScreenBar1.classList.add('hideBar')

    loadingScreenBar2.classList.add('hideBar')

    loadingScreenBar3.classList.add('hideBar')

    loadingScreenBar4.classList.add('hideBar')

    const timerID0 = setInterval(function() 

    {

        mapAppear.classList.add('show')

        graphicAppear.classList.add('show')

        batteriesAppear.classList.add('show')

        map1Appear.classList.add('show')

        buttonPanelAppear.classList.add('show')

        userManual.classList.add('show')

        settingsMap.classList.add('show')

        settingsMap.classList.add('show')

        settingsContentLeft.classList.add('show')

        settingsContentRight.classList.add('show')

        credits.classList.add('show')

        curvesMap.classList.add('show')

        TypewriterApearingText.style.animationPlayState='running'

    }, 150);

    const timerID = setInterval(function() 

    {

        loadingScreen.classList.add('hideLoadingScreen')

    }, 1000);

    const timerID2 = setInterval(function() 

    {

        loadingCurveScreen.style.animationPlayState='running'

    }, 1500);

    const timerID3 = setInterval(function() 

    {

        loadingCurveFade.style.animationPlayState='running'

    }, 2400);

    const timerID4 = setInterval(function() 

    {

        loadingCurveFade.style.display='none'

    }, 2900);

    const timerID5 = setInterval(function() 

    {

        loadingCurveFade.style.display='none'

    }, 2900);

    lineGraph1.style.animationPlayState='running'

    lineGraph2.style.animationPlayState='running'

    lineGraph3.style.animationPlayState='running'



}

battery1ClickPlus.addEventListener('click',() =>

{

    battery1ColorHeight.style.height="100%"

    battery1ColorHeight.style.background="green"

})

battery1ClickMinus.addEventListener('click',() =>

{

    battery1ColorHeight.style.height="0%"

    battery1ColorHeight.style.background="red"

})

battery2ClickPlus.addEventListener('click',() =>

{

    battery2ColorHeight.style.height="100%"

    battery2ColorHeight.style.background="green"

})

battery2ClickMinus.addEventListener('click',() =>

{

    battery2ColorHeight.style.height="0%"

    battery2ColorHeight.style.background="red"

})

mapClick.addEventListener('click',() =>

{

    if(backgroundAnimState==0)

    {

        UI.classList.add('UIAnimSettings')

        backgroundMove.classList.add('backgroundAnimSettings')

        UIAnim.style.animationPlayState="running"

        backgroundBlockAnim.style.animationPlayState="running"

        const timerID0 = setInterval(function() 

        {

            UI.classList.remove('UIAnimSettings')

            backgroundMove.classList.remove('backgroundAnimSettings')

            backgroundMove.style.filter="hue-rotate(90deg)"

        }, 500);

        backgroundAnimState=1

    }

    else if (backgroundAnimState==1)

    {

        alreadyExplodedAlert.classList.add('explodedEarthAlertOn')

        backgroundAnimState=2

        const timerID0 = setInterval(function() 

        {

            alreadyExplodedAlert.classList.remove('explodedEarthAlertOn')

            backgroundAnimState=1

        }, 3000)

    }

    else{}

})

window.onload = () =>

{

    if(dd<10) 

    {

        dd = '0'+dd

    } 

    if(mm<10) 

    {

        mm = '0'+mm

    } 

    dateText.innerHTML = dd + '/' + mm + '/' + yyyy

    

    const timerID = setInterval(function() 

    {

        hideLoadingPage()

    }, 2500);

    UI.classList.remove('UIAnimSettings')

    backgroundMove.classList.remove('backgroundAnimSettings')

} 





const timerID = setInterval(function() 

{

    minutes = date.getMinutes()

    hh = date.getHours()

    if(minutes<10) 

    {

        minutes = '0'+minutes

    } 

    if(hh<10) 

    {

        hh = '0'+hh

    } 

    timeText.innerHTML= hh + 'h' + minutes

}, 1000);



const resizeCallback = () =>

{

    windowWidth = window.innerWidth

    windowHeight = window.innerHeight

}



window.addEventListener('resize', resizeCallback)

resizeCallback()



parallax.addEventListener('mousemove', (_event) => 

{

    const X = (windowWidth / 2 - _event.clientX) / 500

    const Y = (windowHeight / 2 - _event.clientY) / 500

    if(parallaxBackground==1)

    {

        backgroundMove.style.transform = `translate(${-X}%, ${-Y}%)`

    }

    if(parallaxUI==1)

    {

        UI.style.transform = `translate(${X}%, ${Y}%)`

    }

})





buttonSwitch1.addEventListener('click', () => 

{

    if (BS1State==0)

    {

        parallaxUI=0

        buttonColor1.classList.remove('buttonColor1')

        buttonSwitchBorder.classList.remove('buttonBorderChange1')

        buttonColor1.offsetWidth;

        buttonColor1.classList.add('buttonColor1')

        buttonSwitchBorder.classList.add('buttonBorderChange1')

        buttonSwitchBorder.animationDirection = `normal`

        buttonColor1.style.animationDirection = `normal`

        buttonColor1.style.animationPlayState = `running`

        buttonSwitchBorder.style.animationPlayState = `running`

        BS1State=1

    }

    else

    {

        parallaxUI=1

        buttonColor1.classList.remove('buttonColor1')

        buttonSwitchBorder.classList.remove('buttonBorderChange1')

        buttonColor1.offsetWidth;

        buttonColor1.classList.add('buttonColor1')

        buttonSwitchBorder.classList.add('buttonBorderChange1')

        buttonColor1.style.animationDirection = `reverse`

        buttonSwitchBorder.style.animationDirection = `reverse`

        buttonColor1.style.animationPlayState = `running`

        buttonSwitchBorder.style.animationPlayState = `running`

        BS1State=0

    }

})

buttonSwitch2.addEventListener('click', () => 

{

    if (BS2State==0)

    {

        parallaxBackground=0

        buttonColor2.classList.remove('buttonColor2')

        buttonSwitchBorder2.classList.remove('buttonBorderChange2')

        buttonColor2.offsetWidth

        buttonColor2.classList.add('buttonColor2')

        buttonSwitchBorder2.classList.add('buttonBorderChange2')

        buttonSwitchBorder2.animationDirection = `normal`

        buttonColor2.style.animationDirection = `normal`

        buttonColor2.style.animationPlayState = `running`

        buttonSwitchBorder2.style.animationPlayState = `running`

        BS2State=1

    }

    else

    {

        parallaxBackground=1

        buttonColor2.classList.remove('buttonColor2')

        buttonSwitchBorder2.classList.remove('buttonBorderChange2')

        buttonColor2.offsetWidth

        buttonColor2.classList.add('buttonColor2')

        buttonSwitchBorder2.classList.add('buttonBorderChange2')

        buttonSwitchBorder2.style.animationDirection = `reverse`

        buttonColor2.style.animationDirection = `reverse`

        buttonColor2.style.animationPlayState = `running`

        buttonSwitchBorder2.style.animationPlayState = `running`

        BS2State=0

    }

})





