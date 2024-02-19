const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//app.use(express.static(static_path));
// app.get("/", (req, res) => {
// 	res.send("wellcome to SHIFT Solution");
// });

// app.get("/about", (req, res) => {
// 	console.log("This is our about page from server.");
// });

// app.get("/weather", () => {
// 	console.log("This is our weather page from server.");
// });

// app.get("*", () => {
// 	console.log("404 error page, Opps page not found....  ");
// });

// app.set("views engine", "hbs");

app.get("/", (req, res) => {
	res.send("wellcome to SHIFT Solution");
});

app.get("/about", (req, res) => {
	console.log("This is our about page from server.");
});

app.get("/weather", () => {
	console.log("This is our weather page from server.");
});

app.get("*", () => {
	console.log("404 error page, Opps page not found....  ");
});

app.listen(port, () => {
	console.log(`server is running at the ${port}`);
});
