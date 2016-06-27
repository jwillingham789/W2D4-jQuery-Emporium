// console.log(document.querySelector('img'))
var qs = function (selector) {
  return document.querySelector(selector)
}

var robot = document.querySelector('.robot'),
    robotSrc = robot.getAttribute('src'),
    newRobot
    robotMakerBtn = document.querySelector('.robot-maker-btn')

// robot.setAttribute('src', robotSrc.replace('placeholder', Date.now()))

//makes robots on click
robotMakerBtn.addEventListener('click', function(){

  newRobot = document.createElement('img')
  newRobot.setAttribute('src', robotSrc.replace('placeholder', Date.now() + 1))
  newRobot.classList.add('robot')
  //adds a rotate transform to each new robot
  newRobot.style = 'transform: rotate(' + (Math.floor(Math.random() * (180 - 0 + 1)) + 0) + 'deg);'
  //shorter style of creating styles
  newRobot.style.border = '1px solid red'

  document.querySelector('main').appendChild(newRobot)
})


// document.querySelector('main').removeChild(document.querySelector('.robot'))

// robot.classList.add('rotated')
// // console.log(robot.classList)
//
// setTimeout(function(){
//   robot.classList.add('closer')
//   // console.log(robot.classList)
// }, 1000) //1000 milliseconds or 1 second
