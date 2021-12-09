class Player {

    constructor (posX , posY) {

        this.spritesheet_dIdle = new Image()
        this.spritesheet_dIdle.src = 'Asset/idle/downIdle.png'

        this.spritesheet_lIdle = new Image()
        this.spritesheet_lIdle.src = 'Asset/idle/leftIdle.png'

        this.spritesheet_uIdle = new Image()
        this.spritesheet_uIdle.src = 'Asset/idle/upIdle.png'

        this.spritesheet_rIdle = new Image()
        this.spritesheet_rIdle.src = 'Asset/idle/rightIdle.png'

        this.spritesheet_down = new Image()
        this.spritesheet_down.src = 'Asset/downWalk/downSpritesheet.png'

        this.spritesheet_right = new Image()
        this.spritesheet_right.src = 'Asset/rightWalk/rightSpritesheet.png'

        this.spritesheet_up = new Image()
        this.spritesheet_up.src = 'Asset/upWalk/upSpritesheet.png'

        this.spritesheet_left = new Image()
        this.spritesheet_left.src = 'Asset/leftWalk/leftSpritesheet.png'

        this.spritesheet_downRun = new Image()
        this.spritesheet_downRun.src = 'Asset/downRun/downrun.png'

        this.spritesheet_leftRun = new Image()
        this.spritesheet_leftRun.src = 'Asset/leftRun/leftrun.png'

        this.spritesheet_upRun = new Image()
        this.spritesheet_upRun.src = 'Asset/upRun/uprun.png'

        this.spritesheet_rightRun = new Image()
        this.spritesheet_rightRun.src = 'Asset/rightRun/rightrun.png'


        this.x = posX
        this.y = posY

        this.imageWidth =  100
        this.imageHeight = 100

        this.gameFrame = 0
        this.frameSpeed = 8
        this.frameCounter = 0

        this.speed = 10
        this.spriteWidth = 166

        this.movement = {
            isDown : false,
            isRight : false,
            isUp : false,
            isLeft : false,
        }
        
        this.run = {
            isRunDown : false,
            isRunRight : false,
            isRunUp : false,
            isRunLeft : false,
        }

        this.idle - {
            isDownIdle : false,
            isRightIdle : false,
            isUpdle : false,
            isLeftIdle : false,
        }

        this.keyCodes = {
            DOWN :  'ArrowDown',
            RIGHT :  'ArrowRight',
            UP : 'ArrowUp',
            LEFT : 'ArrowLeft'
        }

        this.actions = {
            downIdle : {
                'spritesheet' : this.spritesheet_dIdle,
            },
            
            leftIdle : {
                'spritesheet' : this.spritesheet_dIdle,
            },

            upIdle : {
                'spritesheet' : this.spritesheet_dIdle,
            },

            rightIdle : {
                'spritesheet' : this.spritesheet_dIdle,
            },


            downWalk : {
                'spritesheet' : this.spritesheet_down,
            },
            
            rightWalk : {
                'spritesheet' : this.spritesheet_right,
            },

            upWalk : {
                'spritesheet' : this.spritesheet_up,
            },
            
            leftWalk : {
                'spritesheet' : this.spritesheet_left,
            },

            runDown : {
                'spritesheet' : this.spritesheet_downRun,
            },

            runLeft : {
                'spritesheet' : this.spritesheet_leftRun,
            },

            runUp : {
                'spritesheet' : this.spritesheet_upRun,
            },

            runRight : {
                'spritesheet' : this.spritesheet_rightRun,
            },
        }

    }

    move(keyType, key){

            if (keyType == 'keydown'){
            
                if (key == this.keyCodes.DOWN || key == 's' || key == 'S') {
                    this.movement.isDown = true
                }

                if (key == this.keyCodes.RIGHT || key == 'd' || key == 'D') {
                    this.movement.isRight = true
                }

                if (key == this.keyCodes.UP || key == 'w' || key == 'W') {
                    this.movement.isUp = true
                }

                if (key == this.keyCodes.LEFT || key == 'a' || key == 'A') {
                    this.movement.isLeft = true
                }

                if (key == 'Shift') {
                    this.run.isRunDown = true
                    this.run.isRunRight = true
                    this.run.isRunUp = true
                    this.run.isRunLeft = true
                }
            }

            if (keyType == 'keyup'){
            
                if (key == this.keyCodes.DOWN || key == 's' || key == 'S') {
                    this.movement.isDown = false

                    
                }   
            
                if (key == this.keyCodes.RIGHT || key == 'd' || key == 'D') {
                    this.movement.isRight = false

                }

                if (key == this.keyCodes.UP || key == 'w'  || key == 'W') {
                    this.movement.isUp = false
                }

                if (key == this.keyCodes.LEFT|| key == 'a' || key == 'A' ) {
                    this.movement.isLeft = false
                }

                if (key == 'Shift') {
                    this.run.isRunDown = false
                    this.run.isRunRight = false
                    this.run.isRunUp = false
                    this.run.isRunLeft = false
                }
            }
        }


    isWalkingDown() {
    
        return this.movement.isDown 
    
    }

    isWalkingRight() {
    
        return this.movement.isRight

    }

    isWalkingUp() {
    
        return this.movement.isUp

    }

    isWalkingLeft() {
    
        return this.movement.isLeft

    }

    isRunningDown() {

        return this.run.isRunDown
    }

    isRunningLeft() {

        return this.run.isRunLeft
    }

    isRunningUp() {

        return this.run.isRunUp
    }

    isRunningRight() {

        return this.run.isRunRight
    }

    isRightIdle() {

        return this.idle.rightIdle

    }

    update(action) {

        //movement
        if (this.gameFrame % this.frameSpeed == 0) {

            if (this.movement.isDown && (this.y + this.imageHeight) < canvas.height) {
                this.y = this.y + this.speed

                    if(this.run.isRunDown && ((this.y + this.imageHeight) < canvas.height) ) {
                        this.y = this.y + (this.speed * 2)
                    }
            }

            else if (this.movement.isRight && (this.x + this.imageHeight) < canvas.width) {
                this.x = this.x + this.speed

                if(this.run.isRunRight) {
                    this.x = this.x + (this.speed * 2)
                }

            }

            else if (this.movement.isUp && this.y ) {
                this.y = this.y - this.speed

                if(this.run.isRunUp) {
                    this.y = this.y - (this.speed * 2)
                }
            }

            else if (this.movement.isLeft && this.x > 0) {
                this.x = this.x - this.speed

                if(this.run.isRunLeft) {
                    this.x = this.x - (this.speed * 2)
                }
            }
            if (action == 'downWalk') {
                this.frameCounter++
    
                if ( this.frameCounter > 2) {
                    this.frameCounter = 0
                }
            }

            else if (action == 'rightWalk') {
                this.frameCounter++;
    
                if ( this.frameCounter > 2) {
                    this.frameCounter = 0
                }
            }

            else if (action == 'leftWalk') {
                this.frameCounter++;
    
                if ( this.frameCounter > 2) {
                    this.frameCounter = 0
                }
            }

            else if (action == 'upWalk') {
                this.frameCounter++;
    
                if ( this.frameCounter > 2) {
                    this.frameCounter = 0
                }
            }

            else if (action == 'runDown') {
                this.frameCounter++;
    
                if ( this.frameCounter > 2) {
                    this.frameCounter = 2
                }
            }

            else if (action == 'runLeft') {
                this.frameCounter++;
    
                if ( this.frameCounter > 2) {
                    this.frameCounter = 0
                }
            }

            else if (action == 'runUp') {
                this.frameCounter++;
    
                if ( this.frameCounter > 2) {
                    this.frameCounter = 0
                }
            }

            else if (action == 'runRight') {
                this.frameCounter++;
    
                if ( this.frameCounter > 2) {
                    this.frameCounter = 0
                }
            }

            else if (action == 'downIdle') {
                this.frameCounter++;
    
                if ( this.frameCounter > 0) {
                    this.frameCounter = 0
                }
            }  

            else if (action == 'leftIdle') {
                this.frameCounter++;
    
                if ( this.frameCounter > 0) {
                    this.frameCounter = 0
                }
            }  

            else if (action == 'upIdle') {
                this.frameCounter++;
    
                if ( this.frameCounter > 0) {
                    this.frameCounter = 0
                }
            }  
            
            else if (action == 'rightIdle') {
                this.frameCounter++;
    
                if ( this.frameCounter > 0) {
                    this.frameCounter = 0
                }
            }  
        }

        this.gameFrame++;
        
    }


    draw(action){


 // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

    context.drawImage(

        //image cropping
        this.actions[action].spritesheet,
        this.frameCounter*this.spriteWidth,
        0,  
        this.spriteWidth,
        this.actions[action].spritesheet.height,

        //image position 
        this.x,
        this.y,

        //image size
        this.imageWidth,
        this.imageHeight
)


    }


    
}