
function eventCreator() {
    this.eventsC=[];
    var master = $('#master');
    var eventName = $('#event-name').val();
    var eventDate = $('#event-date').val();
    var eventLocation = $('#event-location').val();
    var eventImage = $('#event-image').val();
    var parterPrice = $('#parter-price').val();
    var fanPitPrice = $('#FanPit-price').val();
    var vipPrice = $('#vip-price').val();

    this.parterPrice = parterPrice;

    this.createEvent = function () {
        this.newEvent = new Event(eventName, eventDate, eventLocation, eventImage, 0);
        this.newEvent.setPrices(this.parterPrice, fanPitPrice, vipPrice);
        this.eventsC.push(this.newEvent);
        


    };

    this.clearFields = function () {
        $('#event-name').val('');
        $('#event-date').val('');
        $('#event-location').val('');
        $('#event-image').val('');
        $('#parter-price').val('');
        $('#FanPit-price').val('');
        $('#vip-price').val('');
    }
    var indexMaker = $(".event-holder").length
    this.makeHtml = function () {
        var eventHolder = $('<div>').attr('class', 'event-holder flex');
        var eventNumber = $('<p>').attr('class', 'eNumber').text("#" + indexMaker);
        var eName = $('<h1>').attr('class', 'e-name-'+indexMaker).text(eventName);
        var eDate = $('<h3>').attr('class', 'e-date-'+indexMaker).text(eventDate);

        var eLocationHolder = $('<div>').attr('class', 'e-location-holder flex');
        var eLocation = $('<h2>').attr('class', 'e-location-'+indexMaker).text(eventLocation);
        var qty = $('<input type="number" min="1" max="10" />').attr('id', 'qty-'+indexMaker).val(1);
        var buyButton = $('<div>').attr('class', 'buy-button flex').attr('id', 'cart-'+indexMaker).html('<i id="shoping-cart" class="fas fa-shopping-cart"></i>').css('cursor', 'pointer');

        var eImgHolder = $('<div>').attr('class', 'e-img-holder flex');
        var eImg = $('<img>').attr('class', 'e-img').attr('src', eventImage);

        var priceHolder = $('<div>').attr('class', 'price-holder flex');

        var eur = $('<p>').attr('class', 'eur').text(' eur');
        var eur2 = $('<p>').attr('class', 'eur').text(' eur');
        var eur3 = $('<p>').attr('class', 'eur').text(' eur');
        var parName = $('<p>').attr('class', 'pNames').text('Parter ');
        var fanName = $('<p>').attr('class', 'pNames').text('Fan Pit ');
        var vipName = $('<p>').attr('class', 'pNames').text('Vip ');

        var partereHolder = $('<div>').attr('class', 'prices-holder flex');
        var pPcheck = $('<input type="radio" name="radioBtn" />').attr('id', 'parter-check-'+indexMaker).attr('class', 'checkbox-'+$(".event-holder").length );
        var pPrice = $('<p>').attr('class', 'Pprices-'+indexMaker).text(parterPrice).prepend(parName).append(eur);

        var fanpitHolder = $('<div>').attr('class', 'prices-holder flex');
        var fPcheck = $('<input type="radio" name="radioBtn" />').attr('id', 'fanpit-check-'+indexMaker).attr('class', 'checkbox-'+$(".event-holder").length);
        var fPPrice = $('<p>').attr('class', 'Fprices-'+indexMaker).text(fanPitPrice).prepend(fanName).append(eur2);

        var vipHolder = $('<div>').attr('class', 'prices-holder flex');
        var vPcheck = $('<input type="radio" name="radioBtn" />').attr('id', 'vip-check-'+indexMaker).attr('class', 'checkbox-'+$(".event-holder").length);
        var vPrice = $('<p>').attr('class', 'Vprices-'+indexMaker).text(vipPrice).prepend(vipName).append(eur3);

        eventHolder.append(eName);
        eventHolder.append(eDate);

        eLocationHolder.append(eLocation);
        eLocationHolder.append(qty);
        eLocationHolder.append(buyButton);
        eventHolder.append(eLocationHolder);

        eImgHolder.append(eImg);
        eventHolder.append(eImgHolder);

        partereHolder.append(pPcheck);
        partereHolder.append(pPrice);
        priceHolder.append(partereHolder);

        fanpitHolder.append(fPcheck);
        fanpitHolder.append(fPPrice);
        priceHolder.append(fanpitHolder);

        vipHolder.append(vPcheck);
        vipHolder.append(vPrice);
        priceHolder.append(vipHolder);

        eventHolder.append(eventNumber);
        eventHolder.append(priceHolder);
        master.append(eventHolder);

        var cart = $('#cart-'+indexMaker);
        
        $(cart).on('click',(event) => {
            cart.children(".fas fa-shopping-cart").off('click');
            var rez = $(event.target).attr('id');
           var splitRez =  rez.split('-');
        var ticketCost =  this.checkboxValue(splitRez[1]);
        var numOfTickets = this.qtyValue(splitRez[1]);
            var totalTicketCost = numOfTickets*ticketCost;
            console.log('total cost ' +totalTicketCost);
            var namePop = $('.e-name-'+indexMaker).text();
            var locationPop = $('.e-location-'+indexMaker).text();
            var datePop = $('.e-date-'+indexMaker).text();
            buyPopUp(totalTicketCost , namePop,locationPop , datePop);
            return totalTicketCost;
           

        });

    }

    this.checkboxValue = function (x) {
        if ($('#parter-check-'+x).is(":checked")) {
            var valParter = $('.Pprices-'+x).text().split(' ')[1];
            console.log(valParter);
            return valParter;
        }
        else if ($('#fanpit-check-'+x).is(":checked")) {
            var valFan = $('.Fprices-'+x).text().split(' ')[2];
            console.log(valFan);
            return valFan;
        }
        else if ($('#vip-check-'+x).is(":checked")) {
            var valVip = $('.Vprices-'+x).text().split(' ')[1];
            console.log(valVip);
            return valVip;
        }
    }
    
    this.qtyValue = function(x){
        console.log($('#qty-'+x).val());
        return $('#qty-'+x).val();
    }

  


}






