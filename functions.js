function createCell(ID) {
    var object = data[ID];
    var cell = document.createElement('div');
    cell.classList = "cell " + object.type;
    cell.textContent = object.name;
    cell.onclick = function () {
        if(!object.contentID) return;
        focusOn(object.id);
    }
    return cell;
}

function focusOn(ID) {
    var focus = data[ID];

    // очистить
    cur.innerHTML = "";

    // добавить элемент фокуса
    var focusElement = createCell(focus.id);
    cur.appendChild(focusElement);
    
    // добавить элементы контейнеров фокуса
    var currentElement = focusElement;
    var container = data[focus.containerID];
    while(container){
        var element = createCell(container.id);
        cur.insertBefore(element, currentElement);
        currentElement = element;
        container = data[container.containerID];
    }
    console.log(focus);

    // добавить элементы содежримого фокуса
    for(var i=0; i<focus.contentID.length; i++){
        var element = createCell(focus.contentID[i]);
        cur.appendChild(element);
    }
}