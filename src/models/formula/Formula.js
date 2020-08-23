const {ExcelComponent} =require('../../core/ExcelComponent') 

module.exports= class Formula extends ExcelComponent  {
  toHTML() {
    return '<h1>Formula</h1>'
  }
}
