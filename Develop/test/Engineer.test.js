const Engineer = require("../lib/Engineer");
const mockData = {
  mockId: 100,
  mockName: "Alice",
  mockEmail: "test@test.com",
  mockRoleEngineer: "Engineer",
  mockGitHub: "GitHubUser",
  mockOfficeNumber: 100,
  mockSchool: "UCLA"
}

test("Can set mockGitHub account via constructor", () => {
  const e = new Engineer(mockData.mockId, mockData.mockName, mockData.mockRoleEngineer, mockData.mockEmail, mockData.mockGitHub);
  expect(e.gitHub).toBe(mockData.mockGitHub);
});

test("getRole() should return \"Engineer\"", () => {
  const e = new Engineer(mockData.mockId, mockData.mockName, mockData.mockRoleEngineer, mockData.mockEmail, mockData.mockGitHub);
  expect(e.getRole()).toBe(mockData.mockRoleEngineer);
});

test("Can get GitHub username via getGithub()", () => {
  const e = new Engineer(mockData.mockId, mockData.mockName, mockData.mockRoleEngineer, mockData.mockEmail, mockData.mockGitHub);
  expect(e.getGithub()).toBe(mockData.mockGitHub);
});
