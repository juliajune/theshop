//узнаем ширину экрана при загрузке сайта
let ww = document.documentElement.clientWidth; 
screenWidth(ww);


//узнаем ширину экрана, при изменении ширины экрана. Например, сужение-расширение в инструментах разработчика
window.addEventListener('resize', event => {
  let ww = document.documentElement.clientWidth;
  screenWidth(ww);
}, false);

let mediaSpollerInit = document.querySelectorAll('.blog-widget.blog-widget_init');
console.log(mediaSpollerInit);
if (mediaSpollerInit.length > 0){
	let mediaSpollerTitle = mediaSpollerInit.querySelectorAll('.blog-widget__title');
	console.log(mediaSpollerTitle);
}

// -- Functions --
function screenWidth(ww){
	if (ww >= 1024) {
		unsetMediaSpoller(); //если это десктоп, то оключаем спойлер
	}
	else setMediaSpoller(); //если это мобайл или таблет, то включаем спойлер
}

function setMediaSpoller(){
	let mediaSpoller = document.querySelectorAll('.blog-widget');
	console.log(mediaSpoller);
	for (var i = 0; i < mediaSpoller.length; ++i) {
  			var item = mediaSpoller[i];  // Вызов myNodeList.item(i) необязателен в JavaScript
  			item.classList.add('blog-widget_init');
	}
}

function unsetMediaSpoller(){
	let mediaSpoller = document.querySelectorAll('.blog-widget');
	console.log(mediaSpoller);
	for (var i = 0; i < mediaSpoller.length; ++i) {
  			var item = mediaSpoller[i];  // Вызов myNodeList.item(i) необязателен в JavaScript
  			item.classList.remove('blog-widget_init');
	}
}