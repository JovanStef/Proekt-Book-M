var eventWrapper = $('<div>').attr('class', 'flex').attr('id', 'wrapper');

var master = $('#master');
master.append(eventWrapper);


function makeBaseHtml() {
    var headerHolder = $('<div>').attr('class', 'header flex');
    var logoHolder = $('<div>').attr('class', 'logo-holder');
    var logo = $('<img>').attr('class', 'logo').attr('src', ' http://revocationband.com/images/content/logo_mobile_white.png');
    var header = $('<h1>').attr('class', 'head').text('# bOOk-M #');
    var menuHolder = $('<div>').attr('class', 'menu-holder flex');
    var menu = $('<ul>').attr('class', 'menu flex');
    var addDialogIcon = $('<div>').attr('class', 'dialog-add flex').attr('id', 'dialog-add').html('<i class="fas fa-id-badge"></i>');
    var menuItems = ["Home", "FAQ", "Contact"];

    for (var i = 0; i < menuItems.length; i++) {

        menu.append($('<li>').attr('class', 'menu-item').text(menuItems[i]));

    }
    menu.append(addDialogIcon);
    menuHolder.append(menu);
    logoHolder.append(logo);
    headerHolder.append(header);
    headerHolder.append(logoHolder);

    headerHolder.append(menuHolder);

    master.append(headerHolder);
}

function decoSidebar() {
    var decoSide = $('<div>').attr('class', 'deco flex').text(' ');

    $('body').prepend(decoSide);

}

function makeFaqHtml() {
    var faqWrapper = $('<div>').attr('class', 'faqWrapper').css('display', 'none');
    var faqHeader = $('<h3>').attr('class', 'head').text('FAQ');
    $(faqWrapper).append(faqHeader);
    for (var i = 0; i < 10; i++) {
        var faqDiv = $('<div>').attr('class', 'faq-div-' + i);
        var qhead = $('<h3>').attr('class', 'question-' + i).text('Q ' + i + ': Lorem ipsum dolor sit amet').css('cursor','pointer');
        var pAnswer = $('<p>').attr('class', 'answer-' + i).text('A ' + i + ': Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.').css('display','none');
        $(faqDiv).append(qhead);
        $(faqDiv).append(pAnswer);
        $(faqWrapper).append(faqDiv);

        $(qhead).on('click', (event) => {
            var clicker = $(event.target).attr('class');
            var clickerIndex = clicker.split('-');
            var target = $('.answer-' + clickerIndex[1]);
            if(target.css('display') === 'block'){
                target.css('display', 'none');
            }
            else{
                target.css('display', 'block');
            }
            console.log(target);
        });
    };
    master.append(faqWrapper);
};

function makeContactHtml(){
    var contactWrapper = $('<div>').attr('class', 'contact-Wrapper flex ').css('display', 'none');
    var contactInfoWrapper = $('<div>').attr('class','contact-Info-Wrapper b50');
    var mapWrapper = $('<div>').attr('class','map-Wrapper b50');
    var map = $('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37501.05629120746!2d9.340420826649149!3d54.02378836229553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b3ea7e0a920bb1%3A0x4248963c6586900!2zV2Fja2VuLCDQk9C10YDQvNCw0L3QuNGY0LA!5e0!3m2!1smk!2smk!4v1568039383903!5m2!1smk!2smk" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>');
    var contactHeader = $('<h3>').attr('class', 'head').text('CONTACT');
    var inputName = $('<input type="text" placeholder=" Name"/>').attr('class', 'inputF');
    var inputSurname = $('<input type="text" placeholder=" Surname"/>').attr('class', 'inputF');
    var inputPhone = $('<input type="tel" placeholder=" Phone"/>').attr('class', 'inputF');
    var inputEmail = $('<input type="text" placeholder=" e-mail"/>').attr('class', 'inputF').attr('id', 'email');
    var inputComment = $('<textarea rows="4" cols="50" name="comment" placeholder=" Comment"/>').attr('class', 'inputF input-Area');
    var sendBtn = $('<button>Send</button>').attr('id', 'send');
    
    var elementsToAppend= [contactHeader,inputName,inputSurname,inputPhone,inputEmail,inputComment,sendBtn];

    for (var i = 0; i < elementsToAppend.length; i++) {
        contactInfoWrapper.append(elementsToAppend[i]);
    }
    mapWrapper.append(map);
    contactWrapper.append(contactInfoWrapper);
    contactWrapper.append(mapWrapper);
    master.append(contactWrapper);
}

function menuEventListeners() {
    var contactWrapper= $('.contact-Wrapper');
    var faqWrapper = $('.faqWrapper');
    var home = $('.menu-item')[0];
    var faq = $('.menu-item')[1];
    var contact = $('.menu-item')[2];

    var workInProgress = $('<h1>').text('WORK IN PROGRESS').css({
        'position': 'absolute',
        'left': '40vw',
        'top': '50vh',
        'color': 'white',
        'display': 'none'
    });
    $('body').append(workInProgress);


    $(home).on('click', () => {
        faqWrapper.css('display', 'none');
        contactWrapper.css('display', 'none');
        eventWrapper.css('display', 'flex');
    });

    $(faq).on('click', () => {
        eventWrapper.css('display', 'none');
        contactWrapper.css('display', 'none');
        faqWrapper.css('display', 'block');
    });

    $(contact).on('click', () => {
        faqWrapper.css('display', 'none');
        eventWrapper.css('display', 'none');
        contactWrapper.css('display', 'flex');
    });

};
makeFooter= ()=>{
    var clearFix= $('<div>').attr('class','clearfix');
    $('body').append(clearFix);
var footer = $('<div>').attr('class','footer flex');

var allRights =  $('<div>').attr('class','allRights flex');
var title = $('<p>').attr('class','title').text('All rights * VERKA PROGRAMERKA * reserved ').append('<i class="far fa-copyright"></i>');

var imgHolder = $('<div>').attr('class','footer-img-Holder flex');
var img = $('<img>').attr('class', 'footer-img').attr('src','https://i.dlpng.com/static/png/1720104-witch-png-free-download-witch-png-1024_631_preview.png');

var socialHolder = $('<div>').attr('class','social flex');
var fbicon=$('<i class="fab fa-facebook-square"></i>');
var isnstaicon=$('<i class="fab fa-instagram"></i>');
var linkedicon=$('<i class="fab fa-linkedin"></i>');

allRights.append(title);

imgHolder.append(img);

socialHolder.append(fbicon);
socialHolder.append(isnstaicon);
socialHolder.append(linkedicon);

footer.append(allRights);
footer.append(imgHolder);
footer.append(socialHolder);
$('body').append(footer);
};