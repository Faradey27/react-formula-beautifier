'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable new-cap */
/* eslint-disable react/jsx-no-bind */

var TeX = function (_Component) {
  _inherits(TeX, _Component);

  function TeX(props) {
    _classCallCheck(this, TeX);

    var _this = _possibleConstructorReturn(this, (TeX.__proto__ || Object.getPrototypeOf(TeX)).call(this, props));

    MathJax.Hub.Config({
      tex2jax: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
      showMathMenu: false,
      showMathMenuMSIE: false
    });
    return _this;
  }

  _createClass(TeX, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.node]);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.node]);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        {
          id: 'MathJax-TeX',
          ref: function ref(node) {
            _this2.node = node;
          }
        },
        '$' + this.props.value + '$'
      );
    }
  }]);

  return TeX;
}(_react.Component);

TeX.propTypes = {
  value: _react.PropTypes.string
};
exports.default = TeX;