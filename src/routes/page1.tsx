import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { z } from "zod";

const personSchema = z.object({
  name: z.string(),
  hair_color: z.string(),
  gender: z.string(),
});
const peopleSchema = z.object({
  count: z.number(),
  results: z.array(personSchema),
});

async function loader() {
  const { data } = await axios.get("https://swapi.dev/api/people");
  return peopleSchema.parse(data);
}

export function Component() {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div>
      <h1>Star Wars People</h1>
      {data.results.map((p) => (
        <div key={p.name}>
          <p>{p.name}</p>
          <p>{p.hair_color}</p>
          <p>{p.gender}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

Component.loader = loader;
