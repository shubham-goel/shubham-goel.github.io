var trig = document.getElementById('hover_trigger');

trig.onmouseover = function() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('hover_trigger').style.color = 'darkgreen';
}
trig.onmouseout = function() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('hover_trigger').style.color = 'Black';
}