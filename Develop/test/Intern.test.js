const Intern = require("../lib/Intern");
const mockData = {
  mockId: 100,
  mockName: 'Alice',
  mockEmail: 'test@test.com',
  mockRoleIntern: 'Intern',
  mockGitHub: 'GitHubUser',
  mockOfficeNumber: 100,
  mockSchool: 'UCLA'
}

test("Can set school via constructor", () => {
  const e = new Intern(mockData.mockId, mockData.mockName, mockData.mockRoleIntern, mockData.mockEmail, mockData.mockSchool);
  expect(e.school).toBe(mockData.mockSchool);
});

test("getRole() should return \"Intern\"", () => {
  const e = new Intern(mockData.mockId, mockData.mockName, mockData.mockRoleIntern, mockData.mockEmail, mockData.mockSchool);
  expect(e.getRole()).toBe(mockData.mockRoleIntern);
});

test("Can get school via getSchool()", () => {
  const e = new Intern(mockData.mockId, mockData.mockName, mockData.mockRoleIntern, mockData.mockEmail, mockData.mockSchool);
  expect(e.getSchool()).toBe(mockData.mockSchool);
});
