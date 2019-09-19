$(document).ready(function () {

    setAdmin();
    makeBaseHtml();
    makeFaqHtml();
    makeContactHtml()
    decoSidebar();
    createEventPopUp();
    logInInput();
    signUpInput();
    menuEventListeners();
    makeFooter(); 
    function makeRandomEvents(){
        var randomEvents = new EventCreator();
        randomEvents.bands();
        console.log(randomEvents);
        
    };
    makeRandomEvents();
    var events = [];
    var writeBtn = $('#write');
    var deleteBtn = $('#delete');
    var dialogAddEvent = $('#dialog-add');
    var logInBtn = $('#log-In');
     

function makeAnEvent(){
    var someEvent = new EventCreator();
    someEvent.createEvent();
    someEvent.makeHtml();
    events.push(someEvent);
    $('#event-dialog-holder').children(':input').val('');
    console.log(events);
};
function deleteEvent(){
    var deleteEventNo = $('#delete-event').val();
    $('.event-holder-'+ deleteEventNo).css({'display':'none'});
    events.pop(deleteEventNo);
    $('#delete-event').val('');
    console.log(deleteEventNo);
    console.log($(".event-holder").length);
};

$(deleteBtn).on('click',deleteEvent);

$(writeBtn).on('click',makeAnEvent);

$(dialogAddEvent).on('click',()=>{
     $('.curtain-L').css({'display':'block'});
    
});

$(logInBtn).on('click',()=>{
    var selector = $('.logIn-Input-Holder');
    var passInput = $('#PasswordInput');
    var name = $('#User-Name-Input').val();
    var pass = $('#PasswordInput').val();
    
    if(checkEmptyInput(selector) && $(passInput).val()!==''){
        if(checkAdmin(name,pass)==='admin'){
    $('#event-dialog-holder').css({'display':'block'});
    $('.eNumber').css({'display':'block'});
    $('.curtain-L').css({'display':'none'});
    }
    else if(checkAdmin(name,pass)==='user'){
        $('.curtain-L').css({'display':'none'});
        
    }
    else {
        alert('Please sign up');
        console.log('Access denied');
    }
}
else{
    alert("All fields are required");
}
    $('.logIn-Input-Holder').children(':input').val('');
});

$('.sign-up').on('click', ()=>{
    $('.curtain-L').css('display','none');
    $('.curtain-S').css('display','block');
    
});
 
$('#Sign-Up').on('click',()=>{
    var selector = $('.signIn-Input-Holder');
    var passInput = $('#PasswordInput-signIn');
    var name = $('#User-Name-Input-signIn').val();
    var pass = $('#PasswordInput-signIn').val();
    var email = $('#email-signIn').val();
    if(checkEmptyInput(selector) && $(passInput).val()!=='' && validateEmail(email)){
        if(checkUser(name, email)){
           setNewUser(name,pass,email)     
        }
          
    }
   

        
});




});
