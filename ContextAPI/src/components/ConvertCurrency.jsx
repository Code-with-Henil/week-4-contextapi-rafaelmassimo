import { useContext, useEffect, useState } from "react";
import { GrSun } from "react-icons/gr";
import { IoMoonSharp } from "react-icons/io5";
import { CurrencyContext } from "../contexts/CurrencyContext";

function ConvertCurrency() {
	const { currentCurrency, amount, colorTheme } = useContext(CurrencyContext);
	const { setCurrentCurrency, setAmount, setColorTheme } = useContext(CurrencyContext);

	const [updatedCurrency, setUpdatedCurrency] = useState("");
	const [updatedAmount, setUpdatedAmount] = useState(0);

	const handleCurrencyChange = (e) => {
		e.preventDefault();

		const selectedCurrency = e.target.value;

		setCurrentCurrency(selectedCurrency);
	};

	const usDolarValue = 4.87;
	const cadDolarValue = 3.6;

	useEffect(() => {
		setUpdatedCurrency(currentCurrency);
		setUpdatedAmount(amount);
	}, [currentCurrency, amount]);

	const [amoutConverted, setAmoutConverted] = useState(0);

	function convertAmount() {
		if (updatedAmount === 0) {
			alert("Please input a value to be converted");
		}
		if (updatedCurrency === "US-dolar") {
			setAmoutConverted(updatedAmount / usDolarValue);
		} else if (updatedCurrency === "CAD-dolar") {
			setAmoutConverted(updatedAmount / cadDolarValue);
		} else {
			alert("You need to choose a currency option");
		}
	}

	return (
		<>
			<nav className="w-3/5 flex justify-between">
				<button
					className={`bg-gradient-to-l from-inherit  hover:bg-sky-800 mt-20 ml-10 rounded-full bg-white p-3 absolute top-0 transition duration-1000 ease-in-out`}
					onClick={() =>
						setColorTheme(colorTheme === "light" ? "dark" : "light")
					}
				>
					{colorTheme === "light" ? (
						<IoMoonSharp className="hover:text-blue-700 text-3xl" />
					) : (
						<GrSun className="text-orange-200 hover:text-amber-600 text-3xl" />
					)}
				</button>
			</nav>
			<div className="p-48 transition duration-1000 ease-in-out flex flex-col w-3/5">
				<form className="flex flex-col" onSubmit={convertAmount}>
					<p className="text-3xl font-bold font-normal">
						From Reais Brazil:{" "}
						{amount.toLocaleString(undefined, {
							style: "currency",
							currency: "BRL",
						})}
					</p>
					<br />
					{currentCurrency !== "" && (
						<h2 className="text-3xl font-semibold m-4">
							To {currentCurrency}:{" "}
							{amoutConverted.toLocaleString(undefined, {
								style: "currency",
								currency: "USD",
							})}
						</h2>
					)}
					<label htmlFor="currency">
						Select The Currency to be convert in:{" "}
					</label>
					<select
						className={`p-2 m-3 rounded-md transition duration-500 ease-in-out ${
							colorTheme === "light" ? "text-black " : "bg-cyan-950 text-white"
						}`}
						onChange={handleCurrencyChange}
						name="currency"
						id="currency"
					>
						<option value="">Select an option</option>
						<option value="US-dolar">US Dolar</option>
						<option value="CAD-dolar">CAD Dolar</option>
					</select>

					<label htmlFor="amount">
						Insert here the amount in R$ to be converted
					</label>
					<input
						className={`rounded-md m-3 p-2 transition duration-500 ease-in-out ${
							colorTheme === "light" ? "text-black " : "bg-cyan-950 text-white"
						}`}
						onChange={(e) => {
							const inputValue = e.target.value;
							setAmount(parseFloat(inputValue));
						}}
						type="number"
					/>
					<button
						className="p-3 mx-auto block bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-l transition duration-1000 ease-in-out rounded-md mt-5 mb-8 w-40 ring-2 ring-blue-500/50"
						type="button"
						onClick={convertAmount}
					>
						Convert
					</button>
				</form>
			</div>
		</>
	);
}

export default ConvertCurrency;
