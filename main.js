//alert('hello')

const topMenu = document.getElementById('SII2024-top-menu')
const toggleTopMenuIcon = document.getElementById('SII2024-toggle-top-menu-icon')

document.addEventListener('click',(e) =>
{

    if(toggleTopMenuIcon.contains(e.target))
    //click to toggle menu 
    {
        topMenu.classList.toggle('SII2024-topMenu-expanded')
        topMenu.classList.toggle('hidden')
    }
    else
    //click outside from menu
    {
        if(topMenu.classList.contains('SII2024-topMenu-expanded'))
        {
            topMenu.classList.remove('SII2024-topMenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




