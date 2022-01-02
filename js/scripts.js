$('#tagsSelect').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
	const tagValue = document.getElementById('tagsSelect').options[clickedIndex].text;
	const currentTags = document.getElementById('search-tags');
	if(!currentTags.innerHTML.includes(tagValue.includes("HTML") ? "HTML" : tagValue))
		currentTags.innerHTML += "<span id=\"tag-" + clickedIndex + "\">" + tagValue +" <i class=\"bi bi-x\" id=\"" + clickedIndex + "\"></i></span>";
	$('.selectpicker').val('');
	$('.selectpicker').selectpicker('render');
	document.querySelector('span#tag-' + clickedIndex + ' > i').addEventListener('click', (() => handleItemClick({id: clickedIndex})));
});

/*document.querySelectorAll('div#search-tags > span > i').forEach(i => i.removeEventListener('click', ((e) => {
	document.getElementById('tag-'+ i.id).remove();
})));*/

document.querySelectorAll('div#search-tags > span > i').forEach(i => i.addEventListener('click', (() => handleItemClick(i))));

function handleItemClick(item) {
	document.getElementById('tag-'+ item.id).remove();
}