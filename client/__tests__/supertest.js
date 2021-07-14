const request = require('supertest');

const path = require('path');
const fs = require('fs');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status', () => {
        return request(server).get('/').expect(200);
      });
    });
  });
});

describe('Route integration', () => {
  describe('/api/categories', () => {
    describe('GET', () => {
      it('responds with 200 status', () => {
        return request(server).get('/api/categories').expect(200);
      });
    });
  });
});

describe('Route integration', () => {
  describe('/api/allcategories', () => {
    describe('GET', () => {
      it('responds with 200 status', () => {
        return request(server).get('/api/allcategories').expect(200);
      });
    });
  });
});

xdescribe('Route integration', () => {
  describe('/api/bookmarks', () => {
    describe('POST', () => {
      const dummy = {
        title: 'title',
        url: 'test.url.dummy',
        thumbnail: 'tst thumb',
        caption: 'this camption is fake',
        category_id: '01',
        user_id: '01',
      };

      it('responds with 200 status', () => {
        return request(server)
          .post('/api/bookmarks')
          .send(dummy)
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
});

describe('Route integration', () => {
  describe('/api/categories', () => {
    describe('GET', () => {
      it('responds with 200 status', () => {
        return request(server).get('/api/categories').expect(200);
      });
    });
  });
});

describe('delte functionality', () => {
  describe('/api/bookmarks', () => {
    describe('DELETE', () => {
      const erase = { bookmark_id: 37 };

      it('responds with 200 status', () => {
        return request(server)
          .delete('/api/bookmarks')
          .send(erase)
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
});
