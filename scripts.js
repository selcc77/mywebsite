function drawArt(context) {
    var x, y; // defining variables x and y
    var angle; // defining a variable for angle

    function radian(degree) { // creating a function that converts the degrees to radians
        return degree * Math.PI / 180;
    }

    function moveForward(distance, context) { // defining a function for x,y that moves forward
        let a = radian(angle); //converting angles to radians
        x = x + distance * Math.cos(a); //finding the new x coordinate
        y = y + distance * Math.sin(a); //finding the new y coordinate
        context.lineTo(x, y);// drawing a line to the new coordinate
    }

    function turnRight(degree) { //function for turning the "artist" right
        angle = angle - degree; //decreases the angle (for an art)
        if (angle < 0) angle = angle + 360; // there is no negative angle, that is why we define it with respect to 360
    }

    function turnLeft(degree) { //function for turning left
        angle = angle + degree; //increases the angle
        if (angle > 360) angle = angle - 360; //defining angle being between 0 and 360
    }

    context.beginPath(); // Begin a new path
    context.moveTo(x, y); // Move to the starting position

// Draw a simple shape: a triangle
    moveForward(100, context); // Move forward 100 pixels
    turnRight(120); // Turn right 120 degrees
    moveForward(100, context); // Move forward 100 pixels
    turnRight(120); // Turn right 120 degrees
    moveForward(100, context); // Move forward 100 pixels to complete the triangle

context.closePath(); // Optionally close the path
}


document.addEventListener('DOMContentLoaded', () => {
    let scrollerBox = document.querySelector(".teamMemberGallery");
    let previousButton = document.getElementById("previousButton");
    let nextButton = document.getElementById("nextButton");

    if (scrollerBox && previousButton && nextButton) {
        scrollerBox.addEventListener("wheel", (evt) => {
            scrollerBox.scrollLeft += evt.deltaY;
        });

        nextButton.addEventListener("click", () => {
            scrollerBox.scrollLeft += 900;
        });

        previousButton.addEventListener("click", () => {
            scrollerBox.scrollLeft -= 900;
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    let makePicBigger = document.querySelectorAll(".memberPic");
    
    makePicBigger.forEach((memberPic) => {
        memberPic.addEventListener("mouseenter", () => {
            memberPic.style.transform = "scale(1.1)";
            memberPic.style.transition = "transform 0.5s ease";
        });

        memberPic.addEventListener("mouseleave", () => {
            memberPic.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let makePicBiggerAndGray = document.querySelectorAll("#groupPic");
    
    makePicBiggerAndGray.forEach((groupPic) => {
        groupPic.addEventListener("mouseenter", () => {
            groupPic.style.transform = "scale(1.052)";
            groupPic.style.transition = "transform 0.5s ease";
            groupPic.style.filter = "grayscale(90%)";
        })
    
        groupPic.addEventListener("mouseleave", () => {
            groupPic.style.transform = "scale(1)";
            groupPic.style.filter = "grayscale(0%)";
        })
    })
})

document.addEventListener("DOMContentLoaded", () => {
    let listItems = document.querySelectorAll(".mainTab li");

    listItems.forEach((item) => {
        item.style.transition = "transform 0.5s ease, background-color 0.3s ease";
        
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.1)";
            item.style.backgroundColor = "#E9EFEC"; 
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
            item.style.backgroundColor = "#F9F9F9"; 
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let makeNameBigger = document.querySelectorAll(".ourNames li h3");
    
    makeNameBigger.forEach((ourNames) => {
        ourNames.addEventListener("mouseenter", () => {
            ourNames.style.transform = "scale(1.1)";
            ourNames.style.transition = "transform 0.5s ease";
        });

        ourNames.addEventListener("mouseleave", () => {
            ourNames.style.transform = "scale(1)";
            ourNames.style.filter = "grayscale(0%)";
        });
    });
});


