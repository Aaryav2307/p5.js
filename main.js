function preload() {
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);

    fill(255, 0, 0);
    stroke(255, 1, 100);
    circle(50, 50, 180);

    fill(0, 128, 0);
    stroke(1, 128, 100);
    rect(90, 40, 460, 20);

    rect(90, 420, 460, 20);
}

function take_snapshot(){
    save('filtered_picture.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}