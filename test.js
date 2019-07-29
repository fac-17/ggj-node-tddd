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
});

test('Elephant route', (t) => {
		supertest(router)
		.get('/elephants')
		.expect(404)
		.end((err, res) => {
				t.error(err);
				t.equal(res.text, 'unknown uri');
				t.end();
				});
        });

test('GET /blog',(t)=>{
    supertest(router)
    .get('/blog')
    .expect(200)
    .end( (err,res)=>{
        t.error(err);
        t.deepEqual(JSON.parse(res.text),["one","two","three"]);
        t.end();
    })
})

test('POST /blog', (t) => {
  supertest(router)
  .post('/blog')
  .set({password:'potato'})
  .send(['a', 'b'])
  .expect(200)
  .end( (err, res) => {
    t.error(err);
    t.deepEqual(JSON.parse(res.text),['a', 'b']);
    t.end();
  })
})

test('POST /blog', (t) => {
  supertest(router)
  .post('/blog')
  .expect(403)
  .end((err, res)=>{
    t.error(err);
    t.equal(res.text, 'Forbidden')
    t.end();
  })
})

test('POST /blog without body',(t)=>{
    supertest(router)
    .post('/blog')
    .set({password:'potato'})
    .expect(302)
    .end( (err,res)=>{
        t.error(err);
        t.deepEqual(JSON.parse(res.text),{Location:'/blog'});
        t.end();
    } )
})
