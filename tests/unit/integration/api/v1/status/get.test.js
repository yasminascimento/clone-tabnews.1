test("GET to should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/status");
  expect(response1.status).toBe(200);
});
