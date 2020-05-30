let user = require('../models/User')
const assert = require("assert");

it("get user test", function(){
    assert.equal(user.getUser(1)[0],1)
});