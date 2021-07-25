import { User, UserStore } from "../../../components/users/model";

const store = new UserStore();

const users = [
  {
    firstName: "testUser1",
    lastName: "testUser1",
    password: "veronica1",
  },
  {
    firstName: "testUser2",
    lastName: "testUser2",
    password: "veronica1",
  },
  {
    firstName: "testUser3",
    lastName: "testUser3",
    password: "veronica1",
  },
];

beforeAll(async (done) => {
  users.forEach(async (user) => await store.addUser(user));
  done();
});

describe("UserStore", () => {
  it("should be defined", () => {
    expect(store).toBeDefined();
  });

  it("should be an instance of UserStore", () => {
    expect(store instanceof UserStore).toBeTruthy();
  });

  it("should have a method addUser", () => {
    expect(store.addUser).toBeDefined();
  });

  it("should have a method getAllUsers", () => {
    expect(store.getAllUsers).toBeDefined();
  });

  it("should have a method getUserById", () => {
    expect(store.getUserById).toBeDefined();
  });

  it("should return a list of users", async (done) => {
    const users = await store.getAllUsers();
    expect(users).toBeDefined();
    expect(users?.length).toBeGreaterThan(0);
    done();
  });

  it("should return a single user", async (done) => {
    const user = await store.getUserById("1");
    expect(user).toBeDefined();
    done();
  });
});
