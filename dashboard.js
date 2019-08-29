function eventCreator(){
    this.events = [];
    var master = document.getElementById('master');
    var eventName = document.getElementById('event-name').value;
    var eventDate = document.getElementById('event-date').value;
    var eventLocation = document.getElementById('event-location').value;
    var eventImage = document.getElementById('event-image').value;
    var parterPrice = "Parter " + document.getElementById('parter-price').value + ' eur';
    var fanPitPrice = "Fan Pit " + document.getElementById('FanPit-price').value + ' eur';
    var vipPrice = "VIP " + document.getElementById('vip-price').value + ' eur';

    // var eventsLength = this.events.length;

this.createEvent = function(){
    var newEvent = new Event (eventName, eventDate, eventLocation, eventImage , 0);
    newEvent.setPrices(parterPrice, fanPitPrice, vipPrice);
    this.events.push(newEvent);
    console.log(this.events)
    
};
this.clearFields = function(){
    document.getElementById('event-name').value ='';
    document.getElementById('event-date').value ='';
    document.getElementById('event-location').value ='';
    document.getElementById('event-image').value ='';
    document.getElementById('parter-price').value ='';
    document.getElementById('FanPit-price').value = '';
    document.getElementById('vip-price').value ='';
}
this.makeHtml = function(){
    
    var eventHolder = document.createElement('div');
    eventHolder.className = 'event-holder flex';

    var eventNumber = document.createElement('p');
    eventNumber.className = 'eNumber';
    eventNumber.innerHTML = "#" + document.getElementsByClassName("event-holder").length;

    var eName = document.createElement('h1');
    eName.className = 'e-name';
    eName.innerHTML = eventName;

    var eDate = document.createElement('h3');
    eDate.className = 'e-date';
    eDate.innerHTML = eventDate;

    var eLocationHolder = document.createElement('div');
    eLocationHolder.className = 'e-location-holder flex';

    var eLocation = document.createElement('h2');
    eLocation.className = 'e-location';
    eLocation.innerHTML = eventLocation;

    var buyButton = document.createElement('div');
    buyButton.className = 'buy-button flex';
    buyButton.innerHTML = '<i class="fas fa-shopping-cart"></i>';
     
    
    var eImgHolder = document.createElement('div');
    eImgHolder.className = 'e-img-holder flex';
    
    var eImg = document.createElement('img');
    eImg.className = 'e-img';
    eImg.src = eventImage;

    var priceHolder = document.createElement('div');
    priceHolder.className = 'price-holder flex';

    var partereHolder = document.createElement('div');
    partereHolder.className = 'parter-holder flex';

    var pPcheck = document.createElement('input');
    pPcheck.type='radio';
    pPcheck.name ='radioBtn';
    pPcheck.id = 'parter-check';
    pPcheck.className = 'checkbox';

    var pPrice = document.createElement('p');
    pPrice.className= 'prices';
    pPrice.innerHTML = parterPrice;

    var fanpitHolder = document.createElement('div');
    fanpitHolder.className = 'fanpit-holder flex';

    var fPcheck = document.createElement('input');
    fPcheck.type='radio';
    fPcheck.name ='radioBtn';
    fPcheck.id = 'fanpit-check';
    fPcheck.className = 'checkbox';

    var fPPrice = document.createElement('p');
    fPPrice.className = 'prices';
    fPPrice.innerHTML = fanPitPrice;

    var vipHolder = document.createElement('div');
    vipHolder.className = 'vip-holder flex';

    var vPcheck = document.createElement('input');
    vPcheck.type='radio';
    vPcheck.name ='radioBtn';
    vPcheck.id = 'vip-check';
    vPcheck.className = 'checkbox';
    
    var vPrice = document.createElement('p');
    vPrice.className = 'prices';
    vPrice.innerHTML = vipPrice;

    eventHolder.appendChild(eName);
    eventHolder.appendChild(eDate);

    eLocationHolder.appendChild(eLocation);
    eLocationHolder.appendChild(buyButton);
    eventHolder.appendChild(eLocationHolder);

    eImgHolder.appendChild(eImg);
    eventHolder.appendChild(eImgHolder);
    
    partereHolder.appendChild(pPcheck);
    partereHolder.appendChild(pPrice);
    priceHolder.appendChild(partereHolder);
    
    fanpitHolder.appendChild(fPcheck);
    fanpitHolder.appendChild(fPPrice);
    priceHolder.appendChild(fanpitHolder);
    
    vipHolder.appendChild(vPcheck);
    vipHolder.appendChild(vPrice);
    priceHolder.appendChild(vipHolder);
    
    eventHolder.appendChild(eventNumber);
    eventHolder.appendChild(priceHolder);
    master.appendChild(eventHolder);

}
    
this.log = function(){
    console.log(this.events,
    this.events[0].getName(),
    this.events[0].getDate(),
    this.events[0].getPlace(),
    this.events[0].getImage(),
    this.events[0].getPrices().getParter(),
    this.events[0].getPrices().getFanPit(),
    this.events[0].getPrices().getVip()
    )
};
}