const {ExcelComponent}= require('../../core/ExcelComponent') 
module.exports= class Table extends ExcelComponent  {
  toHTML() {
    return '<h1>Table</h1>'
  }
}
