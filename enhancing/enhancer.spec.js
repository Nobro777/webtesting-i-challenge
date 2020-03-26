const enhancer = require('./enhancer.js');
const { get, repair, fail, succeed } = require('./enhancer.js')

describe("enhancer.js", () => {

    describe("repair function", () => {
        it("changes item durability to 100", () => {
            const item = {
                name: "Sword",
                durability: 50,
                enhancement: 15
            }
            const expected = {
                name: "Sword",
                durability: 100,
                enhancement: 15
            }
            const repairItem = repair(item);
            expect(repairItem).toEqual(expected);
        })
    })

    describe("succeed function", () => {
        it("raises item enhancement by 1", () => {
            const item = {
                name: "Sword",
                durability: 20,
                enhancement: 15
            }
            const expected = {
                name: "Sword",
                durability: 20,
                enhancement: 16
            }
            const enhanceItem = succeed(item)
            expect(enhanceItem).toEqual(expected)
        })
    })

    describe("fail function", () => {
        it("descreses durability by 5 if enhancement is 14 or less", () => {
            const item = {
                name: "Sword",
                durability: 50,
                enhancement: 14
            }
            const expected = { 
                name: "Sword",
                durability: 45,
                enhancement: 14
            }
            const failItem = fail(item);
            expect(failItem).toEqual(expected);
        })

        it("descreases durability by 10 if enhancement is 15", () => {
            const item = {
                name: "Sword",
                durability: 65,
                enhancement: 16
            }
            const expected = {
                name: "Sword",
                durability: 55,
                enhancement: 16,
            }
            const failItem = fail(item);
            expect(failItem).toEqual(expected)
        })

        it("decreases enhancement by 1 if enhancement is greater than 16", () => {
            const item = {
                name: "Sword",
                durability: 75,
                enhancement: 20
            }
            const expected = {
                name: "Sword",
                durability: 65,
                enhancement: 19,
            }
            const failItem = fail(item);
            expect(failItem).toEqual(expected);
        })
    })
})