//jQuery Intro exercise
// window.onload = () => {
//     alert("The page has finished loading!")
// }

//jQuery Selectors exercise
// let headingContent = $("#greeting").html();
// let paragraphContent = $("#lorem").html();
//
// alert(headingContent);
// alert(paragraphContent);

// $(".codeup").css("border", "1px solid red")

// $("li").css("font-size", "20px")
//
// $("h1, p, li").css("background-color", "yellow");
//
// alert($("h1").html());

//jQuery Mouse Events exercise
$("h1").click(() => {
    $("h1").css("background-color", "red");
});

$("p").dblclick(() => {
    $("p").css("font-size", "18px");
});

// $("li").hover(
//     () => {
//         $("li").css("color", "red");
//     },
// () => {
//         $("li").css("color", "black");
//     }
// );

$("li").mouseenter(() => {
    $("li").css("color", "red");
});

$("li").on("mouseleave",() => {
    $("li").css("color", "black");
});