const CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function toColumn(col) {
  return `
    <div class="column">${col}</div>
  `
}

function createRow(i, content) {
  return `
    <div class="row">
      <div class="row-info">${i}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(createRow('', cols))

  const cols_2 =  new Array(colsCount)
      .fill('')
      .map(createCell)
      .join('')


  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(i + 1, cols_2))
  }

  return rows.join('')
}
