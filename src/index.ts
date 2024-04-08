import http from "http";
import server from "./server";

const app = http.createServer(server);
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("running on port: ", PORT));
