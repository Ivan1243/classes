class Ship {
    constructor(name, latitude, longtude,){
        this.name=name;
        this.latitude=latitude;
        this.longtude=longtude;
    }
    start(){
        this.status=true;
        console.log(" Корабль поплыл ")
    }
    move(latitude, longtude){
        this.latitude=latitude;
        this.longtude=longtude;
        console.log( " Корабль " + this.name + " Он находится на широте "+ this.latitude + " и на долготе " + this.longtude + " Корабль " + this.name + " Он находится на широте "+ this.latitude + " и на долготе " + this.longtude);
    }
    stop(){
        this.status=false;
        console.log(" Корабль остановился ")
    }
    isInTheWay(){
        return status
    }
}
var ship=new Ship("Nol", 35, 25);
ship.start();
ship.move(27, 34);
ship.stop();


