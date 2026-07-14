export const config = {
  runtime: "edge",
};

export default function () {
  return new Response("", {
    status: 204,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}