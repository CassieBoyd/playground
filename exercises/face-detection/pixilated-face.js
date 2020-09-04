const video = document.querySelector(".webcam");

const canvas = document.querySelector(".video");
const ctx = canvas.getContext("2d");

const faceCanvas = document.querySelector(".face");
const faceCtx = canvas.getContext("2d");

const faceDetector = new window.FaceDetector();

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

populateVideo().then(detect);
