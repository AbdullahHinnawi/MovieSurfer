const seatServiceReact = require("./seatServiceReact")
// @ponicode
describe("seatServiceReact.default.getAll", () => {
    test("0", () => {
        let callFunction = () => {
            seatServiceReact.default.getAll()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("seatServiceReact.default.getById", () => {
    test("0", () => {
        let callFunction = () => {
            seatServiceReact.default.getById({ movie: "bc23a9d531064583ace8f67dad60f6bb" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            seatServiceReact.default.getById({ movie: 9876 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            seatServiceReact.default.getById({ movie: 12345 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            seatServiceReact.default.getById({ movie: "da7588892" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            seatServiceReact.default.getById({ movie: "c466a48309794261b64a4f02cfcc3d64" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            seatServiceReact.default.getById({ movie: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("seatServiceReact.default.reserveSeat", () => {
    test("0", () => {
        let callFunction = () => {
            seatServiceReact.default.reserveSeat("v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            seatServiceReact.default.reserveSeat("1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            seatServiceReact.default.reserveSeat("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            seatServiceReact.default.reserveSeat("v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            seatServiceReact.default.reserveSeat("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            seatServiceReact.default.reserveSeat(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
