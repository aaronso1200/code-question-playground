const {numUniqueEmails} = require('./uniqueEmail')

describe('unique email', function () {
    test('emails with dot should be ignored',() => {
        let input = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
        expect(numUniqueEmails(input)).toEqual(2)
    })
    test('normal email should count',() => {
        let input = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
        expect(numUniqueEmails(input)).toEqual(3)
    })
    
});