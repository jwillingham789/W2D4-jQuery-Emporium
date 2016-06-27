var blockBtn = document.querySelector('.blockBtn'),
    fireBtn = document.querySelector('.fireBtn'),
    planetBtn = document.querySelector('.planetBtn'),
    blockBox = document.querySelector('.left_box'),
    fireBox = document.querySelector('.middle_box'),
    planetBox = document.querySelector('.right_box')


blockBtn.addEventListener('click', function(){
  //Show/hide the plugin views
  blockBox.classList.remove('hidden')
  fireBox.classList.add('hidden')
  planetBox.classList.add('hidden')

  //Resume Tetris when switching back
  $('.game').blockrain('resume');
})

fireBtn.addEventListener('click', function(){
  //Show/hide the plugin views
  fireBox.classList.remove('hidden')
  blockBox.classList.add('hidden')
  planetBox.classList.add('hidden')

  //Pause Tetris when switching to other views
  $('.game').blockrain('pause');
})

planetBtn.addEventListener('click', function(){
  //Show/hide the plugin views
  planetBox.classList.remove('hidden')
  fireBox.classList.add('hidden')
  blockBox.classList.add('hidden')

  //Pause Tetris when switching to other views
  $('.game').blockrain('pause');
})

//Randomize the tetris theme
var themeButton = document.querySelector('.theme-button'),
    themeArray = ['candy', 'modern', 'retro', 'vim', 'monochrome', 'gameboy', 'aerolab']

themeButton.addEventListener("click", function() {
  var randomNumber = Math.floor(Math.random() * 7)

  if (themeArray[randomNumber] === 'candy') {
    $('.game').blockrain('theme', 'candy')
    themeButton.innerText = themeArray[randomNumber]
  } else if (themeArray[randomNumber] === 'modern') {
    $('.game').blockrain('theme', 'modern')
    themeButton.innerText = themeArray[randomNumber]
  } else if (themeArray[randomNumber] === 'retro') {
    $('.game').blockrain('theme', 'retro')
    themeButton.innerText = themeArray[randomNumber]
  } else if (themeArray[randomNumber] === 'vim') {
    $('.game').blockrain('theme', 'vim')
    themeButton.innerText = themeArray[randomNumber]
  } else if (themeArray[randomNumber] === 'monochrome') {
    $('.game').blockrain('theme', 'monochrome')
    themeButton.innerText = themeArray[randomNumber]
  } else if (themeArray[randomNumber] === 'gameboy') {
    $('.game').blockrain('theme', 'gameboy')
    themeButton.innerText = themeArray[randomNumber]
  } else if (themeArray[randomNumber] === 'aerolab') {
    $('.game').blockrain('theme', 'aerolab')
    themeButton.innerText = themeArray[randomNumber]
  }
})


// jQuery Stuff
$(document).ready(function() {
    //Initialize the Tetris game
    $('.game').blockrain()

    //Initialize the Burning text
    $('.burning').burn()

    //Initialize the Planetarium
    $(".planet").planetarium({
       autospin: "5000ms",
       angle: "20deg",
       glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
       pattern: "http://www.thepetedesign.com/demos/planetarium/texture-earth.jpg",
       size: "200x200",
       float: true,
       space: "body",
       ring: false,
       ringColor: "#fff",
       ringAngle: "20deg"
     })
})
