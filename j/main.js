document.querySelector("#contact").addEventListener('click',function() {
  document.querySelector('.form').classList.add('form-on');
  document.querySelector('.outer-form').style.pointerEvents='all';
  });
  document.querySelector("#button").addEventListener('click',function() {
    document.querySelector('.form').classList.remove('form-on');
    document.querySelector('.animate').classList.add('form-off');
  });
  document.querySelector("#exit").addEventListener('click',function() {
    document.querySelector('.form').classList.remove('form-on');
    document.querySelector('.animate').classList.add('form-off');
    document.querySelector('.outer-form').style.pointerEvents='none';
  });
  document.querySelector("#contact").addEventListener('click',function() {
    document.querySelector('.form').classList.remove('form-off');
    document.querySelector('.reset').classList.add('form-on');
    document.querySelector('.outer-form').style.pointerEvents='all';
  });
  