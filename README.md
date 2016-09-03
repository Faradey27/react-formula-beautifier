# react-formula-beautifier
mathajax wrap for reactjs

Guide:

1) npm install react --save <br />
2) npm install react-formula-beautifier --save <br />
3) add mathajax to index.html or write mathajax in window.mathajax <br />
    <br />
    ## For example:
    ```html
        <html>
        <head>
            <script type="text/javascript"
                    src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML&dummy=.js"></script>
        </head>
        <body>
        </body>
        </html>
    ```
      <br />
4) var TeX = require('react-formula-beautifier'), end use TeX component <br />


## Example Usage

```js

var React = require('react');
var TeX = require('react-formula-beautifier');

var Formula = React.createClass({

    render() {
        var expression = "x_1 + (x_2)^2";
        return <TeX value={"$"+expression+"$"}/>;
    }
});

module.exports = Formula;

