var eventWrapper = $('<div>').attr('class', 'flex').attr('id','wrapper');
var master = $('#master');
master.append(eventWrapper);
function makeBaseHtml(){
    var headerHolder = $('<div>').attr('class','header flex');
    var logoHolder = $('<div>').attr('class','logo-holder');
    var logo = $('<img>').attr('class','logo').attr('src',' http://revocationband.com/images/content/logo_mobile_white.png');
    var header = $('<h1>').attr('class','head').text('# bOOk-M #');
    var menuHolder = $('<div>').attr('class', 'menu-holder flex');
    var menu = $('<ul>').attr('class', 'menu flex');
    var addDialogIcon = $('<div>').attr('class', 'dialog-add flex').attr('id', 'dialog-add').html('<i class="fas fa-id-badge"></i>');
    var menuItems = ["Home" , "FAQ", "Contact"];

    for (var i=0;i<menuItems.length; i++){

        menu.append($('<li>').attr('class','menu-item').text(menuItems[i]));

    }
    menu.append(addDialogIcon);
    menuHolder.append(menu);
    logoHolder.append(logo);
headerHolder.append(header);
    headerHolder.append(logoHolder);
    
    headerHolder.append(menuHolder);
    
    master.append(headerHolder);
}

function decoSidebar(){
    var decoSide = $('<div>').attr('class','deco flex').text(' ');

    $('body').prepend(decoSide);

}


function menuEventListeners(){
    var home = $('.menu-item')[0];
    var faq = $('.menu-item')[1];
    var contact = $('.menu-item')[2];

    var workInProgress = $('<h1>').text('WORK IN PROGRESS').css({
        'position':'absolute',
        'left':'40vw',
        'top':'50vh',
        'color':'white',
        'display':'none'
    });
    $('body').append(workInProgress);

    $(home).on('click', ()=>{
        eventWrapper.css('display', 'flex');
        workInProgress.css('display','none');       
    });

    $(faq).on('click', ()=>{
        eventWrapper.css('display', 'none');
       workInProgress.css('display','block');
    });

    $(contact).on('click', ()=>{
        eventWrapper.css('display', 'none');
        workInProgress.css('display','block');
    });

};