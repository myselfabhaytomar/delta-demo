// const music = document.querySelector("audio");
// const picon = document.getElementsById("#picon");
// picon.addEventListener("onclick", () => {
//     music.play();
// });

//
var mainContent = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
mainContent.addEventListener("mousemove", function (dets) {
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
    // cursor.style.left = dets.x + "px"
    // cursor.style.top = dets.y + "px"
});
