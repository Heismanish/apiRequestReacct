import { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
	const [joke, setJoke] = useState("");

	const getJoke = () => {
		//USING AXIOS:

		// 	Axios.get("https://official-joke-api.appspot.com/random_joke").then(
		// 		(response) => {
		// 			console.log(response);
		// 			setJoke(response.data.setup + "..." + response.data.punchline);
		// 		}
		// 	);
		// };

		// USING FETCH:

		fetch("https://official-joke-api.appspot.com/random_joke")
			.then((response) => response.json())
			.then((data) => {
				setJoke(data.setup + "..." + data.punchline);
			});
	};

	return (
		<div>
			Hello Youtube <button onClick={getJoke}>Get the Joke right now</button>
			{joke}
		</div>
	);
}

export default App;
