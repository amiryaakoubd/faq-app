import { render, screen, waitFor } from "@testing-library/react";
import Home from "../../pages/index.jsx";
import "@testing-library/jest-dom";
import { mockData } from "../../utils/mockData.js";

describe("Home Page", () => {
  it("renders the title", async () => {
    render(<Home items={mockData.items} error={false} />);

    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });

  it("renders accordion items when there are no errors", async () => {
    render(<Home items={mockData.items} error={false} />);

    await waitFor(() => {
      expect(
        screen.getByText("Hvem er Nova Consulting Group?"),
      ).toBeInTheDocument();
      // The accordion item content is still in the document because we do not render it conditionally in this case
      // So a test for checking if the content appears after the title is clicked would be redundant.
      expect(
        screen.getByText(
          "Nova Consulting Group rådgir, implementerer og forvalter digitale løsninger for noen av Nordens største merkevarer.",
        ),
      ).toBeInTheDocument();
    });
  });

  it("renders error message when there is an error", async () => {
    render(<Home items={[]} error={true} />);

    await waitFor(() => {
      expect(
        screen.getByText(
          "Noe gikk galt under henting av data. Vennligst prøv igjen senere.",
        ),
      ).toBeInTheDocument();
    });
  });

  it("renders error message when no accordion items are available", async () => {
    render(<Home items={[{ fields: { accordionItems: [] } }]} error={false} />);

    await waitFor(() => {
      expect(
        screen.getByText(
          "Ingen spørsmål og svar er tilgjengelige for øyeblikket. Vennligst prøv igjen senere.",
        ),
      ).toBeInTheDocument();
    });
  });
});
