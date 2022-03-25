describe('TAT api testing', () => {
    it('find restaurant - pass', () => {
        const api = Cypress.env("token")
        console.log(api)
        cy.request({
            method: 'GET', 
            url: '/restaurant/P08000001', 
            qs: {
              starred: 'true'
            },
            headers: {
              accept: 'application/json',
              'accept-Language' : "TH",
              authorization : "Bearer " + Cypress.env("token")
            }
          }).then((res) => {
            expect(res.status).to.eq(200)
            assert.isObject(res.body, 'Response is an Object')
          })
    });

    it('find accommodation - pass', () => {
        cy.request({
            method: 'GET', 
            url: '/accommodation/P02000001', 
            qs: {
              starred: 'true'
            },
            headers: {
              accept: 'application/json',
              'accept-Language' : "TH",
              authorization : "Bearer " + Cypress.env("token")
            }
          }).then((res) => {
            expect(res.status).to.eq(200)
            assert.isObject(res.body, 'Response is an Object')
          })
    });

    it('find attraction - pass', () => {
        cy.request({
            method: 'GET', 
            url: '/attraction/P03000001', 
            qs: {
              starred: 'true'
            },
            headers: {
              accept: 'application/json',
              'accept-Language' : "TH",
              authorization : "Bearer " + Cypress.env("token")
            }
          }).then((res) => {
            expect(res.status).to.eq(200)
            assert.isObject(res.body, 'Response is an Object')
          })
    });

    it('find restaurant - wrong place_id', () => {
      cy.request({
          method: 'GET', 
          url: '/restaurant/P080000011111',
          failOnStatusCode: false,
          qs: {
            starred: 'true'
          },
          headers: {
            accept: 'application/json',
            'accept-Language' : "TH",
            authorization : "Bearer " + Cypress.env("token")
          }
        }).then((res) => {
          expect(res.status).to.eq(404)
        })
  });

    it('find accommodation - wrong place_id', () => {
      cy.request({
          method: 'GET', 
          url: '/accommodation/P020000011111', 
          failOnStatusCode: false,
          qs: {
            starred: 'true'
          },
          headers: {
            accept: 'application/json',
            'accept-Language' : "TH",
            authorization : "Bearer " + Cypress.env("token")
          }
        }).then((res) => {
          expect(res.status).to.eq(404)
        })

  });

  it('find attraction - wrong place_id', () => {
      cy.request({
          method: 'GET', 
          url: '/attraction/P030000011111', 
          failOnStatusCode: false,
          qs: {
            starred: 'true'
          },
          headers: {
            accept: 'application/json',
            'accept-Language' : "TH",
            authorization : "Bearer " + Cypress.env("token")
          }
        }).then((res) => {
          expect(res.status).to.eq(404)
        })
  });
 });