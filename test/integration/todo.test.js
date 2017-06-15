/* global describe, it */
const should = require("should");
const fs = require("fs-promise");
const path = require("path");
const requestPromise = require("request-promise");

const request = requestPromise.defaults({ json: true });

describe("Todo unit test", function() {
  it("should create a todo", async function() {
    const createTodoReply = await request
      .post({
        uri: "http://localhost:1337/api/todo",
        body: {
          description: "just a test"
        }
      })
      .catch(createTodoError => console.log(createTodoError));
  });
});
