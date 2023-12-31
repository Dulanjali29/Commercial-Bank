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
   
    $('.nav_personal_bank,.nav_business_bank,.nav_non_resident_banking,.nav_services').hide();

$("#personal_bank").mouseover(function(){
    $("#personal_bank").css("color","#4972cf");
    $('.nav_business_bank,.nav_non_resident_banking,.nav_services').hide();
    $('.nav_personal_bank').show();


  
})
$("#business_bank").mouseover(function(){
    $("#business_bank").css("color","#4972cf");
    $('.nav_business_bank').show();
    $('.nav_personal_bank,.nav_non_resident_banking,.nav_services').hide();
  
})
$("#non_resident_banking").mouseover(function(){
    $("#non_resident_banking").css("color","#4972cf");
    $('.nav_non_resident_banking').show();
    $('.nav_personal_bank,.nav_business_bank,.nav_services').hide();
  
})
$("#services").mouseover(function(){
    $("#services").css("color","#4972cf");
    $('.nav_services').show();
    $('.nav_personal_bank,.nav_business_bank,.nav_non_resident_banking').hide();
  
})


})
$("#personal_bank").mouseout(function(){
    $("#personal_bank").css("color"," black");
  
    $('.nav_personal_bank,.nav_business_bank,.nav_non_resident_banking,.nav_services').hide(); 
  
})
$("#business_bank").mouseout(function(){
    $("#business_bank").css("color"," black");
    $('.nav_personal_bank,.nav_business_bank,.nav_non_resident_banking,.nav_services').hide(); 
  
})
$("#non_resident_banking").mouseout(function(){
    $("#non_resident_banking").css("color"," black");
    $('.nav_personal_bank,.nav_business_bank,.nav_non_resident_banking,.nav_services').hide(); 
  
})
$("#services").mouseout(function(){
    $("#services").css("color"," black");
    $('.nav_personal_bank,.nav_business_bank,.nav_non_resident_banking,.nav_services').hide(); 
  
})