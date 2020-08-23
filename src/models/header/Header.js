const  {ExcelComponent}=require( '../../core/ExcelComponent') 

module.exports= class Header extends ExcelComponent {
  toHTML() {
    return '<h1>Header</h1>'
  }
}
