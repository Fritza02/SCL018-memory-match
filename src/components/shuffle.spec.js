import random from "./shuffle.js"
const nombres =['fritza','mireya','constanza','ysandys']
const resultados = random(nombres);
describe('random', () => {
    it('deberia ser una funcion', () => {
    expect(typeof random ).toBe('function');
    });
    it('deberia randomizar un arreglo', () => {
    /* expect(random (nombres)).toBe(['']);*/
        expect(resultados.length).toBe(nombres.length);
        expect(resultados[3]).not.toBe('ysandys');
    });
});
