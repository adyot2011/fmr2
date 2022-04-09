noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
input_name = "";


function setup()
{
    video = createCapture(VIDEO);
     video.size(550, 450);

     canvas = createCanvas(550, 450);
     canvas.position(750,80);

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose' , gotPoses);
}

function draw()
{
    background('#6C91C2');
    textSize(difference);
    fill('white');
    text(input_name, noseX, noseY);
}

function modelLoaded()
    {
        console.log('Posenet Is Initialized!');
    }

    function done_1()
    {
        
        input_name = document.getElementById("myInput").value;
        document.getElementById('myInput').value = ''
            
    }

    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX = "+ noseX +"noseY = "+ noseY);

            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor( leftWristX - rightWristX);
            
            console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference =" + difference);
        }
    }