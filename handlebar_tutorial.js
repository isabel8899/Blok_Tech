function fill_template() {
    var data = {
        title: "why handlebar is cool",
        list: [
            {name:"Isabel"},
            {name:"poeya"},
            {name:"elijah"}
        ],
        footer:"this is a footer"
    };
    var template = handlebars.compile(document.querySelector("#template").innerHTML);
    var filled = template(data);
    document.querySelector("#output").innerHTML = filled;
}
