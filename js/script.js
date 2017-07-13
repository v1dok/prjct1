window.onload=function(){
var menuElem = document.getElementById('dd'),
    titleElem = menuElem.querySelector('.title');
    document.onclick = function(event) {
    var target = elem = event.target;
    while (target != this) {
          if (target == menuElem) {
          if(elem.tagName == 'A') titleElem.innerHTML = elem.textContent;
          menuElem.classList.toggle('active')
              return;
          }
          target = target.parentNode;
      }
    menuElem.classList.remove('active');
}
}