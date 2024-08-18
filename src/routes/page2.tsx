import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  return { msg: "Hello World" };
};

export function Component() {
  const { msg } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  return (
    <div>
      <h1>Page 2</h1>
      <p>Message: {msg}</p>
    </div>
  );
}
