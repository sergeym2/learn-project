const  {ExcelComponent} =require('../../core/ExcelComponent') 

module.exports= class Toolbar extends ExcelComponent  {
  toHTML() {
    return '<h1>Toolbar</h1>'
  }
}
