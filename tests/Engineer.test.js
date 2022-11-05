const Engineer = require('../lib/Engineer')

// Arrange
const name = "Bob"
const id = "123"
const email = "bob@fakemail.com"
const github = "github.com/bob"

// Act
const engineer = new Engineer(name, id, email, github)

describe("sample", () => {
    it("Returns an Engineer object", () => {
        // Assert
        expect(engineer instanceof Engineer).toBe(true)
    })

    it ("Has the correct github", () => {
        expect(engineer.github).toBe(github)
    })

    it ("Returns the correct github", () => {
        expect(engineer.getGithub()).toBe(github)
    })

    it ("Has the correct role", () => {
        expect(engineer.role).toBe("Engineer")
    })

    it ("Returns the correct role", () => {
        expect(engineer.getRole()).toBe("Engineer")
    })
})