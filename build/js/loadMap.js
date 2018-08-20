
require([
    "esri/map",
    "esri/geometry/Point",
    "esri/layers/GraphicsLayer",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/graphic",
    "dojo/_base/array",
    "dojo/dom-style",
    "dojo/dom-construct",
    "esri/Color",
    "dojo/domReady!"
], function(
    Map,
    Point,
    GraphicsLayer,
    SimpleMarkerSymbol,
    Graphic,
    arrayUtils,
    domStyle,
    domConstruct,
    Color,
    PictureMarkerSymbol
) {
    var map = new Map("map", {
        basemap: "satellite",
        center: [20, 44],
        zoom: 6,
        minZoom: 2
    });
    var graphicsLayer;

    map.on("load", mapLoaded);
    map.on("click", graphicsClickHandler);

    function graphicsClickHandler(evt)
    {
        console.log(evt.graphic.attributes.Name);
        map.infoWindow.setContent(evt.graphic.attributes.Description);
        map.infoWindow.setTitle(evt.graphic.attributes.Name);
        map.infoWindow.show(new Point(evt.graphic.attributes.Location));
        var cards = document.querySelectorAll(".card");
            for (var i = 0; i < cards.length; i++) {
                cards[i].classList.remove("active");
            }
        var cardID = document.querySelector('#card'+evt.graphic.attributes.ID);
        cardID.classList.add("active");
    }

    function mapLoaded() {
        graphicsLayer = new GraphicsLayer();
        map.addLayer(graphicsLayer);

        parseData();
    }

    function parseData() {
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            createCard(item);
            createGraphic(item);
        }
    }

    function createCard(item) {
   
        var container = document.getElementById("panel");
        var div = document.createElement("div");
        var divOverlay = document.createElement("div");
        
        divOverlay.innerHTML =
            '<img class="card-img-top" src="' +
            item.ImageURL +
            '" alt="Card image cap">';

        var h3 = document.createElement("h3");
        h3.className = "card-title";
        h3.innerHTML = '<div id="firstCard">' + item.Name + "</div>";

        var p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = '<div id="cardDescr">' + item.Description + "</div>";

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";
        cardBody.appendChild(h3);
        cardBody.appendChild(p);

        var card = document.createElement("div");
        card.className = "card";
        card.setAttribute("id", "card" + item.ID);

        card.appendChild(divOverlay);
        card.appendChild(cardBody);

        card.addEventListener("click", function() {
            var cards = document.querySelectorAll(".card");
            for (var i = 0; i < cards.length; i++) {
                cards[i].classList.remove("active");
            }
            card.classList.add("active");
            map.infoWindow.setContent(item.Description);
            map.infoWindow.setTitle(item.Name);
            map.infoWindow.show(new Point(item.Location));
        });

        div.appendChild(card);

        container.appendChild(div);
    }

    function createGraphic(item) {
        var point = new Point(item.Location);
        var symbol = new SimpleMarkerSymbol()
            .setStyle(SimpleMarkerSymbol.STYLE_CIRCLE)
            .setColor([255, 255, 0, 0.5]);
        var attribute = item;
        var graphic = new Graphic(point, symbol, attribute);
        graphicsLayer.add(graphic);
    }           
});
