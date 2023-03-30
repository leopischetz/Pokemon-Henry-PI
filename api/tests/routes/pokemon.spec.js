/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
// const pokemon = {
//   name: 'Pikachu',
// };

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  // beforeEach(() => Pokemon.sync({ force: true })
  //   .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', function(done) {
      this.timeout(5000); 
      agent.get('/pokemons')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });

  describe('GET by Name /pokemons', ()=>{
    it('should get 200', function(done){
      this.timeout(10000);
      agent.get('/pokemons?name=totodile')
      .expect(200)
      .end(function(err,res){
        if(err) return done(err);
        done();
      });    
     });

  describe('GET by Id /:idPokemon', ()=>{
    it('should get 200', function(done){
      this.timeout(10000);
      agent.get('/pokemons/37')
      .expect(200)
      .end(function(err,res){
        if(err) return done(err);
        done();
      });
    });
   });

  })

});
