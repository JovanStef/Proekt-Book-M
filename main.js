$(document).ready(function () {
    var events = []
function makeAnEvent(){
    var someEvent = new eventCreator();
    someEvent.createEvent();
    someEvent.makeHtml();
    someEvent.clearFields();
    someEvent.checkboxValue();
    
    events.push(someEvent);
    

}
var writeBtn = $('#write');

$(writeBtn).click(makeAnEvent);





});
