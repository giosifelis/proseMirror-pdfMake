# proseMirror-pdfMake
parser for proseMirror to [pdfmake](https://www.pdfmake.org)

## usage
```javascript
// viewData is the data that comes from proseMirror

  var data = data.state.doc.toJSON();
  var pdfMakeJson = prosePdf.parser(data);
```
this parses the proseMirror json to a pdfMake json structure.

TODO: 
1. parse table
2. parse lists
3. parse columns
