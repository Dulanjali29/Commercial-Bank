const mouseClick=()=>{
    var icon=document.getElementById('float-menu');
    if(icon.style.display=='none'){
        icon.style.display='block';
    }else{
        icon.style.display='none';
    }
}
const mouseOver=()=>{
    document.getElementById('hover-img').src='./assests/hover2.png'
}
const mouseOut=()=>{
    document.getElementById('hover-img').src='./assests/hover1.png'
}


$(document).ready(function(){
   
    $('.nav_personal_bank,.nav_business_bank',).hide();
})
$("#personal_bank").click(function(){
    $('.nav_business_bank').hide();
    $('.nav_personal_bank').show();
  
})
$("#business_bank").click(function(){
    $('.nav_business_bank').show();
    $('.nav_personal_bank').hide();
  
})
