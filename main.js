$(document).ready(function () {
    makeBaseHtml();
    decoSidebar();
    createEventPopUp();
    logInInput();
    menuEventListeners();
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
    
    if(checkEmptyInput(selector) && $(passInput).val()!==''){
    $('#event-dialog-holder').css({'display':'block'});
    $('.eNumber').css({'display':'block'});
    $('.curtain-L').css({'display':'none'});
    }
    else{
        alert("All fields are required");
    }
    $('.logIn-Input-Holder').children(':input').val('');
});

// var api1 = new Bands();

// console.log(api1.getFinalistOfBands())




});
