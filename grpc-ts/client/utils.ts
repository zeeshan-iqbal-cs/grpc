import { UsersClient } from "../proto/user_grpc_pb";
import { credentials } from "@grpc/grpc-js";

const port = 3000;
console.log("running the client");
export const client = new UsersClient(
  `localhost:${port}`,
  credentials.createInsecure()
);

export const noop = () => {};
