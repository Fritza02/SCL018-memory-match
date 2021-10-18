import App from './App.js';
import outCards from './outCards.js';
import comienzaTiempo from './cronometro.js';


describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe('outCards', () => {
  it('debería ser una función', () => {

  expect(typeof outCards).toBe('function');
  })

})

describe('comienzaTiempo', () => {
  it('debería ser una función', () => {

  expect(typeof comienzaTiempo).toBe('function');
  })

})
