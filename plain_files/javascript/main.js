

function onTabClick(event) {
    let activeTabs= document.querySelectorAll('.active');

    for( var i=0; i < activeTabs.length; i++) {
        activeTabs[i].className = activeTabs[i].className.replace('active','');
    }

  event.target.parentElement.parentElement.className +=' active';

  
  document.getElementById(event.target.href.split('#')[1]);
  document.getElementById(event.target.href.split('#')[1]).className += ' active'

}

const element = document.getElementById('nav-tab');

element.addEventListener('click', onTabClick, false);