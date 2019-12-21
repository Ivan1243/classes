class Ship {
    constructor(name, latitude, longtude,){
        this.name=name;
        this.latitude=latitude;
        this.longtude=longtude;
        this.status=false
    }
    start(){
        console.log(" Корабль поплыл ")
    }
    move(){
        console.log( " Корабль " + this.name + " Он находится на широте "+ this.latitude + " и на долготе " + this.longtude); 
    }
    stop(){
        console.log(" Корабль остановился ")
        }
}
var ship=new Ship("Nol", "23°27′30″", "25°25′42″", "25°23′31″", "27°25′46″");
ship.start();
ship.move();
ship.stop();


