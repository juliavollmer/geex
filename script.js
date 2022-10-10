$(".exit").on('mouseover', function(){
    var offset = $(this).offset();
    var goX = Math.random() < 0.5 ? -1 : 1;
    var goY = Math.random() < 0.5 ? -1 : 1;
    $(this).animate({'top': offset.top + 100 * goY,
    'left': offset.left + 100 * goX
}, 200);
    // $(this).animate({}, 200);
    if (!checkInside(this)){
        $('#message').css({'visibility': 'visible'});
    } else {
        console.log('inside');
        $('#message').css({'visibility': 'hidden'});
   
    }
});

function checkInside(el){
    var rect = el.getBoundingClientRect();
    console.log(rect.top);
    return (
        rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function expand(selection) {
    var item = $("#"+selection)
    if (item.css('visibility') == 'visible'){
        item.css({'visibility': 'hidden'});
        item.css({'opacity': '0'});
    } else {
        item.css({'visibility': 'visible'});
        item.css({'opacity': '1'});
    }
}

var descriptionList = [ "Fabian",
                        "Julia",
                        "Sangbong",
                        "Alethia",
                        "Jiawen",
                        "Nilya",
                        "Miaoying",
                        "Alberto",
                        "Dennis"
                     ]


$("[data-id]").each(function(element) {
    $(this).click(function () {
        $("#description").text(descriptionList[$(this).data("id")]);
    })
    $(this).draggable()
})

// $(".project").each(function(element) {
//     var number = Math.floor(Math.random() * 90) + 10;
//     $(this).css("marginTop", number +"vh");
//     var numberleft = Math.floor(Math.random() * 90) + 10;
//     $(this).css("marginLeft", numberleft +"vw");
// })

var divs = document.getElementsByClassName("rand");
// get window width and height
var winWidth = window.innerWidth-10;
var winHeight = window.innerHeight -10;

// i stands for "index". you could also call this banana or haircut. it's a variable
for ( var i=0; i < divs.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisDiv = divs[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    console.log(thisDiv);
    
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
    return Math.random() * (max - min) + min;
      
  }