import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TestRenderer from "react-test-renderer";
import Minitel from "../index";
import { Line } from "../styledComponents/MinitelStyled";

Enzyme.configure({ adapter: new Adapter() });

jest.useFakeTimers();

describe("Minitel composant", () => {
  describe("When the composant is mount", () => {
    it("check if the callback is called", () => {
      const fnDefault = jest.fn();
      const style = {
        default: [18, 10, "white", 0, 0.1, "linear", fnDefault]
      };
      const Wrapper = shallow(
        <Minitel style={style}>
          <p>Hello World!</p>
        </Minitel>
      );

      expect(fnDefault).not.toBeCalled();
      jest.runAllTimers();
      expect(fnDefault).toHaveBeenCalledTimes(1);
    });

    it("check if the Line components are unmounted after the effect", () => {
      const fnDefault = jest.fn();
      const style = {
        default: [18, 10, "white", 0, 0.1, "linear", fnDefault]
      };
      const Wrapper = shallow(
        <Minitel style={style}>
          <p>Hello World!</p>
        </Minitel>
      );
      expect(Wrapper.children().find(Line)).toHaveLength(10);
      jest.runAllTimers();
      Wrapper.update();
      expect(Wrapper.children().find(Line)).toHaveLength(0);
    });

    it("renders correctly", () => {
      const fnDefault = jest.fn();
      const style = {
        default: [18, 10, "white", 0, 0.1, "linear", fnDefault]
      };
      const renderer = TestRenderer.create(
        <Minitel style={style}>
          <p>Hello World!</p>
        </Minitel>
      );
      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });
});
