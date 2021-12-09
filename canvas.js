let canvas = document.getElementById('canvas')
canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight * 0.9;
let context = canvas.getContext("2d");

const bg = new Background('asset/background/background.jpg', canvas.width, canvas.height);
const player = new Player(163,164)


function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
   
    bg.update();
    bg.draw();

    if (player.isWalkingDown()){
        player.update('downWalk')
        player.draw('downWalk')
            
        if (player.isRunningDown()) {
            player.update('runDown')
            player.draw('runDown')
        }
    }

    else if (player.isWalkingRight()){
        player.update('rightWalk')
        player.draw('rightWalk')

        if (player.isRunningRight()) {
            player.update('runRight')
            player.draw('runRight')
        }
        
    }

    else if (player.isWalkingUp()){
        player.update('upWalk')
        player.draw('upWalk')

        if (player.isRunningUp()) {
            player.update('runUp')
            player.draw('runUp')
        }

    }
    else if (player.isWalkingLeft()){

        player.update('leftWalk')
        player.draw('leftWalk')

        if (player.isRunningLeft()) {
            player.update('runLeft')
            player.draw('runLeft')
        }
    }
    else {

        player.update('downIdle')
        player.draw('downIdle')
    }
    requestAnimationFrame(animate);
}
animate()
function clear() {
    context.clearRect( 0, 0, canvas.width, canvas.height)
}
document.addEventListener('keydown' , key_down_listener)
document.addEventListener('keyup' , key_up_listener)
function key_down_listener(event) {
    player.move('keydown',event.key) 
}
function key_up_listener(event) {
    player.move('keyup', event.key)
}