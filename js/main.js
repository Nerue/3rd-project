var scroll = new SmoothScroll('a[href*="#"]',{
	speed: 1000,
	speedAsDuration: true
});


$(document).ready(function(){
    $(window).scroll(function(){
        let x=$(window).scrollTop()
        console.log(x)
        if(x>50){
            $('.upButton').fadeIn();  
        }else{$('.upButton').fadeOut() }
    })
    $('.navbar-toggler').click(function(){

        $('.overlay').fadeToggle();
        
    }
)
$('.Close').click(function(){
    $('.overlay').fadeToggle();
})
$('.a1').click(function(){
    $('.c1').slideToggle();
})
$('.a2').click(function(){
    $('.c2').slideToggle();
})
$('.a3').click(function(){
    $('.c3').slideToggle();
})
$('.a4').click(function(){
    $('.c4').slideToggle();
})
}
)


let s1 = document.querySelector('.s1')
let s2 = document.querySelector('.s2')
let s3 = document.querySelector('.s3')
let s4 = document.querySelector('.s4')
let s5 = document.querySelector('.s5')
let s6 = document.querySelector('.s6')
let q1 = document.querySelector('.q1')
let q2 = document.querySelector('.q2')
let q3 = document.querySelector('.q3')
let q4 = document.querySelector('.q4')
let q5 = document.querySelector('.q5')
let q6 = document.querySelector('.q6')
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(q1);
console.log(q2);
console.log(q3);
console.log(q4);

    


document .addEventListener('click', 
(e)=>{
    if(e.target.classList.contains('s2')){
     e.target.parentElement.classList.add('active')
     s1.parentElement.classList.remove('active')
     s3.parentElement.classList.remove('active')
     s4.parentElement.classList.remove('active')
     s5.parentElement.classList.remove('active')
     s6.parentElement.classList.remove('active')
     
     q1.classList.add('d-none')
     q2.classList.remove('d-none')
     q3.classList.add('d-none')
     q4.classList.add('d-none')
     q5.classList.add('d-none')
     q6.classList.add('d-none')
     

    }else if(e.target.classList.contains('s3')){
      e.target.parentElement.classList.add('active')
      s1.parentElement.classList.remove('active')
     s2.parentElement.classList.remove('active')
     s4.parentElement.classList.remove('active')
     s5.parentElement.classList.remove('active')
     s6.parentElement.classList.remove('active') 
     q1.classList.add('d-none')
     q2.classList.add('d-none')
     q3.classList.remove('d-none')
     q4.classList.add('d-none')
     q5.classList.add('d-none')
     q6.classList.add('d-none')
     
        
    }else if(e.target.classList.contains('s4')){
      e.target.parentElement.classList.add('active')
      s1.parentElement.classList.remove('active')
      s3.parentElement.classList.remove('active')
      s2.parentElement.classList.remove('active')
      s5.parentElement.classList.remove('active')
      s6.parentElement.classList.remove('active') 
     q1.classList.add('d-none')
     q2.classList.add('d-none')
     q3.classList.add('d-none')
     q4.classList.remove('d-none')
     q5.classList.add('d-none')
     q6.classList.add('d-none')
     
    }else if(e.target.classList.contains('s5')){
      e.target.parentElement.classList.add('active')
      s1.parentElement.classList.remove('active')
      s3.parentElement.classList.remove('active')
      s4.parentElement.classList.remove('active')
      s2.parentElement.classList.remove('active')
      s6.parentElement.classList.remove('active') 
     q1.classList.add('d-none')
     q2.classList.add('d-none')
     q3.classList.add('d-none')
     q4.classList.add('d-none')
     q5.classList.remove('d-none')
     q6.classList.add('d-none')
    }else if(e.target.classList.contains('s6')){
      e.target.parentElement.classList.add('active')
      s1.parentElement.classList.remove('active')
      s3.parentElement.classList.remove('active')
      s4.parentElement.classList.remove('active')
      s5.parentElement.classList.remove('active')
      s2.parentElement.classList.remove('active')
     q1.classList.add('d-none')
     q2.classList.add('d-none')
     q3.classList.add('d-none')
     q4.classList.add('d-none')
     q5.classList.add('d-none')
     q6.classList.remove('d-none') }
     else if(e.target.classList.contains('s1')){
      e.target.parentElement.classList.add('active')
      s2.parentElement.classList.remove('active')
      s3.parentElement.classList.remove('active')
      s4.parentElement.classList.remove('active')
      s5.parentElement.classList.remove('active')
      s6.parentElement.classList.remove('active') 
     q1.classList.remove('d-none')
     q2.classList.add('d-none')
     q3.classList.add('d-none')
     q4.classList.add('d-none')
     q5.classList.add('d-none')
     q6.classList.add('d-none') }
    })
    $(document).ready(function(){
        
    })