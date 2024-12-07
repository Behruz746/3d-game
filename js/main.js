let canvas = document.querySelector("#render-canvas");
// o'yin divijogi
let engine = new BABYLON.Engine(canvas);
// o'yin kadiri
let scene = new BABYLON.Scene(engine);
// o'yin kadir rangi
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
// o'yin kamerasi va kamera positioni Vector3 x, y, z
let camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene
);
// o'yin yorug'ligi
let light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene
);
// o'yin kubi
let box = new BABYLON.Mesh.CreateBox("box", 2, scene);
box.rotation.x = -0.2;
box.rotation.y = -0.4;
// box material
let boxMaterial = new BABYLON.StandardMaterial("material", scene);
// box rangi
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;

// o'yin hardoyim render bo'lishi uchun loop function
engine.runRenderLoop(() => {
  scene.render();
});

// Brauzer hajmi o'zgarganda canvasni moslashtirish
window.addEventListener("resize", () => {
  engine.resize();
});
let touchToggle = false;
let intervalId = null; // setInterval uchun ID saqlash

window.addEventListener("touchend", () => {
  touchToggle = !touchToggle; // toggle qilish

  if (touchToggle) {
    // setInterval boshlash
    intervalId = setInterval(() => {
      // box.rotation.x += 0.1;
      box.rotation.z += 0.1;
      camera.cameraRotation.y += 0.01;
      //   box.scaling.z -= 0.1;
    }, 50);

    console.log(camera);
  } else {
    // intervalni to'xtatish
    clearInterval(intervalId);
    box.scaling.z = 1;
    box.rotation.z = 1;
    intervalId = null;
  }
});

console.log(engine);
