var options = {
    set0: ['Option 1','Option 2'],
    set1: ['First Option','Second Option','Third Option']
};

var list = "<li>" + options.set0.join("</li><li>") + "</li>";
document.getElementById("list").innerHTML = list;