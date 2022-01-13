const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragover);
	placeholder.addEventListener('dragleave', dragleave);
	placeholder.addEventListener('dragenter', dragenter);
	placeholder.addEventListener('drop', dragDrop);
}

function dragstart (event) {
	console.log(event.target);
	
	setTimeout(() => event.target.classList.add('hide'), 0);
	event.target.classList.add('border');
	
}

function dragend (event) {
	console.log(event.target);
	event.target.className = 'item';
}