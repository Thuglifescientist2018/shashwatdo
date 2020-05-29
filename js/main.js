var shashwat_init_video = document.querySelector("#shashwat_init_video");
var scratch_hair =  document.querySelector("#scratch_hair");
var drink_water =  document.querySelector("#drink_water");
var reset  = document.querySelector("#reset");

scratch_hair.addEventListener("click", function(){
    shashwat_init_video.setAttribute("src", "/shashwat hair scratch.mp4");
    
})
drink_water.addEventListener("click", function(){
    shashwat_init_video.setAttribute("src", "/shashwat drinking water.mp4");

})
reset.addEventListener("click", function(){
    shashwat_init_video.setAttribute("src", "/shashwat init.mp4");
})