/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable new-cap */
/* eslint-disable react/jsx-no-bind */

import { Component, PropTypes } from 'react';

export default class TeX extends Component {
  static propTypes = {
    value: PropTypes.string,
  }

  constructor(props) {
    super(props);
    MathJax.Hub.Config({
      tex2jax: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
      showMathMenu: false,
      showMathMenuMSIE: false,
    });
  }

  componentDidMount() {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.node]);
  }

  componentDidUpdate() {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.node]);
  }

  render() {
    return (
      <div
        id="MathJax-TeX"
        ref={(node) => { this.node = node; }}
      >
        {`$${this.props.value}$`}
      </div>
    );
  }
}
