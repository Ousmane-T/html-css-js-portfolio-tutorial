function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function openResume() {
    var win = window.open('./assets/Resume_Ousmane_English.pdf');
    if (win) {
      win.focus();
    } else {
      alert('Please allow popups for this website');
    }
  }
