import ganador from "./ganador.js"
import estados from "./estados.js"
import perdedor from "./perdedor.js"

/*const data = [
    { id: 'marge', imageUrl: 'https://i.imgur.com/96NVlic.png', bgColor: '#FFEC5E' },
    { id: 'maggie', imageUrl: 'https://i.imgur.com/DJBjYIy.png', bgColor: '#FFEC5E' },
    { id: 'maggie', imageUrl: 'https://i.imgur.com/DJBjYIy.png', bgColor: '#FFEC5E'  },
];*/

const data = ["marge","maggie","maggie"]

/*let firstOption = data.maggie;
let secondOption = data.maggie;*/

describe("ganador", () => {
    it("debería ser una función", () => {

    expect(typeof ganador).toBe('function');
    })
})

describe("perdedor", () => {
    it("debería ser una función", () => {

    expect(typeof perdedor).toBe('function');
    })
})

describe("estados", () => {
    it("debería ser una función", () => {

    expect(typeof estados).toBe('function');
    })

    it("debería hacer match", () => {

    expect(estados(data)).toEqual(ganador);
    })
})

