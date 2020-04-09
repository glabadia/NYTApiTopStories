const url =
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ZpGug3AiztIlAGouiN81jpTblge9nYlZ";

// const key = 'ZpGug3AiztIlAGouiN81jpTblge9nYlZ'

async function getData(url, key) {
  const request = await fetch(`${url}`);
  const response = await request.json();
  return response;
}

export { url, getData };
