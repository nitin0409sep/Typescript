abstract class TakePhoto {
  constructor(public cameraPhoto: string, public filter: string) {}

  abstract getSepia(): void; // No need to define implementation, as its a abstract method. But they are compulsory to be implemented by derived class

  getReelTime(): number {
    return 9;
  }
}

class Insta extends TakePhoto {
  constructor(
    public cameraPhoto: string,
    public filter: string,
    public burst: string
  ) {
    super(cameraPhoto, filter);
  }

  getSepia(): void {
    console.log("Abstract Method");
  }

  // @Override -- We can override that method if needed, if not then we can simply use that by creating obj of class
  //   getReelTime(): number {
  //     return 1;
  //   }
}

const objI = new Insta("name", "aa@.xom", "burst");

objI.getReelTime();
