  
// wings
  const wingsTl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5
  });

  wingsTl.to(".left", {
    rotationY: 90,
    opacity: 0.8,
    duration: 1,
    ease: "power2.inOut"
  }, 0)
  .to(".right", {
    rotationY: -90,
    opacity: 0.8,
    duration: 1,
    ease: "power2.inOut"
  }, 0);

// progress bar
const bar = document.querySelector(".progress-bar");
const handles = document.querySelector(".progress-handle");

window.addEventListener("load", () => {
  bar.classList.add("active");

  const tl = gsap.timeline();

  tl.to(bar, {
    width: "70%",
    duration: 2,
    ease: "power2.out"
  }, 0);

  tl.to(handles, {
    x: "360px", 
    duration: 2,
    ease: "power2.out"
  }, 0);
});

// card
const container = document.querySelector(".card-container");
const topCard = document.querySelector(".card.top");

container.classList.add("active");

gsap.to(topCard, {
  rotateY: 360,
  duration: 4,
  ease: "none",   
  repeat: -1    
});
gsap.to(topCard, {
  rotateX: 10,
  yoyo: true,
  repeat: -1,
  duration: 2,
  ease: "sine.inOut"
});

  const fill = document.querySelector(".neon-bar-fill");
  const handle = document.querySelector(".neon-bar-handle");

  window.addEventListener("load", () => {
    const tl = gsap.timeline();

    tl.to(fill, {
      width: "70%",
      duration: 2,
      ease: "power2.out"
    }, 0);

    tl.to(handle, {
      x: "350px",
      duration: 2,
      ease: "power2.out"
    }, 0);
  });


  gsap.to(".statue-bg", {
    rotation: 360,
    duration: 20,       // slower = higher number (try 30 for even slower)
    repeat: -1,         // infinite loop
    ease: "none",       // constant smooth rotation
    transformOrigin: "center center" // rotate around center
  });




  const uploadBox = document.querySelector(".seven-right #uploadBox");
const fileInput = document.querySelector(".seven-right #fileInput");
const previewImage = document.querySelector(".seven-right #previewImage");
const uploadText = document.querySelector(".seven-right #uploadText");

// Click anywhere on the box to open file dialog
uploadBox.addEventListener("click", () => fileInput.click());

// When file is selected, show it inside the box
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    previewImage.src = reader.result;
    previewImage.style.display = "block";

    // Fade-in image
    setTimeout(() => {
      previewImage.style.opacity = "1";
    }, 50);

    // Hide text smoothly
    uploadText.style.opacity = "0";
    setTimeout(() => (uploadText.style.display = "none"), 400);
  };
  reader.readAsDataURL(file);
});



// Open modal on click
document.getElementById('opendropBtn').addEventListener('click', function (e) {
  e.preventDefault(); // <a> ke default scroll ko rokta hai
  document.getElementById('dropModal').style.display = 'flex';
  document.getElementById('dropFrame').src = 'live-drop.html';
});

// Close modal function (called from form.html)
function closedropModal() {
  document.getElementById('dropModal').style.display = 'none';
  document.getElementById('dropFrame').src = 'live-drop.html'; // Reset iframe content
}

// Make function global
window.closedropModal = closedropModal;


// Open modal on click
document.getElementById('openFormBtn').addEventListener('click', function (e) {
  e.preventDefault(); // <a> ke default scroll ko rokta hai
  document.getElementById('formModal').style.display = 'flex';
  document.getElementById('formFrame').src = 'form.html';
});

// Close modal function (called from form.html)
function closeFormModal() {
  document.getElementById('formModal').style.display = 'none';
  document.getElementById('formFrame').src = ''; // Reset iframe content
}

// Open form modal function (for iframe calls)
function openFormModal() {
  document.getElementById('formModal').style.display = 'flex';
  document.getElementById('formFrame').src = 'form.html';
}

// Make functions global
window.closeFormModal = closeFormModal;
window.openFormModal = openFormModal;
