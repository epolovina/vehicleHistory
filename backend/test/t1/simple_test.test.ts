import * as chai from "chai";
import app from "../../src/main";

import chaiHttp = require("chai-http");
const expect = chai.expect;

chai.use(chaiHttp);

describe("GET /", () => {
  const url = "/";
  
  it("responds with 200", () => {
    return chai.request(app)
      .get(url)
      .then((res) => {
        expect(res.status).to.equal(200);
      });
  });
});
