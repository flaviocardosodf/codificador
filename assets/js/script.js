const textArea = document.querySelector(".textarea")
const mensage = document.querySelector(".mensage")

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value)
  mensage.value = textoEncriptado
  textArea.value = ""
}

function encriptar(textoIn) {
  let matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ]

  textoIn = textoIn.toLowerCase()

  for (let i = 0; i < matriz.length; i++) {
    if (textoIn.includes(matriz[i][0])) {
      textoIn = textoIn.replaceAll(matriz[i][0], matriz[i][1])
    }
  }

  return textoIn
}

function btnDesencriptar() {
  const textoDesencriptado = Desencriptar(textArea.value)
  mensage.value = textoDesencriptado
  textArea.value = ""
}

function Desencriptar(textoOut) {
  let matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ]

  textoOut = textoOut.toLowerCase()

  for (let i = 0; i < matriz.length; i++) {
    if (textoOut.includes(matriz[i][1])) {
      textoOut = textoOut.replaceAll(matriz[i][1], matriz[i][0])
    }
  }

  return textoOut
}
