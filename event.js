function Event(name, date, place, image , prices) {
    this.name = name;
    this.date = date;
    this.place = place;
    this.image = image;
    this.prices = prices;
     
    this.getName = function(){
        return this.name;
    };
    this.getDate = function(){
        return this.date;
    };
    this.getPlace = function(){
        return this.place;
    };
    this.getImage = function(){
        return this.image;
    };
    
    this.getPrices = function(){
        return this.prices 
    };
    this.setName = function(newName){
        this.name = newName;
    };
    this.setDate = function(newDate){
        this.date = newDate;
    };
    this.setPlace = function(newPlace){
        this.place = newPlace;
    };
    this.setImage = function(newImage){
        this.image = newImage;
    };
    this.setPrices = function(parter, fanPit, vip){
        this.prices= new Prices (parter, fanPit, vip);
    };
}