import './css/style.styl'

import './css/reset.styl'

import * as THREE from 'three'

import * as OBJECT from './Core/ThreeElements.js'

import CameraControls from 'camera-controls';

import Timer from 'tiny-timer'

 
let timer = new Timer()


CameraControls.install( { THREE: THREE } );

const ctn_home = document.querySelector('.ctn-home')
const home_btn = document.querySelector('.btn-home')
const inner_text = document.querySelector('.txt-slider-ctn')
const cursor_hold = document.querySelector('.cursor-hold')
const sml_bar = document.querySelector('.sml-bar')
const contentManager = document.querySelectorAll('.content-manager')
const numerotation = document.querySelectorAll('.nb-num')
const close_modal_btn = document.querySelectorAll('.cross-ctn')
const return_home = document.querySelectorAll('.return-home')
const modalsbtn = document.querySelectorAll('.video-modal')
const modalsctn = document.querySelectorAll('.modal-container')
const numerotation_bar = document.querySelectorAll('.num_bar')
numerotation[0].style.color = '#000000'
const createFps = require('fps-indicator')
let fps = createFps()

/**
 * Return home
 */

for (let i = 0; i < return_home.length; i++) {
    return_home[i].addEventListener('click', (_event) =>
    {
        cameraControls.moveTo(x,0,0,true)
        setTimeout(() => {
            ctn_home.style.display = 'flex'
        }, 1000);
        setTimeout(() => {
            ctn_home.style.opacity = 1
        }, 1050);

    })
 }
/**
 * Modals 
 */

 for (let i = 0; i < modalsctn.length; i++) {
    modalsbtn[i].addEventListener('click', (_event) =>
    {
        modalsctn[i].style.display = 'flex'
        setTimeout(() => {
            modalsctn[i].style.opacity = 1
        }, 50);
    })
 }

 for (let i = 0; i < close_modal_btn.length; i++) {
    modalsctn[i].addEventListener('click', (_event) =>
    {
        modalsctn[i].style.opacity = 0
        setTimeout(() => {
            modalsctn[i].style.display = 'none'
        }, 550);
    })
 }
/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX / sizes.width 
    cursor.y = _event.clientY / sizes.height 
})

/**
 * Btn home
 */
let x = 0
let y = 0
let hold = false 
let timing = 0
let show_cursor = false

for (let i = 0; i < numerotation.length; i++) {
    numerotation[i].addEventListener('click', (_event) =>
    {
        changeNum(i)
    })
 }

home_btn.addEventListener('click', () =>
{ 
    changeNum(-10)
})
function changeNum(index){
    if(!hold){
        if(index == -10){
            x += 10
            y += 400
        }
        else{
            x = index * 10
            y = 400 * index
        }

        if(x == 50){
            x = 0
            y = 0
        }
        if(x == 0){
            resetColor(numerotation, '#aaaaaa')
            numerotation[0].style.color = '#000000'
        }
        if(x == 10){
            resetColor(numerotation, '#aaaaaa')
            numerotation[1].style.color = '#000000'
            if(index == -10){
                numerotation_bar[0].style.transformOrigin = 'left'
                numerotation_bar[0].style.transform = 'scaleX(1)'
                setTimeout(() => {
                    numerotation_bar[0].style.transformOrigin = 'right'
                    numerotation_bar[0].style.transform = 'scaleX(0)'
                }, 500)
            } 
        }
        if(x == 20){
            resetColor(numerotation, '#aaaaaa')
            numerotation[2].style.color = '#000000'
            if(index == -10){
                numerotation_bar[1].style.transformOrigin = 'left'
                numerotation_bar[1].style.transform = 'scaleX(1)'
                setTimeout(() => {
                    numerotation_bar[1].style.transformOrigin = 'right'
                    numerotation_bar[1].style.transform = 'scaleX(0)'
                }, 500)
            } 
        }
        if(x == 30){
            resetColor(numerotation, '#aaaaaa')
            numerotation[3].style.color = '#000000'
            if(index == -10){
                numerotation_bar[2].style.transformOrigin = 'left'
                numerotation_bar[2].style.transform = 'scaleX(1)'
                setTimeout(() => {
                    numerotation_bar[2].style.transformOrigin = 'right'
                    numerotation_bar[2].style.transform = 'scaleX(0)'
                }, 500)
            } 
        }
        if(x == 40){
            resetColor(numerotation, '#aaaaaa')
            numerotation[4].style.color = '#000000'
            if(index == -10){
                numerotation_bar[3].style.transformOrigin = 'left'
                numerotation_bar[3].style.transform = 'scaleX(1)'
                setTimeout(() => {
                    numerotation_bar[3].style.transformOrigin = 'right'
                    numerotation_bar[3].style.transform = 'scaleX(0)'
                }, 500)
            } 
        }
    
        cameraControls.moveTo(x,0,0,true )
        inner_text.style.transform = `translateX(${-y}px)`
    }
}
home_btn.addEventListener('mousedown', () =>
{ 
    setTimeout(() => {
        hold = true 
    }, 100);
    
})
home_btn.addEventListener('mouseover', () =>
{ 
   show_cursor = true 
})
home_btn.addEventListener('mouseout', () =>
{ 
   show_cursor = false 
})
home_btn.addEventListener('mouseup', () =>
{ 
    setTimeout(() => {
        hold = false 
    }, 100);
    timing = 0
})
function resetColor(el, color){
    for (let index = 0; index < el.length; index++) {
        el[index].style.color = color
    }
}
/**
 * Scene
 */
const scene = new THREE.Scene()
scene.background = new THREE.Color( 0xffffff )
/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

/**
 * Resize
 */
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update
    renderer.setSize(sizes.width, sizes.height)
})
/**
 * Light 
 */
const ambientLight = new THREE.DirectionalLight(0xffffff, 2)
ambientLight.position.x = 0
ambientLight.position.y = 1
ambientLight.position.z = 1
scene.add(ambientLight)

var light = new THREE.AmbientLight( 0xffffff, 0.7 ); // soft white light
scene.add( light );
/**
 * Object
 */
let octa = {}
octa.geometry = new THREE.OctahedronBufferGeometry( 0.5, 0 );
octa.material = new THREE.MeshStandardMaterial({
    color: 0x3f42fa, 
    flatShading: true,
    metalness: 0.5,
    roughness: 1,
})
octa.mesh = new THREE.Mesh(octa.geometry, octa.material)
octa.mesh.position.x = 29
octa.mesh.position.y = 0
octa.mesh.position.z = -2.5
octa.mesh.rotation.x = 0.5
//scene.add(octa.mesh)

let tetra = new OBJECT.Element(0x3a8410, scene, 'Tetrahedron', 0.5, 1, 0, 1, 39, 0, -2.5)
let cubeObj = new OBJECT.Element(0x3a8410, scene, 'Cube', 1, 1, 1, 1, -1, 0, -2.5)
//let cubeUp = new OBJECT.Element(0x9b6b8e, scene, 'Cube', 1, 1, 1, 1, 0, 40, 25)
//let cubeLeft = new OBJECT.Element(0x3a8410, scene, 'Cube', 1, 1, 1, 1, 10, 40, 25)
let coneObj = new OBJECT.Element(0x3a82fa, scene, 'Cone', 0.5, 1.5, 320, 0, 9, 0, -2.5)
let dodeObj = new OBJECT.Element(0xfa1212, scene, 'Dodecahedron', 1, 1, 1, 1, 19, 0, -4)
let octaObj = new OBJECT.Element(0x3f42fa, scene, 'Octahedron', 0.5, 1, 0, 1, 29, 0, -4)


/**
 * First scene
 */

let firstscene = new OBJECT.Scene(scene, 0, 40, 25, 10, 'Cube',1,1,1,1)
let secondscene = new OBJECT.Scene(scene, 10, 400, 25, 10, 'Cone', 0.5, 1.5, 320, 0)
let random = new OBJECT.RandomElement(scene, 0, 0, -50, 200, 1, 1, 1, 1)

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 0
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.shadowMap.enabled = true
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)

/**
 * camera controls 
 */
const clock = new THREE.Clock();
const cameraControls = new CameraControls(camera, renderer.domElement, false);

cameraControls.dampingFactor = 0.05

let nb = 0

window.addEventListener('click', () =>
{ 
    nb -= 10
    //cameraControls.moveTo(1,40, nb,true )


})
/**
 * Loop
 */
const loop = () =>
{

    const delta = clock.getDelta();
    const hasControlsUpdated = cameraControls.update( delta );
    window.requestAnimationFrame(loop)
    
    nb += 0.01
    tetra.setAnimation(0.01, 0.002, true, true, true, false,4)
    cubeObj.setAnimation(0.01, 0.002, true, true, true, false,4)
    //cubeUp.setAnimation(0.001, 0.002, false, true, true, false,100)
    //cubeLeft.setAnimation(0.01, 0.002, false, true, true, false,1000)
    coneObj.setAnimation(0.01, 0.002, true, true, true, false,4)
    dodeObj.setAnimation(0.01, 0.002, true, true, true, false,4)
    octaObj.setAnimation(0.01, 0.002, true, true, true, false,4)
    firstscene.animationPlay()
    secondscene.animationPlay()
    random.animationPlay()
    holdMouse()
    renderer.render(scene, camera)
    getAppear()

}
loop()


function getAppear() {
    if(Math.round(camera.position.y) == firstscene.posy){
        for (let index = 0; index < firstscene.arrayElement.length; index++) {
            let pos = Math.round(camera.position.z) - 30
            if ( pos == firstscene.arrayElement[index].element.mesh.position.z) {
                contentManager[index].style.display = 'flex'
                setTimeout(() => {
                    contentManager[index].style.opacity = 1
                }, 500);
            }
            else{
                contentManager[index].style.opacity = 0
                setTimeout(() => {
                    contentManager[index].style.display = 'none'
                }, 500);
            }
        }
    }
    else{
        for (let index = 0; index < firstscene.arrayElement.length; index++) {
            contentManager[index].style.opacity = 0
            setTimeout(() => {
                contentManager[index].style.display = 'none'
            }, 500);
        }
    }
}

function holdMouse(){
    if(hold){
        timing += 1
        
        if(timing > 30){
            ctn_home.style.opacity = 0 
            setTimeout(() => {
                if(x == 0){
                    cameraControls.moveTo(firstscene.posx,firstscene.posy,firstscene.posz+5,true)
                    posc = firstscene.posz + 5
                }
                if(x == 10)
                    cameraControls.moveTo(secondscene.posx,secondscene.posy,secondscene.posz + 5,true) 

            }, 1000);
            setTimeout(() => {
                ctn_home.style.display = 'none'
            }, 1000);
        }
        else{
            sml_bar.style.transform = `scaleX(${timing/30})`
        }
            
    }
    else 
    sml_bar.style.transform = `scaleX(0)`
    if(show_cursor){
        cursor_hold.style.opacity = '1'
        cursor_hold.style.left = `${(cursor.x*100)+1.5}%`
        cursor_hold.style.top = `${(cursor.y*100)+2}%`
    }
    else 
        cursor_hold.style.opacity = '0'
}
let posc = 10
let resetCamera = true
let movingScroll = true
window.addEventListener( 'wheel', onMouseWheel, false );
window.addEventListener( 'scroll', onMouseWheel, false );
function onMouseWheel( event ) {
	event.preventDefault();
    if(posc != camera.position.z && resetCamera){
        //posc = camera.position.z
        resetCamera = false 
    }
    //posc += event.deltaY * 0.003;
    if(camera.position.y == firstscene.posy){
        if((event.deltaY/100) < -0.8 && movingScroll){
            posc -= 10
            cameraControls.moveTo(camera.position.x,camera.position.y,posc,true)
            movingScroll = false
            setTimeout(() => {
                movingScroll = true
            }, 1200);
            //can move
        } 
        if((event.deltaY/100) > 0.8 && movingScroll){
            posc += 10
            cameraControls.moveTo(camera.position.x,camera.position.y,posc,true)
            movingScroll = false
            setTimeout(() => {
                movingScroll = true
            }, 1200);
            //can move
        } 
    }
  // prevent scrolling beyond a min/max value
}

