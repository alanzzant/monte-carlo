const h1 = document.getElementById('h1')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const WIDTH = canvas.width = window.innerWidth
const HEIGHT = canvas.height = window.innerHeight

// useless graphing circule function
const graphCircle = (radius, h, k) => {
  // (0,0) => domain: [-radius, +radius]
  //(x-h)^2 + (y-k)^2 = r^2  ==>  y = √(r^2 - (x-h)^2) + k

  ctx.strokeStyle = '#000000'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(WIDTH / 2, 0)
  ctx.lineTo(WIDTH / 2, HEIGHT)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(0, HEIGHT / 2)
  ctx.lineTo(WIDTH, HEIGHT / 2)
  ctx.stroke()

  ctx.fillStyle = '#ff0000'

  for (let rx = (h-radius); rx <= (h+radius); rx+=1) {
    ry1 = Math.sqrt(radius**2 - (rx-h)**2) + k
    ctx.fillRect(WIDTH/2+rx, HEIGHT/2-ry1, 1, 1)

    ry2 = -Math.sqrt(radius**2 - (rx-h)**2) + k
    ctx.fillRect(WIDTH/2+rx, HEIGHT/2-ry2, 1, 1)
  }
}

const RADIUS = 150.0
let totalPoints = 0
let inCircumferencePoints = 0
let pi = 0.0
const pointsPerIteration = 100

const drawCircumference = () => {
  ctx.strokeStyle = '#292929'
  ctx.beginPath()
  ctx.arc(WIDTH/2, HEIGHT/2, RADIUS, 0, Math.PI * 2)
  ctx.stroke()
}

const drawPoint = (x, y, color) => {
  ctx.fillStyle = color
  ctx.lineWidth = 0.1
  ctx.fillRect(WIDTH/2 + x, HEIGHT/2 - y, 1, 1)
}

const createPoint = () => {
  x = Math.round(Math.random() * RADIUS*2 - RADIUS)
  y = Math.round(Math.random() * RADIUS*2 - RADIUS)

  return {x, y}
}

const pointIsInCircumference = (x, y) => {
  // The range/limits in 'y' at this specific 'x'
  yLimits = Math.sqrt(RADIUS**2 - x**2)
  if (y <= yLimits && y >= -yLimits) return true
  return false
}

const interval = setInterval(() => {
  for (let i = 0; i < pointsPerIteration; i++) {
    const {x, y} = createPoint()
    if (pointIsInCircumference(x, y)) {
      inCircumferencePoints++
      drawPoint(x, y, '#EF3E3E')
      continue
    }

    drawPoint(x, y, '#6D61EB')
  }
  
  totalPoints += pointsPerIteration  
  drawCircumference()

  pi = (inCircumferencePoints/totalPoints) * 4.0
  h1.innerText = `π = ${pi}`
}, 1)


