process.env.NODE_ENV = 'ci';

var expect = require('chai').expect;
let chaiHttp = require('chai-http');
let chai = require('chai');
let server = require('../index');
chai.use(chaiHttp);


describe('/GET homepage', () => {
    it('it should GET the home page', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                chai.expect(res.text).equal('Well hello #4')
                done();
            });
    });
});
