



function buyPopUp(totalcost , eventName, eventLocation , eventDate) {
    var buyPopupHolder = $('<div>').attr('id', 'buy-popup-holder').attr('class', 'input').css({ 'display': 'block' });
    var inputName = $('<input type="text" placeholder=" Name"/>').attr('class', 'inputF');
    var inputSurname = $('<input type="text" placeholder=" Surname"/>').attr('class', 'inputF');
    var inputEmail = $('<input type="text" placeholder=" e-mail"/>').attr('class', 'inputF');

    var totalTicketCost = $('<h3>').attr('class', 'flex').text(totalcost + ' eur');
    var eName = $('<h3>').attr('class', 'flex').text(eventName);
    var eLocation = $('<h3>').attr('class', 'flex').text(eventLocation);
    var eDate = $('<h3>').attr('class', 'flex').text(eventDate);
    var close = $('<div>').attr('class', 'close-btn-buy flex').attr('id', 'close-buy').html('<i class="fas fa-times-circle"></i>').css('cursor', 'pointer');

    var proceed = $('<button>Proceed</button>').attr('id','proceed');
    close.on('click', () => {
        buyPopupHolder.css({ 'display': 'none' })
    })
    var master = $('#master');
    buyPopupHolder.append(close);
    
    buyPopupHolder.append(totalTicketCost);
    buyPopupHolder.append(eName);
    buyPopupHolder.append(eLocation);
    buyPopupHolder.append(eDate);

    buyPopupHolder.append(inputSurname);
    buyPopupHolder.append(inputName);
    buyPopupHolder.append(inputEmail);
    buyPopupHolder.append(proceed);
    master.append(buyPopupHolder);
}