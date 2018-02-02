// WRITE HTML
var ul = document.createElement('ul');
var li = document.createElement('li');
var btn = document.createElement('button');

ul.id = 'list';
btn.id = 'addElem';

li.innerHTML = 'item 0';
btn.innerHTML = 'Dodaj';

document.body.appendChild(btn);
document.body.appendChild(ul).appendChild(li);


//BUTTON

var btnId = document.getElementById('addElem');
var ulId = document.getElementById('list');
// var counter = 0;


btnId.addEventListener('click', function() {
	// counter += 1;
	var counter = document.getElementsByTagName('li').length
	var item = document.createElement('li');
	item.innerHTML = 'item ' + counter;
	ulId.appendChild(item);
});

