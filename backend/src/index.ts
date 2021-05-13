import Main from "./main";
import * as http from "http";


const port = process.env.PORT || 8080;
const server = http.createServer(Main)
server.listen(port);
server.on("listening", onListening);

function onListening(): void {
  const addr = server.address();
  
  const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
}