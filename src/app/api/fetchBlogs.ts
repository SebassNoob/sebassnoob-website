export async function getBlogs() {
  const res = await fetch(
    new URL(process.env.NEXT_PUBLIC_BACKEND_URL + "/blogposts"),
  );
  console.log(await res.json());
}

export default getBlogs;
