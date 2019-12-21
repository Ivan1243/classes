class Shop {
    constructor(name, city, goods){
        this.name=name;
        this.city=city
        this.count=0;
        this.goods=goods;
    }
    info() {
        console.log(" Это магазин "+ this.name + " Он в городе " + this.city + " Сейчас в нем " + this.count + " табуреток " + " В нем продаются " + this.goods);
    }
    incCount(){
        this.count++;
    }
    addCount(c){
        this.count+c;
    }
    addGood(name){
        this.goods.push(name);
    }
}
var shop=new Shop("Fish Shop", "Москва", ["books", "pens"]);
shop.info();
shop.name="Books"
shop.info();
shop.incCount();
shop.info();
shop.incCount();
shop.info();
shop.addCount(4);
shop.addGood("balls")
shop.info();
var box = ["Pens", "Pencils"];
console.log(box[0]);
box.push("Eraser");
console.log(box[1]);
