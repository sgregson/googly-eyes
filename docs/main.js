/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const stats = document.getElementById('stats');\nconst media = document.getElementById('media');\n\nwindow.addEventListener('drop', e => {\n  e.preventDefault();\n  console.log(e.dataTransfer.files[0]);\n  const reader = new FileReader();\n  const [file] = e.dataTransfer.files;\n  reader.readAsDataURL(file);\n  reader.onloadend = e => {\n    const img = document.getElementById('main-img');\n    const dropZone = document.getElementById('drop-zone');\n    img.src = reader.result;\n    img.style.display = 'flex';\n    dropZone.style.display = 'none';\n  };\n});\n\nwindow.addEventListener('dragstart', e => {\n  e.preventDefault();\n});\n\nwindow.addEventListener('dragover', e => {\n  e.preventDefault();\n});\n\nwindow.requestPermission = () => {\n  if (typeof DeviceOrientationEvent !== 'undefined') {\n    stats.textContent = `DeviceOrientation: ${Object.keys(\n      DeviceOrientationEvent\n    )}`;\n    DeviceOrientationEvent.requestPermission()\n      .then(permissionState => {\n        stats.textContent = `permission: ${permissionState}`;\n        if (permissionState === 'granted') {\n          window.addEventListener('deviceorientation', e => {\n            stats.textContent = `orientation: ${e}`;\n            const { absolute, alpha, beta, gamma } = e;\n            console.log(`absolute:`, absolute);\n            console.log(`alpha:`, alpha);\n            console.log(`beta:`, beta);\n            console.log(`gamma:`, gamma);\n            stats.textContent = JSON.stringify(\n              { absolute, alpha, beta, gamma },\n              null,\n              2\n            );\n          });\n\n          window.addEventListener('devicemotion', e => {\n            stats.textContent = `motion: ${e}`;\n            const { absolute, alpha, beta, gamma } = e;\n            console.log(`absolute:`, absolute);\n            console.log(`alpha:`, alpha);\n            console.log(`beta:`, beta);\n            console.log(`gamma:`, gamma);\n            stats.textContent = JSON.stringify(\n              { absolute, alpha, beta, gamma },\n              null,\n              2\n            );\n          });\n        }\n      })\n      .catch(console.error);\n  } else {\n    stats.textContent = 'DeviceOrientationEvent is undefined';\n  }\n};\n// const getUserMedia = navigator;\n// document.getElementById('media').textContent = `getUserMedia: ${getUserMedia}`;\n// if (getUserMedia) {\n//   console.log(`getUserMedia:`, getUserMedia);\n//   getUserMedia({ photo: true }).then(stream => {\n//     console.log(stream);\n//     document.getElementById('media').textContent = stream;\n//   });\n// } else {\n//   console.log('getUserMedia is not defined');\n// }\n\n\n//# sourceURL=webpack://googly-eyes/./src/index.js?");
/******/ })()
;