
function createCell(object) {
    var cell = document.createElement('div');
    cell.classList = "cell"
    cell.textContent = object.name;
    cell.onclick = function () {
        focusOn(object);
    }
    return cell;
}

function focusOn(focus) {
    // очистить
    cur.innerHTML = "";

    // добавить элемент фокуса
    var focusElement = createCell(focus);
    cur.appendChild(focusElement);
    
    // добавить элементы контейнеров фокуса
    var currentElement = focusElement;
    var container = focus.container;
    while(container){
        var element = createCell(container);
        cur.insertBefore(element, currentElement);
        currentElement = element;
        container = container.container;
    }
    console.log(focus);


    // добавить элементы содежримого фокуса
    for(var i=0; i<focus.content.length; i++){
        var element = createCell(focus.content[i]);
        cur.appendChild(element);
    }
}