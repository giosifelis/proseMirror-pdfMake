# proseMirror-pdfMake
parser for proseMirror to [pdfMake](https://www.pdfMake.com)

## usage
```javascript
// viewData is the data that comes from proseMirror

  var data = data.state.doc.toJSON();
  var pdfMakeJson = prosePdf.parser(data);
```
this parses the proseMirror json to a pdfMake json structure.

TODO: 
