import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { z } from "zod";

const personSchema = z.object({
  name: z.string(),
  hair_color: z.string(),
  gender: z.string(),
});

async function loader() {
  const { data } = await axios.get("https://swapi.dev/api/people/1");
  return {
    person: personSchema.parse(data),
    msg: "Hello World",
  };
}

export function Component() {
  const { msg, person } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div>
      <h1>Page 2</h1>
      <p>Message: {msg}</p>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  );
}

Component.loader = loader;
