import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
const startBoard = document.getElementById('start-board')

function main(currentTime) {
    if (gameOver) {
        if(confirm('You lost!! Press ok to restart')) {
            window.location = '/'
        }
        return
    }
    
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    lastRenderTime = currentTime

    update()
    draw()
}
// window.requestAnimationFrame(main)
function startGame() {
    startBoard.style.display = 'none'
    gameBoard.style.display = 'grid'
    window.requestAnimationFrame(main)
}

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
// 撞牆，判斷方向，全部x y 上下左右移grid??

document.getElementById('startBtn').addEventListener('click', startGame)