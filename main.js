var prev = document.getElementById('prev');
var cur = document.getElementById('cur');
var next = document.getElementById('next');

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
    //очистить
    cur.innerHTML = "";

    //добавить элемент фокуса
    var focusElement = createCell(focus);
    cur.appendChild(focusElement);

    //добавить элементы контейнеров фокуса
    var currentElement = focusElement;
    var container = focus.container;
    while(container){
        var element = createCell(container);
        cur.insertBefore(element, currentElement);
        currentElement = element;
        container = container.container;
    }
    
    //добавить элементы содежримого фокуса
    for(var i=0; i<focus.content.length; i++){
        var element = createCell(focus.content[i]);
        cur.appendChild(element);
    }




    // var container = focus.container;
    // var current;
    // while (container){
    //     current = container;
    //     container = current.container;
    // }
    // while ()


}

focusOn(odf1);

/*
var enclosure = document.createElement('div');
enclosure.classList = "enclosure-cell"
enclosure.textContent = box.name;
enclosure.onclick = function () {
    enc = this;
    for (i=0; i<box.devices.length; i++){
        var device = box.devices[i];
        var div = document.createElement('div');
        div.classList = "device-cell"
        div.textContent = device;
        div.onclick = function () {
            alert (this.textContent);
        }
        cur.appendChild(div);
    }
}
cur.appendChild(enclosure);



var device = document.createElement('div');
device.classList = "device-cell"
device.textContent = "ODF №1";
device.onclick = function () {
    alert ("second");
}
cur.appendChild(device);


for (i=1; i<=odf.of.length; i++){
    var ofLink = odf.of[i-1];
    var div = document.createElement('div');
    div.classList = "cell"
    div.textContent =  i + ". " + odf.of[i-1];
    div.onclick = function () {
        alert (this.textContent);
    }
    cur.appendChild(div);
}

*/