let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

chai.should();

chai.use(chaiHttp);

describe('API test', () => {
    //get
    describe("Get data from db", () => {
        // get all
        it('test get all data', () => {
            chai.request(server)
            .get("/getcomments")
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eq(2);
            })
        })
        // wrong path
        it('test wrong path', () => {
            chai.request(server)
            .get("/getcomment")
            .end((err, res) =>{
                res.should.have.status(404);
            })
        })
        // get by id
        it('test get by id', () => {
            const placeId = 1;
            chai.request(server)
            .get("/getcomments/" + placeId)
            .end((err, res) =>{
                res.should.have.status(200);
            })
        })
        // get by id that don't exist
        it('test get by id error', () => {
            const placeId = 4;
            chai.request(server)
            .get("/getcomments/" + placeId)
            .end((err, res) =>{
                res.should.have.status(404);
            })
        })
    })
})