import "server-only";

export const serverSideFunction = () => {
  console.log(
    `use multiple libraries,
    use environment variables,
    interact with a database,
    process confidential information`
//백틱 사용해서 하면 줄바꿈 가능
  );

  return "server result";
};
