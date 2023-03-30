const { Pokemon, Type, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
      
      it('should throw an error if name is not unique', (done) => {
        Pokemon.create({ name: 'Pikachu' })
          .then(() => Pokemon.create({ name: 'Pikachu' }))
          .then(() => done(new Error('Name must be unique')))
          .catch(() => done());
      });
    });
    
    describe('hp', () => {
      it('should throw an error if hp is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid hp')))
          .catch(() => done());
      });
      
      it('should throw an error if hp is less than 1', (done) => {
        Pokemon.create({ name: 'Pikachu', hp: 0 })
          .then(() => done(new Error('Hp must be greater than or equal to 1')))
          .catch(() => done());
      });
      
      it('should throw an error if hp is greater than 300', (done) => {
        Pokemon.create({ name: 'Pikachu', hp: 301 })
          .then(() => done(new Error('Hp must be less than or equal to 300')))
          .catch(() => done());
      });
      
      it('should work when its a valid hp', () => {
        Pokemon.create({ name: 'Pikachu', hp: 100 });
      });
    });
    
    describe('attack', () => {
      it('should throw an error if attack is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid attack')))
          .catch(() => done());
      });
      
      it('should throw an error if attack is less than 1', (done) => {
        Pokemon.create({ name: 'Pikachu', attack: 0 })
          .then(() => done(new Error('Attack must be greater than or equal to 1')))
          .catch(() => done());
      });
      
      it('should throw an error if attack is greater than 200', (done) => {
        Pokemon.create({ name: 'Pikachu', attack: 201 })
          .then(() => done(new Error('Attack must be less than or equal to 200')))
          .catch(() => done());
      });
      
      it('should work when its a valid attack', () => {
        Pokemon.create({ name: 'Pikachu', attack: 100 });
      });
    });
    
    describe('defense', () => {
      it('should throw an error if defense is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid defense')))
          .catch(() => done());
      });
      
      it('should throw an error if defense is less than 1', (done) => {
        Pokemon.create({ name: 'Pikachu', defense: 0 })
        .then(() => done(new Error('Defense must be greater than or equal to 1')))
        .catch(() => done());
    });

      it('should throw an error if defense is greater than 250', (done) => {
      Pokemon.create({ name: 'Pikachu', defense: 251 })
        .then(() => done(new Error('Defense must be less than or equal to 250')))
        .catch(() => done());
    });

      it('should work when its a valid defense', () => {
      Pokemon.create({ name: 'Pikachu', defense: 100 });
    });
    });

    describe('speed', () => {
      it('should throw an error if spped is less than 1', (done) => {
        Pokemon.create({ name: 'Pikachu', speed: 0 })
        .then(() => done(new Error('Speed must be greater than or equal to 1')))
        .catch(() => done());
    });

      it('should throw an error is speed is greater than 200', (done)=>{
        Pokemon.create({ name: "Pikachu", speed: 201})
        .then(()=> done(new Error('Speed must be less than or equual to 200')))
        .catch(()=>done());
      });

      it('should work when its a valid speed', ()=>{
        Pokemon.create({ name: "Pikachu", speed: 50 });
      }); 
    });

    describe('height', ()=>{
      it('should throw an error if height is less than 1', (done)=>{
        Pokemon.create({ name: "Pikachu", height:0 })
        .then(()=> done(new Error('Height must be greater than equal to 1')))
        .catch(()=>done());
      });

      it('should work when its a valid height', ()=>{
        Pokemon.create({ name: "Pikachu", height: 10 });
      });
    });

    describe('weight', ()=>{
      it('should throw an error ir weight is less than 1', (done)=>{
        Pokemon.create({ name: "Pikachu", weight:0 })
        .then(()=> done(new Error('Weight must be greater than equal to 1')))
        .catch(()=>done());
      });

      it('should work when its a valid weight', ()=>{
        Pokemon.create({ name: "Pikachu", weight: 10 });
      });
    });
  });
});

describe('Type model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  
  describe('Validators', () => {
    beforeEach(() => Type.sync({ force: true }));
    
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Type.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });

      it('should throw an error if name is invalid', (done)=>{
        Type.create({ name: "barro" })
        .then(()=> done(new Error('It requires a valid name')))
        .catch(() => done());
      });

      it('should work if name is valid', ()=>{
        Type.create({ name: "dark" });
      });      
    });

    describe('id', ()=>{
      it('should throw an error if id is less than 1', (done)=>{
        Type.create({ name: "ice", id: 0})
        .then(()=> done(new Error('It requires a id greater or equal than 1'))).
        catch(()=>done());
      });

      it('should throw an error if id is greater than 20', (done)=>{
        Type.create({ name: "dragon", id: 21 })
        .then(()=> done(new Error('It requires a id less or equal than 20'))).
        catch(()=>done());
      });

      it('should work if id is valid', ()=>{
        Type.create({ name: "dark", id: 15 });
      });   

    });
  });
});
