const Employee = require("../lib/Employee");
const mockData = {
  mockId: 100,
  mockName: 'Alice',
  mockEmail: 'test@test.com',
  mockRoleEngineer: 'Engineer',
  mockGitHub: 'GitHubUser',
  mockOfficeNumber: 100,
  mockSchool: 'UCLA'
}

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const e = new Employee(mockData.mockId, mockData.mockName, mockData.mockRoleEngineer, mockData.mockEmail);
  expect(e.name).toBe(mockData.mockName);
});

test("Can set id via constructor argument", () => {
  const e = new Employee(mockData.mockId, mockData.mockName, mockData.mockRoleEngineer, mockData.mockEmail);
  expect(e.id).toBe(mockData.mockId);
});

test("Can set email via constructor argument", () => {
  const e = new Employee(mockData.mockId, mockData.mockName, mockData.mockRoleEngineer, mockData.mockEmail);
  expect(e.email).toBe(mockData.mockEmail);
});

test("Can get name via getName()", () => {
  const e = new Employee(mockData.mockId, mockData.mockName, mockData.mockRoleEngineer, mockData.mockEmail);
  expect(e.getName()).toBe(mockData.mockName);
});

test("Can get id via getId()", () => {
  const e = new Employee(mockData.mockId, mockData.mockName, mockData.mockRoleEngineer, mockData.mockEmail);
  expect(e.getId()).toBe(mockData.mockId);
});

test("Can get email via getEmail()", () => {
  const e = new Employee(mockData.mockId, mockData.mockName, mockData.mockRoleEngineer, mockData.mockEmail);
  expect(e.getEmail()).toBe(mockData.mockEmail);
});

test("getRole() should return \"Employee\"", () => {
  const e = new Employee(mockData.mockId, mockData.mockName, mockData.mockRoleEngineer, mockData.mockEmail);
  expect(e.getRole()).toBe(mockData.mockRoleEngineer);
});
