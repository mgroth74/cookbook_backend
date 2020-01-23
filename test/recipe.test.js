const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:3000");

describe("GET /recipes", function() {
  it("should return a 200 response", function(done) {
    api
      .get("/recipes")
      .set("Accept", "application/json")
      .expect(200, done);
  });
})


describe("POST,PUT /recipes", function() {
  before(function(done) {
    api
      .post("/recipes")
      .set("Accept", "application/json")
      .send({
        name: "toast",
        course: "main",
        type: "breakfeast",
        calories: 0
      })
      .end(done);
  })

  it("should add a recipe object to the collection of recipes and return it", function(done){
    api
      .get("/recipes/name/toast")
      .set("Accept", "application/json")
      .end(function(error, response){
      expect(response.body[0].name).to.equal("toast");
        done()
      })
  })

  it("should update the calories of toast andreturn it", function(done){
    api
      .put("/recipes/toast")
      .set("Accept", "application/json")
      .send({
        calories:500
      })
      .end(function(error, response){
       expect(response.body.calories).to.equal(500);
        done()
      })
  })
});


describe("DELETE /recipes", function() {
  before(function(done) {
   api
      .delete("/recipes/toast")
      .set("Accept", "application/json")
      .end(done)
    })
   

  it("should delete toast from the database", function(done){
      api
      .get("/recipes/name/toast")
      .set("Accept", "application/json")
      .end(function(error, response){
        console.log(response)
        expect(response.body.length).to.equal(0);
        done()
      })
   })
})

