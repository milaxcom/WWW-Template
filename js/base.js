/* WWW-Template (v.1) by Milax */

/***********************
 * ОПЦИИ ***************
 **********************/

var $win = $window = $(window);
var $body = $("body");
var $doc = $document = $(document);


/**************************
 * ВСПОМОГАТЕЛЬНЫЙ ОБЪЕКТ *
 *************************/


/**
 * Метод стартует различные функции, в зависимости от 
 * определенных на странице опций. Метод-контроллер.
 * 
 * @return void
 */
var x = function () {

	// Берем опции из <body> и добавляем к ним опцию 
	// по-умолчанию option-default
	var _class = "option-default " + $body.attr("class");

	// Создаем масив опций
	_class = _class.split(" ");
	
	// Стартуем все методы заданных опций
	for (var _keyI in _class)
		if (x.exe[_class[_keyI]] !== "undefined")
			for (var _keyJ in x.exe[_class[_keyI]])
				eval(x.exe[_class[_keyI]][[_keyJ]]);
};

x.exe = {};


/**
* Вспомогательный  метод для парсинга и замены шаблонов в строке.
* 
* @param str string Строка, которая будет парситься.
* @param obj object Содержит строковые name:value 
*                name — имя шаблона
*                value — значение шаблона
* @return string Возвращает обработанную строку
*/
x.replace = function (str, obj) {
	// Берем каждый из имен шаблонов
	for (var _i in obj) {
		// Ищем имя в строке и заменяем новым значением
		str = str.replace(new RegExp('{'+_i+'}','gi'), obj[_i]);
	}
	return str;
};

/**
 * Метод возвращает масив содержащий все параметры из URL, которые передаются ч/з GET.
 * 
 * @return array Список GET параметров.
 */
x.getUrlVars = function () {
    var vars = {}, hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var num in hashes)
    {
        hash = hashes[num].split('=');
        vars[hash[0]] = hash[1];
    }
    return vars;
};

/**
 * Метод возвращает список параметров заданной группы из метатегов.
 * 
 * @return object Список параметров.
 */
 x.getMetaSettings = function ( prefix, sepparator ) {

 	var sepparator = sepparator || ":";
 	prefix = prefix + sepparator;

	var $meta = $("meta[name^='" + prefix + "']");
	var length = $meta.length;
	var reg = new RegExp(prefix);
	var $item, name, content;
	var data = {};

	for (var i = 0; i < length ; i++) {
		$item = $meta.eq(i);
		name = $item.attr("name");
		name = name.replace(reg, "");
		content = $item.attr("content");
		data[name] = content;
	}

	return data;

};

/** Стартуем метод-контроллер x() при DOM-ready */
$(x);