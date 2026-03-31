import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { LocationCard } from "./LocationCard";

describe("LocationCard", () => {
    const mockProps = {
        name: "Test Office",
        address1: "123 Street",
        address2: "Area",
        city: "London",
        postcode: "E1 1AA"
    };

    it("renders location details", () => {
        render(<LocationCard {...mockProps} />);

        expect(screen.getByText("Test Office")).toBeInTheDocument();
        expect(screen.getByText("123 Street")).toBeInTheDocument();
        expect(screen.getByText("Area")).toBeInTheDocument();
        expect(screen.getByText(/London/)).toBeInTheDocument();
    });
});