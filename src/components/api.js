const BaseUrl = "https://panda-market-api.vercel.app/products";

export default async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(`${BaseUrl}?${query}`);

  if (!response.ok) {
    throw new Error("리스트를 불러오는데 실패했습니다.");
  }

  const data = await response.json();

  return data.list;
}
