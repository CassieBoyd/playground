const video = document.querySelector(".webcam");

const canvas = document.querySelector(".video");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#ffc600";
ctx.lineWidth = 2;

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
    const { width, height, top, left } = face.boundingBox;
    ctx.strokeRect(left, top, width, height);
    console.log({ width, height, top, left });
}

populateVideo().then(detect);
