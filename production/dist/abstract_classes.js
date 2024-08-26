"use strict";
class TakePhoto {
    constructor(cameraPhoto, filter) {
        this.cameraPhoto = cameraPhoto;
        this.filter = filter;
    }
    getReelTime() {
        return 9;
    }
}
class Insta extends TakePhoto {
    constructor(cameraPhoto, filter, burst) {
        super(cameraPhoto, filter);
        this.cameraPhoto = cameraPhoto;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Abstract Method");
    }
}
const objI = new Insta("name", "aa@.xom", "burst");
objI.getReelTime();
