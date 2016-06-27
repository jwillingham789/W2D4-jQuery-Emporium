var blockBtn = document.querySelector('.blockBtn'),
    fireBtn = document.querySelector('.fireBtn'),
    planetBtn = document.querySelector('.planetBtn'),
    blockBox = document.querySelector('.left_box'),
    fireBox = document.querySelector('.middle_box'),
    planetBox = document.querySelector('.right_box')


blockBtn.addEventListener('click', function(){
  blockBox.classList.remove('hidden')
  fireBox.classList.add('hidden')
  planetBox.classList.add('hidden')
  // OTHER WAY TO DO IT

  // if (planetBox.style.display !== 'none') {
  //   planetBox.classList.add('hidden')
  // }
  // else if (fireBox.style.display !== 'none') {
  //   fireBox.classList.add('hidden')
  // }
})

fireBtn.addEventListener('click', function(){
  fireBox.classList.remove('hidden')
  blockBox.classList.add('hidden')
  planetBox.classList.add('hidden')
})

planetBtn.addEventListener('click', function(){
  planetBox.classList.remove('hidden')
  fireBox.classList.add('hidden')
  blockBox.classList.add('hidden')
})

// jQuery Stuff
$(document).ready(function() {
    $('.game').blockrain()
    $('.burning').burn()
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
