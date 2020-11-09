// current date/time 

var currentDay = new Date($.now());
$("#currentDay").html(currentDay);

var dayContent = JSON.parse(localStorage.getItem("input"));



// loop to give colors to raws based on present, past or future time


for(i = 9; i < 18; i++){
    $("#"+i.toString()).html(dayContent[i-9])
    if(i === currentDay.getHours()){
        $("#"+i.toString()).attr("class","form-control present");
    }
    if(i < currentDay.getHours()){
        $("#"+i.toString()).attr("class","form-control past");
    }
    if(i > currentDay.getHours()){
        $("#"+i.toString()).attr("class","form-control future");
    }
}

//on click event to store daily plan

$(".saveBtn").on("click", function(event){
    var input = $("#" + event.target.value).val();
    dayContent.splice((event.target.value-9), 1, input)
    localStorage.setItem("input", JSON.stringify(dayContent)) 
})
