import React from "react";
import "./../styles/App.css";

function App() 
{
	return (
	<div id="main">
	//Do not alter main div
	//Please do not alter the functional component as tests depend on the type of component.
		<text area="text" id="task" required>
		<ol>
		<li>Buy milk</li>
		<li>Buy vegetable</li>
		<button type="submit" value="submit">Submit</button>
	</div>
	);
}


export default App;
