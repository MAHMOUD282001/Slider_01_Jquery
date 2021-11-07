

let nextBtn = $(".next");

let prevBtn = $(".prev");

let slider = $(".slider-container div");

let divLength = slider.length;

console.log(divLength)


var i = 0;


function next(){
        i++;
        
        if(i == divLength){
        
            i = 0;
    }
    
    slider.removeClass("active");
    
    $(slider[i]).addClass("active");
    
}



function previous(){
        
        if(i == 0){
        
            i = divLength-1;
            
        }
        else{
        
            i--;
            
        }
    
    slider.removeClass("active");
    
    $(slider[i]).addClass("active");
    
}

nextBtn.click(function(){
    next()
});



prevBtn.click(function(){
    previous();
})


// var Timer = setInterval(()=>{
//     // previous();
//     // next();
// },3000)