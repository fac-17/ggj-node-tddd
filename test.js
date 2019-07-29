const test=require('tape');
const supertest=require('supertest');
const router = require('./router');
test('Initialise',(t)=>{
    let num = 2;
    t.equal(2,2,'Should return 2');
    t.end();
})

test("Home route",(t)=>{
    supertest(router)
     .get('/')
     .expect(200)
     .expect('Content-type',/html/)
     .end( (err,res)=>{
         t.error(err);
         t.equal(res.text,'Hello','Should contain "Hello"');
         t.end();
     })
})