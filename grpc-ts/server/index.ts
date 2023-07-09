import { Server, ServerCredentials } from "@grpc/grpc-js";
import { UsersService } from "../proto/user_grpc_pb";
import { UsersServer } from "./service";

const server = new Server();
server.addService(UsersService, new UsersServer());

const port = 3000;
const uri = `localhost:${port}`;
console.log(`Listening on ${uri}`);
server.bindAsync(
  `0.0.0.0:${port}`,
  ServerCredentials.createInsecure(),
  (err, p) => {
    if (err) {
      console.log(
        `There was an error running the server: ${JSON.stringify(err)} ${err}`
      );
    } else {
      console.log(`Server is nunning on port: ${p}`);
      server.start();
    }
  }
);
