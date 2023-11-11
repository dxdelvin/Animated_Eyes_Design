
let randomValue = () =>{
  return Math.floor(Math.random() * 255);
}


let theme = document.getElementById('theme')

theme.onclick = ()=>{
  value =  `rgba(${randomValue()},${randomValue()},${randomValue()})`
  document.body.style.backgroundColor = value
  theme.style.backgroundColor = value

}


const eye = document.querySelector('.eye');
const pupil = eye.querySelector('.pupil');


document.addEventListener('mousemove', e => {

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const eyeX = eye.getBoundingClientRect().left + eye.offsetWidth / 2;
  const eyeY = eye.getBoundingClientRect().top + eye.offsetHeight / 2;


  const deltaX = mouseX - eyeX;
  const deltaY = mouseY - eyeY;

  // Calculate the distance between the eye element's center and the mouse pointer's position
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const maxDistance = eye.offsetWidth / 2 - pupil.offsetWidth / 2;

  // Calculate the angle between the eye element's center and the mouse pointer's position
  const angle = Math.atan2(deltaY, deltaX);

  // Calculate the pupil's new position
  const pupilX = Math.cos(angle) * Math.min(distance, maxDistance);
  const pupilY = Math.sin(angle) * Math.min(distance, maxDistance);

  // Update the pupil element's position
  pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});


//2



// Get the eye and pupil elements
const inside = document.querySelector('.inside');

// Listen for the mousemove event
document.addEventListener('mousemove', e => {
  // Get the mouse pointer's position
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Get the eye element's position
  const eyeX = pupil.getBoundingClientRect().left + pupil.offsetWidth / 2;
  const eyeY = pupil.getBoundingClientRect().top + pupil.offsetHeight / 2;

  // Calculate the difference between the mouse position and the eye position
  const deltaX = mouseX - eyeX;
  const deltaY = mouseY - eyeY;

  // Calculate the distance between the eye element's center and the mouse pointer's position
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  // Calculate the maximum distance the pupil can move
  const maxDistance = pupil.offsetWidth / 2 - inside.offsetWidth / 2;

  // Calculate the angle between the eye element's center and the mouse pointer's position
  const angle = Math.atan2(deltaY, deltaX);

  // Calculate the pupil's new position
  const pupilX = Math.cos(angle) * Math.min(distance, maxDistance);
  const pupilY = Math.sin(angle) * Math.min(distance, maxDistance);

  // Update the pupil element's position
  inside.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});


//1


// Get the eye and pupil elements
const eye1 = document.querySelector('.eye1');
const pupil1 = document.querySelector('.pupil1');

// Listen for the mousemove event
document.addEventListener('mousemove', e => {
  // Get the mouse pointer's position
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Get the eye element's position
  const eyeX = eye1.getBoundingClientRect().left + eye.offsetWidth / 2;
  const eyeY = eye1.getBoundingClientRect().top + eye.offsetHeight / 2;

  // Calculate the difference between the mouse position and the eye position
  const deltaX = mouseX - eyeX;
  const deltaY = mouseY - eyeY;

  // Calculate the distance between the eye element's center and the mouse pointer's position
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const maxDistance = eye1.offsetWidth / 2 - pupil1.offsetWidth / 2;

  // Calculate the angle between the eye element's center and the mouse pointer's position
  const angle = Math.atan2(deltaY, deltaX);

  // Calculate the pupil's new position
  const pupilX = Math.cos(angle) * Math.min(distance, maxDistance);
  const pupilY = Math.sin(angle) * Math.min(distance, maxDistance);

  // Update the pupil element's position
  pupil1.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});


//2



// Get the eye and pupil elements
const inside1 = document.querySelector('.inside1');

// Listen for the mousemove event
document.addEventListener('mousemove', e => {
  // Get the mouse pointer's position
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Get the eye element's position
  const eyeX = pupil1.getBoundingClientRect().left + pupil.offsetWidth / 2;
  const eyeY = pupil1.getBoundingClientRect().top + pupil.offsetHeight / 2;

  // Calculate the difference between the mouse position and the eye position
  const deltaX = mouseX - eyeX;
  const deltaY = mouseY - eyeY;

  // Calculate the distance between the eye element's center and the mouse pointer's position
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  // Calculate the maximum distance the pupil can move
  const maxDistance = pupil1.offsetWidth / 2 - inside1.offsetWidth / 2;

  // Calculate the angle between the eye element's center and the mouse pointer's position
  const angle = Math.atan2(deltaY, deltaX);

  // Calculate the pupil's new position
  const pupilX = Math.cos(angle) * Math.min(distance, maxDistance);
  const pupilY = Math.sin(angle) * Math.min(distance, maxDistance);

  // Update the pupil element's position
  inside1.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});

