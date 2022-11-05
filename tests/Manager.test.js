const Manager = require('../lib/Manager')

// Arrange
const name = "Bob"
const id = "123"
const email = "bob@fakemail.com"
const officeNumber = "123-4567"

// Act
const manager = new Manager(name, id, email, officeNumber)

describe("sample", () => {
    it("Returns an manager object", () => {
        // Assert
        expect(manager instanceof Manager).toBe(true)
    })

    it ("Has the correct office number", () => {
        expect(manager.officeNumber).toBe(officeNumber)
    })

    it ("Returns the correct office number", () => {
        expect(manager.getOfficeNumber()).toBe(officeNumber)
    })

    it ("Has the correct role", () => {
        expect(manager.role).toBe("Manager")
    })

    it ("Returns the correct role", () => {
        expect(manager.getRole()).toBe("Manager")
    })
})