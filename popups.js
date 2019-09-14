var master = $('#master');
var eventWrapper = $('#wrapper');

checkEmptyInput = (parrentSelector) => {
    var inputFields = $(parrentSelector).children(':text');
    for (var i = 0; i < inputFields.length; i++) {
        if ($(inputFields[i]).val() !== '') {
            console.log($(inputFields[i]).val());
            console.log(inputFields[i]);
        }
        else {
            alert("All fields are required");
            return false
        }
    }
    console.log('ALL GOOD');
    return true
}

checkEmptyInputRadio = (parrentSelector) => {
    var inputFields = $(parrentSelector).children("div:has(p)").children(":radio");
    for (var i = 0; i < inputFields.length; i++) {
         console.log(inputFields[i]);
        if ($(inputFields[i]).is(':checked')) {
            console.log('ALL GOOD');
            return true
        }
        else {
           
            
        }
        

    }
    console.log('Please choose your ticket type');
        alert("Please choose your ticket type");
    // console.log('ALL GOOD');
    
}


function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email)) {
        alert("Enter valid email");
        console.log('false');
        return false;
    } else {
        console.log('true');
        return true;
    }
}

function createEventPopUp() {

    var createEventPopUpHolder = $('<div>').attr('class', 'input').attr('id', 'event-dialog-holder').css({ 'display': 'none' });
    var eventNameInput = $('<input type="text" placeholder=" Event name"/>').attr('id', 'event-name').attr('class', 'inputF');
    var eventNameDateInput = $('<input type="text" placeholder=" Event date"/>').attr('id', 'event-date').attr('class', 'inputF');
    var br = $('<p>').text(' '); var br1 = $('<p>').text(' '); var br2 = $('<p>').text(' '); var br3 = $('<p>').text(' ');
    var eventLocationInput = $('<input type="text" placeholder=" Event location"/>').attr('id', 'event-location').attr('class', 'inputF');
    var eventImageInput = $('<input type="text" placeholder=" Event image URL"/>').attr('id', 'event-image').attr('class', 'inputF');
    var eventParterPriceInput = $('<input type="text" placeholder=" Parter price"/>').attr('id', 'parter-price').attr('class', 'inputP');
    var eventFanPitPriceInput = $('<input type="text" placeholder=" Fan pit price"/>').attr('id', 'FanPit-price').attr('class', 'inputP');
    var eventVipPriceInput = $('<input type="text" placeholder=" Vip price"/>').attr('id', 'vip-price').attr('class', 'inputP');
    var makeEventBtn = $('<button>Make Event</button>').attr('id', 'write');
    var hr = $('<hr>');
    var eventDeleteInput = $('<input type="text" placeholder=" Delete Event"/>').attr('id', 'delete-event').attr('class', 'inputP');
    var deleteEventBtn = $('<button>Delete Event</button>').attr('id', 'delete');
    var close = $('<div>').attr('class', 'close-btn-buy flex').attr('id', 'close-buy').html('<i class="fas fa-times-circle"></i>').css({ 'width': '100%' });

    var elementsToBeAppended = [close, eventNameInput, eventNameDateInput, br, eventLocationInput, eventImageInput, br1, eventParterPriceInput, eventFanPitPriceInput, eventVipPriceInput, br2, makeEventBtn, hr, eventDeleteInput, deleteEventBtn];

    eventWrapper.append(createEventPopUpHolder);

    for (var i = 0; i < elementsToBeAppended.length; i++) {
        createEventPopUpHolder.append(elementsToBeAppended[i]);
    }

    close.on('click', () => {
        createEventPopUpHolder.css({ 'display': 'none' });
        $('.eNumber').css({ 'display': 'none' });
    });

}



function buyPopUp(totalcost, eventName, eventLocation, eventDate) {
    var curtain = $('<div>').attr('class', 'curtain flex');
    var buyPopupHolder = $('<div>').attr('id', 'buy-popup-holder').attr('class', 'input flex').css({ 'display': 'block' });
    var text = $('<p>').text('Please provide valid info and confirm your purchase');
    var inputName = $('<input type="text" placeholder=" Name"/>').attr('class', 'inputF');
    var inputSurname = $('<input type="text" placeholder=" Surname"/>').attr('class', 'inputF');
    var inputEmail = $('<input type="text" placeholder=" e-mail"/>').attr('class', 'inputF').attr('id', 'email');
    var br = $('<hr>');

    var totalTicketCost = $('<h3>').attr('class', 'flex').text('Total ticket cost: ' + totalcost + ' eur');
    var eName = $('<h3>').attr('class', 'flex').text('Event: ' + eventName);
    var eLocation = $('<h3>').attr('class', 'flex').text('Location: ' + eventLocation);
    var eDate = $('<h3>').attr('class', 'flex').text('Date: ' + eventDate);
    var close = $('<div>').attr('class', 'close-btn-buy flex').attr('id', 'close-buy').html('<i class="fas fa-times-circle"></i>').css({ 'width': '100%' });

    var proceed = $('<button>Confirm</button>').attr('id', 'confirm');

    close.on('click', () => {
        curtain.css({ 'display': 'none' })
    });

    proceed.on('click', () => {
        var selector = $(buyPopupHolder);
        var email = $('#email').val();
        console.log(selector)
        console.log(inputEmail)
        if (checkEmptyInput(selector) && validateEmail(email)) {
            window.location = "https://www.paypal.com/us/home"
            curtain.css({ 'display': 'none' });
        }

    });

    buyPopupHolder.append(close);
    buyPopupHolder.append(text);

    buyPopupHolder.append(totalTicketCost);
    buyPopupHolder.append(eName);
    buyPopupHolder.append(eLocation);
    buyPopupHolder.append(eDate);

    buyPopupHolder.append(inputSurname);
    buyPopupHolder.append(inputName);
    buyPopupHolder.append(inputEmail);
    buyPopupHolder.append(br);
    buyPopupHolder.append(proceed);
    curtain.append(buyPopupHolder);
    master.append(curtain);
}



function logInInput() {
    var curtain = $('<div>').attr('class', 'curtain-L curtain flex').css({ 'display': 'none' });
    var logInInputHolder = $('<div>').attr('class', 'input logIn-Input-Holder flex').css({ 'display': 'block' });
    var br = $('<p>').text(' '); var br1 = $('<p>').text(' '); var br2 = $('<p>').text(' ');
    var text = $('<p>').text('Log in to add new events');
    var user = $('<input type="text" placeholder=" Username"/>').attr('class', 'inputF').attr('id', 'User-Name-Input');
    var password = $('<input type="password" placeholder=" Password"/>').attr('class', 'inputF').attr('id', 'PasswordInput');
    var close = $('<div>').attr('class', 'close-btn-buy flex').attr('id', 'close-buy').html('<i class="fas fa-times-circle"></i>').css({ 'width': '100%' });

    var proceed = $('<button>Log In</button>').attr('id', 'log-In');

    var elementsToBeAppended = [close, text, br, user, br1, password, br2, proceed];

    for (var i = 0; i < elementsToBeAppended.length; i++) {
        logInInputHolder.append(elementsToBeAppended[i]);
    }
    curtain.append(logInInputHolder);
    master.append(curtain);

    close.on('click', () => {
        logInInputHolder.children(':input').val('');
        curtain.css({ 'display': 'none' })
    });



}