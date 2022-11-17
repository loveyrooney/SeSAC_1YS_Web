class Car {
    constructor(color){   //생성자
        this.color = color;
        this.isDoor = true;
    }
    move(){
        console.log("go");
    }
    stop(){
        console.log("stop");
    }
    returnColor(){
        return this.color;
    }
}
module.exports = {Car};
