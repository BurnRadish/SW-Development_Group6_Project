const axios = require("axios");

describe("Test get product API", () => {
  jest.setTimeout(10000)
  it("Return status 200", async () => {
    const result = await axios.get("http://localhost:9000/getcomments/123456");
    expect(result.status).toEqual(200);
    expect(result.data).toMatchObject([
      {
        _id: "62309ccb43270366b216774b",
        name: "Sompong",
        comment: "หืมอาหร่อย",
        place_id: "123456",
        rating: 4,
      },
      {
        _id: "6230ab9f43270366b216774c",
        name: "Sompee",
        comment: "โอ้ววอร่อย",
        place_id: "123456",
        rating: 4,
      },
    ]);
  });

  it("Test status 204", async () => {
    //No 0 in DB
    const result = await axios.get("http://localhost:9000/getcomments/0");
    expect(result.status).toEqual(204);
  });
});
