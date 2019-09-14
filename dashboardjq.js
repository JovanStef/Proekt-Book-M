
function EventCreator() {
    this.eventsC = [];
    var master = $('#master');
    var eventName = $('#event-name').val();
    var eventDate = $('#event-date').val();
    var eventLocation = $('#event-location').val();
    var eventImage = $('#event-image').val();
    var parterPrice = $('#parter-price').val();
    var fanPitPrice = $('#FanPit-price').val();
    var vipPrice = $('#vip-price').val();
   
    this.createEvent = function () {
        this.newEvent = new Event(eventName, eventDate, eventLocation, eventImage, 0);
        this.newEvent.setPrices(parterPrice, fanPitPrice, vipPrice);
        this.eventsC.push(this.newEvent);
    };
    
    var eventWrapper = $('#wrapper');

    this.makeHtml = function () {
        var indexMaker = $(".event-holder").length;
        var eventHolder = $('<div>').attr('class', 'event-holder event-holder-' + indexMaker, 'flex');
        var eventNumber = $('<p>').attr('class', 'eNumber').text("#" + indexMaker).css({ 'display': 'none' });
        var eName = $('<h1>').attr('class', 'e-name e-name-' + indexMaker).text(eventName);
        var eDate = $('<h3>').attr('class', 'e-date e-date-' + indexMaker).text(eventDate);

        var eLocationHolder = $('<div>').attr('class', 'e-location-holder flex');
        var eLocation = $('<h2>').attr('class', 'e-location e-location-' + indexMaker).text(eventLocation);
        var qty = $('<input type="number" min="1" max="10" />').attr('id', 'qty-' + indexMaker).val(1);
        var buyButton = $('<button>BUY</button>').attr('class', 'buy-button flex').attr('id', 'cart-' + indexMaker);

        var eImgHolder = $('<div>').attr('class', 'e-img-holder flex');
        var eImg = $('<img>').attr('class', 'e-img').attr('src', eventImage);

        var priceHolder = $('<div>').attr('class', 'price-holder flex price-holder-' + indexMaker);

        var eur = $('<p>').attr('class', 'eur').text(' eur');
        var eur2 = $('<p>').attr('class', 'eur').text(' eur');
        var eur3 = $('<p>').attr('class', 'eur').text(' eur');
        var parName = $('<p>').attr('class', 'pNames').text('Parter ');
        var fanName = $('<p>').attr('class', 'pNames').text('Fan Pit ');
        var vipName = $('<p>').attr('class', 'pNames').text('Vip ');

        var partereHolder = $('<div>').attr('class', 'prices-holder flex');
        var pPcheck = $('<input type="radio" name="radioBtn" />').attr('id', 'parter-check-' + indexMaker).attr('class', 'checkbox-' + $(".event-holder").length);
        var pPrice = $('<p>').attr('class', 'Pprices-' + indexMaker).text(parterPrice).prepend(parName).append(eur);

        var fanpitHolder = $('<div>').attr('class', 'prices-holder flex');
        var fPcheck = $('<input type="radio" name="radioBtn" />').attr('id', 'fanpit-check-' + indexMaker).attr('class', 'checkbox-' + $(".event-holder").length);
        var fPPrice = $('<p>').attr('class', 'Fprices-' + indexMaker).text(fanPitPrice).prepend(fanName).append(eur2);

        var vipHolder = $('<div>').attr('class', 'prices-holder flex');
        var vPcheck = $('<input type="radio" name="radioBtn" />').attr('id', 'vip-check-' + indexMaker).attr('class', 'checkbox-' + $(".event-holder").length);
        var vPrice = $('<p>').attr('class', 'Vprices-' + indexMaker).text(vipPrice).prepend(vipName).append(eur3);


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
        eventWrapper.append(eventHolder)
        master.append(eventWrapper);

        var cart = $('#cart-' + indexMaker);

        $(cart).on('click', (event) => {
            var rez = $(event.target).attr('id');
            var splitRez = rez.split('-');
            var ticketCost = this.checkboxValue(splitRez[1]);
            var numOfTickets = this.qtyValue(splitRez[1]);
            var totalTicketCost = numOfTickets * ticketCost;
            
            var namePop = $('.e-name-' + indexMaker).text();
            var locationPop = $('.e-location-' + indexMaker).text();
            var datePop = $('.e-date-' + indexMaker).text();

            var rezClass = $(event.target).siblings('h2').attr('class');
                var splitRezClass = rezClass.split('-');
                var namePop = $('.e-name-' + splitRezClass[3]).text();
                var locationPop = $('.e-location-' + splitRezClass[3]).text();
                var datePop = $('.e-date-' + splitRezClass[3]).text();
                console.log('.price-holder-' + splitRezClass[3]);
                var selector= $('.price-holder-' + splitRezClass[3]);
                
                
                
                if (checkEmptyInputRadio(selector)) {
                    buyPopUp(totalTicketCost, namePop, locationPop, datePop);

                    return totalTicketCost;
                }

        })


    }

    this.bands = async () => {
        var bands = this.finalBands = new ReadyBands();
        var firstband = await this.finalBands.getReadyBands();

        for (var i = 0; i < firstband.length; i++) {
            var randomDay = getRandomNumber(1, 30);
            var randomMonth = '0' + getRandomNumber(1, 9);
            var randomDate = randomDay + '.' + randomMonth + '.' + '2020';
            var randomLocation = getRandomNumber(1, 26);
            var allCity = ['Austria', 'Belgium', 'Bulgaria', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom'];
            var randomCity = allCity[randomLocation];

            var prices = [10, 20, 50];
            var parter = prices[0] + getRandomNumber(1, 9);
            var fan = prices[1] + getRandomNumber(1, 9);
            var vip = prices[2] + getRandomNumber(1, 9);

            this.i = new Event(firstband[i].name, randomDate, randomCity, bandImage, 0);
            this.i.setPrices(parterPrice, fanPitPrice, vipPrice);

            var bandImage = await bands.getReadyAlbumCover(firstband[i].name);
            var indexMaker = $(".event-holder").length;
            var eventHolder = $('<div>').attr('class', 'event-holder event-holder-' + indexMaker, 'flex');
            var eventNumber = $('<p>').attr('class', 'eNumber').text('#' + indexMaker).css({ 'display': 'none' });
            var eName = $('<h1>').attr('class', 'e-name e-name-' + indexMaker).text(firstband[i].name);
            var eDate = $('<h3>').attr('class', 'e-date e-date-' + indexMaker).text(randomDate);

            var eLocationHolder = $('<div>').attr('class', 'e-location-holder flex');
            var eLocation = $('<h2>').attr('class', 'e-location e-location-' + indexMaker).text(randomCity);
            var qty = $('<input type="number" min="1" max="10" />').attr('id', 'qty-' + indexMaker).val(1);
            var buyButton = $('<button>BUY</button>').attr('class', 'buy-button flex').attr('id', 'cart-' + indexMaker);

            var eImgHolder = $('<div>').attr('class', 'e-img-holder flex');
            var eImg = $('<img>').attr('class', 'e-img').attr('src', bandImage);

            var priceHolder = $('<div>').attr('class', 'price-holder flex price-holder-' + indexMaker);

            var eur = $('<p>').attr('class', 'eur').text(' eur');
            var eur2 = $('<p>').attr('class', 'eur').text(' eur');
            var eur3 = $('<p>').attr('class', 'eur').text(' eur');
            var parName = $('<p>').attr('class', 'pNames').text('Parter ');
            var fanName = $('<p>').attr('class', 'pNames').text('Fan Pit ');
            var vipName = $('<p>').attr('class', 'pNames').text('Vip ');

            var partereHolder = $('<div>').attr('class', 'prices-holder flex prices-holder');
            var pPcheck = $('<input type="radio" name="radioBtn" />').removeAttr("checked").attr('id', 'parter-check-' + indexMaker).attr('class', 'checkbox-' + $(".event-holder").length);
            var pPrice = $('<p>').attr('class', 'Pprices-' + indexMaker).text(parter).prepend(parName).append(eur);

            var fanpitHolder = $('<div>').attr('class', 'prices-holder flex');
            var fPcheck = $('<input type="radio" name="radioBtn" checked="uchecked"/>').attr('id', 'fanpit-check-' + indexMaker).attr('class', 'checkbox-' + $(".event-holder").length);
            var fPPrice = $('<p>').attr('class', 'Fprices-' + indexMaker).text(fan).prepend(fanName).append(eur2);

            var vipHolder = $('<div>').attr('class', 'prices-holder flex');
            var vPcheck = $('<input type="radio" name="radioBtn" checked="uchecked"/>').attr('id', 'vip-check-' + indexMaker).attr('class', 'checkbox-' + $(".event-holder").length);
            var vPrice = $('<p>').attr('class', 'Vprices-' + indexMaker).text(vip).prepend(vipName).append(eur3);


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
            eventWrapper.append(eventHolder)
            master.append(eventWrapper);

            var cart = $('#cart-' + indexMaker);

            $(cart).on('click', (event) => {
                cart.children(".fas fa-shopping-cart").off('click');
                var rez = $(event.target).attr('id');
                var splitRez = rez.split('-');
                var ticketCost = this.checkboxValue(splitRez[1]);
                var numOfTickets = this.qtyValue(splitRez[1]);
                var totalTicketCost = numOfTickets * ticketCost;
                console.log('total cost ' + totalTicketCost);
                var rezClass = $(event.target).siblings('h2').attr('class');
                var splitRezClass = rezClass.split('-');
                var namePop = $('.e-name-' + splitRezClass[3]).text();
                var locationPop = $('.e-location-' + splitRezClass[3]).text();
                var datePop = $('.e-date-' + splitRezClass[3]).text();
                console.log($(splitRezClass)[3]);
                var selector= $('.price-holder-' + splitRezClass[3]);
                
                
                
                if (checkEmptyInputRadio(selector)) {
                    buyPopUp(totalTicketCost, namePop, locationPop, datePop);

                    return totalTicketCost;
                }

            });

        }
        console.log(firstband.length);
        return firstband
    }

    this.checkboxValue = function (x) {
        if ($('#parter-check-' + x).is(":checked")) {
            var valParter = $('.Pprices-' + x).text().split(' ')[1];
            console.log(valParter);
            return valParter;
        }
        else if ($('#fanpit-check-' + x).is(":checked")) {
            var valFan = $('.Fprices-' + x).text().split(' ')[2];
            console.log(valFan);
            return valFan;
        }
        else if ($('#vip-check-' + x).is(":checked")) {
            var valVip = $('.Vprices-' + x).text().split(' ')[1];
            console.log(valVip);
            return valVip;
        }
        else {
            // alert("Please choose your ticket type");
            // return false
        }
    }

    this.qtyValue = function (x) {
        console.log($('#qty-' + x).val());
        return $('#qty-' + x).val();
    }



}






