import estados from './estados.js'

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


    expect(typeof estados).toBe('function');
    })

    it('no debería hacer match', () => {


    expect(estados(data1)).toEqual(false);
    })

    it('debería hacer match', () => {


    expect(estados(data2)).toEqual(true);
    })
})

