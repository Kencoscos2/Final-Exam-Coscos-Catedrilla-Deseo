class Background {
    constructor(imagePath, width, height) {
        this.image = new Image();
        this.image.src = imagePath;
        this.image.width = width;
        this.image.height = height;
       
    }

    update() {
       

    }

    draw() {
       
    context.drawImage(
           this.image, 
           0, 0, 
           this.image.width, 
           this.image.height);
    
    }
}