import { render, screen } from "@testing-library/react";
import { LocationList } from "./LocationList";
import { describe, expect, it } from "vitest";

describe("LocationList", () => {
    const mockLocations = [
        {
            name: "Office 1",
            address1: "Addr1",
            address2: "Addr2",
            city: "City1",
            postcode: "111"
        },
        {
            name: "Office 2",
            address1: "Addr1",
            address2: "Addr2",
            city: "City2",
            postcode: "222"
        }
    ];

    it("renders multiple locations cards", () => {
        render(<LocationList locations={mockLocations} />);

        expect(screen.getByText("Office 1")).toBeInTheDocument();
        expect(screen.getByText("Office 2")).toBeInTheDocument();
    });
});