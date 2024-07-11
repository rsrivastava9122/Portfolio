var type = new Typed(".text", {
    strings: ["Frontend developer", "Web developer"], // Note the 's' in strings
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true 
  });
  $(document).ready(function () {
    setTimeout(function () {
      $(".page-loader").fadeOut("slow");
    }, 700);
  });
    const header = document.querySelector('header');
  
      function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
      }
  
      function changeBackgroundColor() {
        header.style.backgroundColor = getRandomColor();
      }
  
      setInterval(changeBackgroundColor, 1000);
  
  