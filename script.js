window.toggle_menu = () => {
  const header = document.getElementsByTagName('header')[0];
  const open = header.classList.contains('menu-open');

  if(open){
      header.classList.remove('menu-open');
  }else{
      header.classList.add('menu-open');
  }
}
