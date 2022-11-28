const startBoard = document.getElementById('start-board')
const settingBoard = document.getElementById('setting-board')

function setting() {
    startBoard.style.display = 'none'
    settingBoard.style.display = 'flex'
}

function backToStart() {
    startBoard.style.display = 'flex'
    settingBoard.style.display = 'none'
}

document.getElementById('settingBtn').addEventListener('click', setting)
document.getElementById('backBtn').addEventListener('click', backToStart)