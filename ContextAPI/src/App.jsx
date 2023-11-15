import { useContext } from "react";
import "./App.css";
import { CurrencyContext } from "./contexts/CurrencyContext";
import ConvertCurrency from "./components/ConvertCurrency";

function App() {
	const { colorTheme } = useContext(CurrencyContext);

	return (
		<div className={`${colorTheme === "light" ? 'ease-in-out bg-gradient-to-r from-white from-20% via-blue-200 via-50% to-white to-90% ' : 'bg-gradient-to-r from-black from-55% to-blue-500  text-white'} flex flex-col items-center`}>
			<ConvertCurrency />
		</div>
	);
}

export default App;


