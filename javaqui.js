const sub = document.querySelectorAll('h2');
const top = new Array();
sub.forEach(sub => {
  top.push(Element.textContent);
});
junio = document.querySelector('ul');
top.forEach(top => {
const item = document.createElement('li');
item.textContent = top;
junio.append(item);  
});
