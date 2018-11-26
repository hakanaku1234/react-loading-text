import React from "react";
import PropTypes from "prop-types";
import { WrapperMinitel, Line } from "./styledComponents/MinitelStyled";

class Minitel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      media: {
        default: 1200,
        md: 992,
        sm: 768,
        xs: 768
      }
    };
  }

  componentDidMount() {
    if (this.getCallBacks()[this.screenDimension()] != null) {
      const timeout =
        1000 *
        (this.getPropsLine()[this.screenDimension()][2] +
          this.getNbLines()[this.screenDimension()] *
            this.getPropsLine()[this.screenDimension()][3]);

      this.callBackID = setTimeout(
        () => this.getCallBacks()[this.screenDimension()](),
        timeout
      );

      this.minitelID = setTimeout(() => this.changeActivity(), timeout);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.callBackID);
    clearTimeout(this.minitelID);
  }

  getNbLines() {
    const { media } = this.state;
    const { style } = this.props;
    const nbLines = Object.keys(media).reduce((acc, label) => {
      if (!style[label]) {
        if (label === "default") {
          acc[label] = 10;
        } else {
          acc[label] = acc.default;
        }
      } else {
        acc[label] = style[label][1];
      }
      return acc;
    }, {});
    return nbLines;
  }

  getPropsLine() {
    const { media } = this.state;
    const { style } = this.props;
    const propsLine = Object.keys(media).reduce((acc, label) => {
      if (!style[label]) {
        if (label === "default") {
          acc[label] = [18, "red", 0, 0.5, "linear"];
        } else {
          acc[label] = acc.default.slice();
        }
      } else {
        acc[label] = [
          style[label][0], // lineheight
          style[label][2], // color
          style[label][3], // delay
          style[label][4], // duration
          style[label][5] // timing
        ];
      }
      return acc;
    }, {});
    return propsLine;
  }

  getCallBacks() {
    const { media } = this.state;
    const { style } = this.props;
    const callBacks = Object.keys(media).reduce((acc, label) => {
      if (!style[label]) {
        if (label === "default") {
          acc[label] = () => {};
        } else {
          acc[label] = acc.default;
        }
      } else {
        acc[label] = style[label][6];
      }
      return acc;
    }, {});
    return callBacks;
  }

  screenDimension() {
    const { media } = this.state;
    const dimWindow = window.innerWidth;
    let mediaS;
    if (dimWindow >= media.default) {
      mediaS = "default";
    } else if (dimWindow >= media.md) {
      mediaS = "md";
    } else if (dimWindow >= media.sm) {
      mediaS = "sm";
    } else if (dimWindow < media.xs) {
      mediaS = "xs";
    }
    return mediaS;
  }

  changeActivity() {
    const { active } = this.state;
    this.setState({
      active: !active
    });
  }

  render() {
    const { active } = this.state;
    const { children } = this.props;
    const lines = [];
    for (let i = 0; i < this.getNbLines()[this.screenDimension()]; i += 1) {
      lines.push(
        React.createElement(Line, {
          style: this.getPropsLine(),
          nb: i,
          key: i.toString()
        })
      );
    }
    return React.createElement(WrapperMinitel, { ...this.props }, [
      active && lines,
      children
    ]);
  }
}

Minitel.propTypes = {
  style: PropTypes.object,
  children: PropTypes.element.isRequired
};

Minitel.defaultProps = {
  style: {
    default: [18, 10, "white", 0, 0.5, "linear", null] // lineheight, numberline, color, delay, duration, timing, callback
  }
};

export default Minitel;
