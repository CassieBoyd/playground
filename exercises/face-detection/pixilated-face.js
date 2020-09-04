const video = document.querySelector(".webcam");

const canvas = document.querySelector(".video");
const ctx = canvas.getContext("2d");

const faceCanvas = document.querySelector(".face");
const faceCtx = canvas.getContext("2d");

const faceDetector = new window.FaceDetector();

const SIZE = 10; // Any variables that are constant throughout the application are typically named in all caps when working with canvas.

// Get users' video feed
async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 }
    })
    video.srcObject = stream;
    await video.play();
    // Size canvases to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;
}

async function detect() {
    const faces = await faceDetector.detect(video);
    console.log(faces.length);
    // Ask browser when next animation frame is and tell it to run detect
    faces.forEach(drawFace);
    faces.forEach(censor);
    requestAnimationFrame();
}

function drawFace(face) {
    // Grabbing the values for the face location
    const { width, height, top, left } = face.boundingBox;
    // Clearing the previous boxes from the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Setting the color of the box
    ctx.strokeStyle = "#03dffc";
    // Setting the line width of the box
    ctx.lineWidth = 2;
    // Drawing the rectangle with the detected values
    ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
    // Draw small face
    faceCtx.drawImage(
        // 5 source arguments
        video, // Where source comes from
        face.x, // Where the source pull starts on x-axis
        face.y, // Where the source pull starts on y-axis
        face.width, // Where to stop source pull on width
        face.height, // Where to stop source pull on height
        // 4 draw arguments
        face.x, // Where to start drawing on x-axis
        face.y, // Where to start drawing on y-axis
        SIZE, // Where to stop drawing on width
        SIZE // Where to stop drawing on height
        );
    // Take small face and draw back at normal size 
}

populateVideo().then(detect);
