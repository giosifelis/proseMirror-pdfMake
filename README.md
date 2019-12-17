# proseMirror-pdfMake
parser for proseMirror to [pdfmake](https://www.pdfmake.org).  It formats the proseMirror json to a pdfMake json structure. 

## usage
```javascript
// viewData is the data that comes from proseMirror

  var data = data.state.doc.toJSON();
  var pdfMakeJson = prosePdf.parser(data);
```
## how it works
It takes al marks and creates a "style" for each.  In pdfmake you need to create styles object that corresponds to the marks in proseMirror ie:

```javascript
  styles: {
    b: {
      bold: true
    },
    i: {
      italics: true
    },
     u: {
      decoration: 'underline'
    },
    a: {
      color: "blue",
      decoration: 'underline'
    },
     mark: {
      background: "yellow",
    },
```

## current parser features
1. plain text
2. formated text with bold, italic, 
3. links

## left TODO: 
1. parse table
2. parse lists
3. parse columns
