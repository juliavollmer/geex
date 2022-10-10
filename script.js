function expand(selection) {
    var item = $("#" + selection)
    if (item.css('visibility') == 'visible') {
        item.css({
            'visibility': 'hidden'
        });
        item.css({
            'opacity': '0'
        });
    } else {
        item.css({
            'visibility': 'visible'
        });
        item.css({
            'opacity': '1'
        });
    }
}

var descriptionList = ["Fabian",
    "Julia",
    "Sangbong",
    "Alethia",
    "Jiawen",
    "Nilya",
    "Miaoying",
    "Alberto",
    "Dennis"
]


$("[data-id]").each(function (element) {
    $(this).click(function () {
        $("#description").text(descriptionList[$(this).data("id")]);
    })
    $(this).draggable()
})
$("#description").draggable()

var divs = document.getElementsByClassName("rand");
// get window width and height
var winWidth = window.innerWidth - 10;
var winHeight = window.innerHeight - 10;

// i stands for "index". you could also call this banana or haircut. it's a variable
for (var i = 0; i < divs.length; i++) {

    // shortcut! the current div in the list
    var thisDiv = divs[i];

    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);

    // update top and left position
    thisDiv.style.top = randomTop + "px";
    thisDiv.style.left = randomLeft + "px";
    console.log(thisDiv);

}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {

    return Math.random() * (max - min) + min;

}