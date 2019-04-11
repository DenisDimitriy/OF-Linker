var odf1 = {
    name: "ODF №1",
    container: box19_26,
    content: [
        {name: "Ощадбанк"},
        {name: "Аваль"},
        {name: "ОБК"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
    ]
};

var odf2 = {
    name: "ODF №2",
    container: box19_26,
    content: [
        {name: "Приватбанк"},
        {name: "ICC"},
        {name: "ЗВЕ"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
    ]
};

var odf3 = {
    name: "ODF №3",
    container: box19_26,
    content: [
        {name: "ЦВК"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
    ]
};

var odf4 = {
    name: "ODF №4",
    content: [
        {name: "Партнер"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
        {name: "-"},
    ]
};

var box19_26 = {
    name: "АРШ 19-26",
    content: [
        odf1,
        odf2,
        odf3,
        odf4,
    ]
};

var box17_01 = {
    name: "АРШ 17-01",
    content: [
        odf1,
        odf2,
        odf3,
        odf4,
    ]
};

odf1.container = box19_26;
odf2.container = box19_26;
odf3.container = box19_26;
odf4.container = box19_26;

var zone19 = {
    name: "Зона 19",
    content: [
        box19_26,
        box17_01
    ]
};

box19_26.container = zone19;
box17_01.container = zone19;