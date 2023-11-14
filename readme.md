# Context API

## Question:

Create a React SPA with Context API, where you manage `currentCurrency` inside your context. The user should be allowed to change the currency and it reflects across the app via the context.

-   You can install dependencies like React Router, Styling Libraries, etc if needed.

## Component Structure:

    - App.jsx
        - CurrencySelector.jsx - Triggers the context update
        - DisplayCurrency.jsx - Displays the current value from Context

## Steps:

1. Create a React App: Set up a new React application using create-react-app or your preferred method. Also set up styles with your preferred choice.

2. Create a Currency Context: Define a new context using createContext. This context will hold the `selected currency` and define a method to switch between currencies **(Give 2 options minimum)**.

3. Currency Selection UI: Create a user interface element (e.g., a dropdown or buttons) that allows users to choose their preferred currency. This UI should trigger a function to update the selected currency within the `CurrencyProvider`.

4. Design a simple component that displays the current currency from your context. UI is your choice completely. Minimum Requirement is to design a `seperate React Component` and render the currency there.

5. Bonus: Context Nesting: If you want to practice context nesting, you can add another context for managing themes `(Light & Dark)` alongside the currency context.
