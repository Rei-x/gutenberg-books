import "@testing-library/jest-dom/extend-expect";
import { server } from "./src/mocks/server";
/**
 * https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
 */
const matchMediaMock = () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

matchMediaMock();

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
