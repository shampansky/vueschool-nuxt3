export default defineEventHandler(async (event) => {
  // return { message: getQuery(event) }; // from h3 docs

  const body = await readBody(event);
  return { message: body };
});

// /api/helloWorld
