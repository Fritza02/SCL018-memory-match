import state from './estados.js'

const data1 = [
    {dataset:{
        imagen: 'https://i.imgur.com/96NVlic.png'
    }},
    
    {dataset:{
        imagen: 'https://i.imgur.com/DJBjYIy.png'
    }},
];

const data2 = [
    {dataset:{
        imagen: 'https://i.imgur.com/96NVlic.png'
    }},
    
    {dataset:{
        imagen: 'https://i.imgur.com/96NVlic.png'
    }},
];

describe('estados', () => {
    it('debería ser una función', () => {


    expect(typeof state).toBe('function');
    })

    it('no debería hacer match', () => {


    expect(state(data1)).toBe(false);
    })

    it('debería hacer match', () => {


    expect(state(data2)).toBe(true);
    })
})