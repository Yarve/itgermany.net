function navbarSwitch() {

  list = document.getElementById('list-content');
  btn = document.getElementById('navbar-switch');
  if(list.style.display == 'block'){
    list.style.display = 'none';
    btn.innerHTML = "&equiv;";
  }else{
    list.style.display = 'block';
    btn.innerHTML = "X";

  }
}