import { createContext, useState } from "react";

export const CurrencyContext = createContext();

function AppProvider({ children }) {
	const [currentCurrency, setCurrentCurrency] = useState("");
	const [amount, setAmount] = useState(0);
	const [colorTheme, setColorTheme] = useState("dark");

	const value = {colorTheme, currentCurrency, amount, setCurrentCurrency, setAmount, setColorTheme};

	return (
		<CurrencyContext.Provider value={value}>
			{children}
		</CurrencyContext.Provider>
	);
}

export default AppProvider;
