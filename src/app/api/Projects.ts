export const getProjects = async () => {
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  const res = await fetch(
    new URL(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/hello'),
  );
  console.log(await res.json());
};
//testing

export default getProjects;
