/** @jsx React.DOM */
'use strict';

let React = require('react');

var TeX = React.createClass({

    getInitialState() {
        MathJax.Hub.Config({
            tex2jax:{
                inlineMath:[['$','$'],['\\(','\\)']]
            }
        });

        return {
            value: ''
        };
    },

    componentDidMount(root) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub,root]);
    },

    componentDidUpdate(props,state,root) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub,root]);
    },

    render() {

        return (
          <div className="TeX">
            <div className="content">
                {this.props.value}
            </div>
          </div>
    );

  }
});

module.exports = TeX;