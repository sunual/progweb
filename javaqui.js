const sub = document.querySelectorAll('h2');
const topi = new Array();
sub.forEach(sub => {
  topi.push(Element.textContent);
});
junio = document.querySelector('ul');
topi.forEach(topi => {
const item = document.createElement('li');
item.textContent = topi;
junio.append(item);  
});
