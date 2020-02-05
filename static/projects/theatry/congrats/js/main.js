const player = {}
player.$container = document.querySelector('body')
window.addEventListener("touchstart", () => {
    toggleFullScreen()
});

/*
* Toggle Fullscreen
*/

// comes from the Mozilla Developers Network

function toggleFullScreen() 
{
if (!document.mozFullScreen && !document.webkitFullScreen) 
{
    if (player.$container.mozRequestFullScreen) 
    {
        player.$container.mozRequestFullScreen()
    } 
    else 
    {
        player.$container.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
    }
} 
}

toggleFullScreen()