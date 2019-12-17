const prosePdf = {
  process: {
    hardBreak: function(brLine) {

      return {
        text: '\n',
      };

    },
    hr: function(hrLine) {

      return [{
        canvas: [{
          type: 'line',
          x1: 1,
          y1: 5,
          x2: 595 - 2 * 40,
          y2: 5,
          lineWidth: 1,
        }]
      }, {
        text: '\n',
        lineHeight: 1
      }];

    },
    heading: function(hLine, fontSize) {
      let fontMultiplier,
        defaultFontSize = fontSize || 10;

      switch (hLine.attrs.level) {

        case 2: // h2
          fontMultiplier = 1.5; 
          break;
        case 3: // h3
          fontMultiplier = 1.17; 
          break;
        case 4: // h4
          fontMultiplier = 1;
          break;
        case 5: // h5
          fontMultiplier = 0.83;
          break;
        case 6: // h6
          fontMultiplier = 0.67;
          break;

        default: // h1
          fontMultiplier = 2;
          break;
      }


      return {
        text: prosePdf.process.content(hLine),
        bold: true,
        lineHeight: JSON.parse("1." + (hLine.attrs.level + 1)),
        fontSize: defaultFontSize * fontMultiplier
      };
    },
    contentType: function(tLine) {

      switch (tLine.type) {
        case 'hard_break':
          return '\n';
        case 'image':
          return '[image here]'; // process image here
        default:
          return tLine.text;
      }

    },
    content: function(data) {

      let contentParams = !data.content ? '\n' :

        data.content.map(function(c) {

          let marks = c.marks ? prosePdf.process.marks(c.marks) : false,
            // processedText = prosePdf.contentType(c),
            contentResult = {
              text: prosePdf.process.contentType(c)
            };

          if (marks.style) {

            marks.style.forEach(function(feLine) {

              contentResult.style = marks.style;

              if (feLine.link) {
                contentResult.link = marks.link;
              }

            });

          }


          return contentResult;

        });

      return contentParams;
    },
    marks: function(data) {

      let href, styles = data.map(function(m) {
          if(m.type === 'link') {
            href = m.attrs.href;
          }
          return m.type === 'link' ? 'a' : m.type;
        });

      return {
        style: styles,
        link: href
      };

    },
  },

  parser: function(data, defaultFontSize) {
    let newPdf = [];
    data.content.forEach(function(m) {

      let textObj = {};

      switch (m.type) {
        case 'horizontal_rule':
          textObj = prosePdf.process.hr(m);
          break;
        case 'heading':
          textObj = prosePdf.process.heading(m, defaultFontSize);
          break;

        default:
          textObj = {
            text: prosePdf.process.content(m)
          };
          break;
      }

      textObj.preserveLeadingSpaces = true;


      newPdf.push({
        stack: [textObj]
      });

    });

    return newPdf;
  }
};
