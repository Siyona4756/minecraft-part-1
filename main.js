var canvas=  new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";


function player_update()
{
    fabric.Image.from.URL("player.png", function(Img)
    player_object=Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
        
    });
    canvas.add(player_object);
}



function new_image(get_image)
{
    fabric.Image.from.URL(get_image)
    block_image_object=Img;

    block_image.scaleToWidth(block_image_width);
    block_image.scaleToHeight(block_image_height);
    block_image.set({
        top:player_y,
        left:player_x
        
    });
    canvas.add(block_image);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed= e.keycode;
    console.log("keyPressed");

    if (e.shiftKey == true && keyPressed =='80')
    {
console.log ("p and shift pressed together");
block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (e.shiftKey == true && keyPressed=='77')
        {
    console.log ("m and shift pressed together");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
        }

        if(keyPressed=='38')
        {
            console.log("up");
            up();
        }

        if(keyPressed=='40')
            {
                console.log("down");
                down();
            }
            
            if(keyPressed=='39')
                {
                    console.log("right");
                    right();
                }

                if(keyPressed=='37')
                    {
                        console.log("left");
                        left();
                    }

                    if(keyPressed=='87')
                    {
                        new_image('wall.jpg');
                        console.log("w");
                    }

                    if(keyPressed=='71')
                        {
                            new_image('ground.jpg');
                            console.log("g");
                        }

                        if(keyPressed=='76')
                            {
                                new_image('light_green.jpg');
                                console.log("l");
                            }

                            if(keyPressed=='84')
                                {
                                    new_image('trunk.jpg');
                                    console.log("t");
                                }

                                if(keyPressed=='82')
                                    {
                                        new_image('roof.jpg');
                                        console.log("r");
                                    }

                                    if(keyPressed=='89')
                                        {
                                            new_image('yellow_wall.jpg');
                                            console.log("y");
                                        }

                                        if(keyPressed=='68')
                                            {
                                                new_image('dark_green.jpg');
                                                console.log("d");
                                            }

                                            if(keyPressed=='85')
                                                {
                                                    new_image('unique.jpg');
                                                    console.log("u");
                                                }

                                                if(keyPressed=='67')
                                                    {
                                                        new_image('cloud.jpg');
                                                        console.log("c");
                                                    }

                                                    function up(){

                                                        if(player_y >= 0)
                                                        {
                                                            player_y=player_y-block_image_height;
                                                            console.log("block_image_height = " + block_image_height)
                                                            console.log("When up arrow key is pressed, X = " +player_x+" Y ="+ player_y);
                                                            canvas.remove(player_object);
                                                            player_update();
                                                        }
                                                    }

                                                    function down(){

                                                        if(player_y <= 500)
                                                        {
                                                            player_y=player_y+block_image_height;
                                                            console.log("block_image_height = " + block_image_height)
                                                            console.log("When down arrow key is pressed, X = " +player_x+" Y ="+ player_y);
                                                            canvas.remove(player_object);
                                                            player_update();
                                                        }
                                                    }

                                                    function left(){

                                                        if(player_x >= 0)
                                                        {
                                                            player_x=player_x-block_image_width;
                                                            console.log("block_image_width = " + block_image_width)
                                                            console.log("When left arrow key is pressed, X = " +player_x+" Y ="+ player_y);
                                                            canvas.remove(player_object);
                                                            player_update();
                                                        }
                                                    }

                                                    
                                                    function right(){

                                                        if(player_x <= 500)
                                                        {
                                                            player_x=player_x+block_image_width;
                                                            console.log("block_image_width = " + block_image_width)
                                                            console.log("When right arrow key is pressed, X = " +player_x+" Y ="+ player_y);
                                                            canvas.remove(player_object);
                                                            player_update();
                                                        }
                                                    }

            
        
    

}



