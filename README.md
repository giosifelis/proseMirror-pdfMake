# proseMirror-pdfMake
parser for proseMirror to [pdfmake](https://www.pdfmake.org).  It formats the proseMirror json to a pdfMake json structure. 

### usage
```javascript
// viewData is the data that comes from proseMirror
// prosePdf.parser(data, defaultFontSize), defaultFontSize is optional and it defaults to 10

  var data = data.state.doc.toJSON();
  var pdfMakeJson = prosePdf.parser(data);
  
  // in pdfmake playground:  http://pdfmake.org/playground.html
  var dd = { content: pdfMakeJson }
```
### how it works
It takes all marks  and creates a "style" for each.  In pdfmake you need to create a styles object that corresponds to the marks in proseMirror ie: for bold, if you use <b></b> have a b: {bold:true}, if you use <strong></strong>, have b:{bold true} etc. See what options you have in [pdfmake decorations](https://pdfmake.github.io/docs/document-definition-object/styling/) and expand your styles object as needed.

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

### current parser features
1. plain text
2. formated text with bold, italic, underline, mark etc
3. links
4. horizontal lines
5. headings

### TODO: 
1. parse tables
2. parse lists
3. parse columns
4. parse images (they need to be tranformed to base64 in order to work with pdfmake)
