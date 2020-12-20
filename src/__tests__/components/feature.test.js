import React from "react";
import { render } from "@testing-library/react";
import { Feature } from "../../components";

describe("<Feature/>", () => {
  it("rendres the <Feature /> with populated Data", () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
      </Feature>
    );

    expect(getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
    expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it("rendres the <Feature /> with only title", () => {
    const { container, getByText, queryByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
      </Feature>
    );

    expect(getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
    expect(queryByText("Watch anywhere. Cancel at any time.")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it("rendres the <Feature /> with only subtitle", () => {
    const { container, getByText, queryByText } = render(
      <Feature>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
      </Feature>
    );

    expect(queryByText("Unlimited films, TV programmes and more.")).toBeFalsy();
    expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
