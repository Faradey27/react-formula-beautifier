'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('/Users/faradey27/Documents/Projects/react-formula-beautifier/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/faradey27/Documents/Projects/react-formula-beautifier/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/faradey27/Documents/Projects/react-formula-beautifier/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TeX: {
    displayName: 'TeX'
  }
};

var _UsersFaradey27DocumentsProjectsReactFormulaBeautifierNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/TeX.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersFaradey27DocumentsProjectsReactFormulaBeautifierNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/TeX.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersFaradey27DocumentsProjectsReactFormulaBeautifierNode_modulesReactTransformHmrLibIndexJs2(_UsersFaradey27DocumentsProjectsReactFormulaBeautifierNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
} /* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable new-cap */
/* eslint-disable react/jsx-no-bind */

var TeX = _wrapComponent('TeX')((_temp = _class = function (_Component) {
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
}(_react2.Component), _class.propTypes = {
  value: _react2.PropTypes.string
}, _temp));

exports.default = TeX;