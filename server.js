const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware

//Serve up assets
app.use(routes);

//Start the server
app.listen(PORT, function() {
    console.log(`Server listening on PORT ${PORT}`);
})
