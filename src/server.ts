import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import fastify from "fastify";
import { createEvent } from "./routes/create-event";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";

export const app = fastify();
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);

app.listen({ port: 3333 }).then(() => {
  console.log("Server running on port 3333");
});
