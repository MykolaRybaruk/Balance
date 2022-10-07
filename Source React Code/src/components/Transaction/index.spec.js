import React from "react";
import { shallow } from "enzyme";
import Transaction from ".";

describe("Transaction component", () => {
  it("should show transaction", () => {
    const sut = shallow(<Transaction />);
    exprxt(sut).toMatchSnapshot();
  });
});
