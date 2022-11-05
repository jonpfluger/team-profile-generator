const Intern = require('../lib/Intern')

// Arrange
const name = "Bob"
const id = "123"
const email = "bob@fakemail.com"
const school = "school of bob"

// Act
const intern = new Intern(name, id, email, school)

describe("sample", () => {
    it("Returns an Intern object", () => {
        // Assert
        expect(intern instanceof Intern).toBe(true)
    })

    it ("Has the correct school", () => {
        expect(intern.school).toBe(school)
    })

    it ("Returns the correct school", () => {
        expect(intern.getSchool()).toBe(school)
    })

    it ("Has the correct role", () => {
        expect(intern.role).toBe("Intern")
    })

    it ("Returns the correct role", () => {
        expect(intern.getRole()).toBe("Intern")
    })
})