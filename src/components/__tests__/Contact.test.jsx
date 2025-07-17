import {render, screen} from "@testing-library/react"
import Contact from "../Contact"
import {expect, test} from "vitest"
import '@testing-library/jest-dom'
import React from "react"


test("Should load contact us component",()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should load Button inside Contact us component",()=>{
    render(<Contact/>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
});



