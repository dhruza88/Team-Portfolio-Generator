const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

const mockData = {
  mockId: 100,
  mockName: 'Alice',
  mockEmail: 'test@test.com',
  mockRoleManager: 'Manager',
  mockGitHub: 'GitHubUser',
  mockOfficeNumber: 100,
  mockSchool: 'UCLA'
}

test("Can set office number via constructor argument", () => {
  const e = new Manager(mockData.mockId, mockData.mockName, mockData.mockRoleManager, mockData.mockEmail, mockData.officeNumber);
  expect(e.officeNumber).toBe(mockData.officeNumber);
});

test('getRole() should return "Manager"', () => {
  const e = new Manager(mockData.mockId, mockData.mockName, mockData.mockRoleManager, mockData.mockEmail, mockData.officeNumber);
  expect(e.getRole()).toBe(mockData.mockRoleManager);
});

test("Can get office number via getOffice()", () => {
  const e = new Manager(mockData.mockId, mockData.mockName, mockData.mockRoleManager, mockData.mockEmail, mockData.officeNumber);
  expect(e.getOfficeNumber()).toBe(mockData.officeNumber);
});
