# proseMirror-pdfMake
parser for proseMirror to pdfMake

## usage

// viewData is the data that comes from proseMirror
  var data = data.state.doc.toJSON();
  var pdfMakeJson = prosePdf.parser(data);
