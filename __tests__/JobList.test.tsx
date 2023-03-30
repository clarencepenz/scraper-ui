import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobList from "../components/JobList";

describe("JobList", () => {
  const props = {
    title: "Software Engineer",
    company: "Example Co",
    location: "San Francisco, CA",
    link: "/job/123",
  };

  it("renders the job title and company name", () => {
    render(<JobList {...props} />);
    const companyName = screen.getByText(`${props.title} - ${props.company}`);
    expect(companyName).toBeInTheDocument();
  });

  it("renders the job location", () => {
    render(<JobList {...props} />);
    const locationElement = screen.getByText(`🌍 ${props.location}`);
    expect(locationElement).toBeInTheDocument();
  });

  it("renders a link to the job application", () => {
    render(<JobList {...props} />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", `https://boards.greenhouse.io${props.link}`);
    expect(linkElement).toHaveAttribute("target", "_blank");
  });
});
