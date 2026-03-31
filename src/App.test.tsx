import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, expect, it, vi } from "vitest";

// Mock hook
vi.mock("./hooks/useLocations", () => ({
    useLocations: () => ({
        locations: [],
        loading: false,
        error: null,
        hasMore: true,
        loadMoreLocations: vi.fn()
    })
}));

describe("App", () => {
    it("renders Load More button", () => {
        render(<App />);

        expect(
            screen.getByRole("button", { name: /load more/i })
        ).toBeInTheDocument();
    });
});