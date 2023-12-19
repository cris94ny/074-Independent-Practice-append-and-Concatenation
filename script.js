$("body").css("background-color", "rgb(198, 146, 20)");
$(".to-pack-button").click(function(){
	var list = $(".to-pack-input").val();
    console.log(list);
    $(".packing-list").append("<li>" + "I am going to pack " + list + "</li>");
});

$(".college-course-button").click(function(){
	var list = $(".college-course-input").val();
    console.log(list);
    $(".course-list").append("<li>" + "I am excited to enroll in " + list + "</li>");
});
