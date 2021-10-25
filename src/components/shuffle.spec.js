import shuffle from './shuffle.js'

describe('shuffle', () => {
    it('debería ser una función', () => {

    expect(typeof shuffle).toBe('function');
    });

    it('debería retornar 4 para "[1,2,3,4]"' , () => {
    let array = [1,2,3,4];

    expect(shuffle(array)).toHaveLength(4);
    });

    it('debería retornar true para "[1,2,3,4]"' , () => {
    let array = [1,2,3,4];

    expect(shuffle(array)).toContain(3);

    });
    it('deberia randomizar un arreglo', () => {
        let array = [1,2,3,4];
        expect(shuffle(array).length).toBe(array.length);
        expect(shuffle(array[3])).not.toBe('4');
    });
})
