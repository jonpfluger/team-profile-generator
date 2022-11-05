const Employee = require('../lib/Employee')

// Arrange
const name = "Bob"
const id = "123"
const email = "bob@fakemail.com"

// Act
const employee = new Employee(name, id, email)

describe("sample", () => {
    it("Returns an Employee object", () => {
        // Assert
        expect(employee instanceof Employee).toBe(true)
    })

    it ("Has the correct name", () => {
        expect(employee.name).toBe(name)
    })

    it ("Returns the correct name", () => {
        expect(employee.getName()).toBe(name)
    })

    it ("Has the correct id", () => {
        expect(employee.id).toBe(id)
    })

    it ("Returns the correct id", () => {
        expect(employee.getID()).toBe(id)
    })

    it ("Has the correct email", () => {
        expect(employee.email).toBe(email)
    })

    it ("Returns the correct email", () => {
        expect(employee.getEmail()).toBe(email)
    })

    it ("Has the correct role", () => {
        expect(employee.role).toBe("Employee")
    })

    it ("Returns the correct role", () => {
        expect(employee.getRole()).toBe("Employee")
    })
})