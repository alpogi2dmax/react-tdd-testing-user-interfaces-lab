import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";


// Your tests here

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays a second-level heading with the text `About me", () => {
    // Arrange
    render(<App />);
  
    // Act
    const secondlevelHeading = screen.getByRole("heading", {
      name: /about me/i,
      exact: false,
      level: 2,
    });
  
    // Assert
    expect(secondlevelHeading).toBeInTheDocument();
});

test("displays a image with the alttext `My Headshot", () => {
    // Arrange
    render(<App />);
  
    // Act
    const image = screen.getByAltText(/my headshot/i,);
  
    // Assert
    expect(image).toBeInTheDocument();
});

test("displays a paragraph with the text `biography", () => {
    // Arrange
    render(<App />);
  
    // Act
    const biography = screen.getByText(/biography/i,);
  
    // Assert
    expect(biography).toBeInTheDocument();
});

test("displays a link with the text `Linkedin", () => {
    // Arrange
    render(<App />);
  
    // Act
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin/i,
    });
  
    // Assert
    expect(linkedinLink).toBeInTheDocument();
});

test("displays a link with the text `Github", () => {
    // Arrange
    render(<App />);
  
    // Act
    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });
  
    // Assert
    expect(githubLink).toBeInTheDocument();
});
