const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragover);
	placeholder.addEventListener('dragenter', dragenter);
	placeholder.addEventListener('dragleave', dragleave);
	placeholder.addEventListener('drop', dragDrop);
}

function dragstart (event) {
	setTimeout(() => event.target.classList.add('hide'), 0);
	event.target.classList.add('border');
	
}

function dragend (event) {
	console.log(event.target);
	event.target.className = 'item';
}
// перетаскиваемый элемент над
function dragover (event) {
	event.preventDefault();
	event.target.classList.add('border_top');
	
}
function dragenter (event) {
	console.log('dragenter');
}
// перетаскиваемый элемент покидает место и 
function dragleave (event) {
	console.log('dragleave');
	event.target.className = 'placeholder';
}
function dragDrop (event) {
	event.target.classList.remove('border_top');
	event.target.append(item); 
}