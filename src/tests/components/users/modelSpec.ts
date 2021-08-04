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

beforeAll(async () => {
  users.forEach(async (user) => await store.addUser(user));
});

describe("User", () => {
  describe("User Methods", () => {
    it("store should be defined", () => {
      expect(store).toBeDefined();
    });

    it("store should be an instance of UserStore", () => {
      expect(store instanceof UserStore).toBeTruthy();
    });

    it("store should have a addUser method", () => {
      expect(store.addUser).toBeDefined();
    });

    it("store should have a getAllUsers method", () => {
      expect(store.getAllUsers).toBeDefined();
    });

    it("store should have a getUserById method", () => {
      expect(store.getUserById).toBeDefined();
    });
  });

  describe("User Model", () => {
    it("should return a single user", async () => {
      const user = await store.getUserById("1");
      expect(user).toBeDefined();
      expect(user?.id).toBeDefined();
      expect(user?.password).toBeDefined();
    });

    it("should return a list of users", async () => {
      const users = await store.getAllUsers();
      expect(users).toBeDefined();
      expect(users?.length).toBeGreaterThan(0);
    });

    it("should create a new user", async () => {
      const user = await store.addUser({
        firstName: "testUser4",
        lastName: "testUser4",
        password: "veronica1",
      });
      expect(user).toBeDefined();
      expect(user?.id).toBeDefined();
      expect(user?.password).toBeDefined();
    });

    it("should authenticate a user", async () => {
      const authenticatedUser = await store.authenticate(
        "testUser4",
        "veronica1"
      );
      expect(authenticatedUser).toBeDefined();
      expect(authenticatedUser?.id).toBeDefined();
      expect(authenticatedUser?.password).toBeDefined();
    });

    it("should not authenticate a user if password is incorrect", async () => {
      const authenticatedUser = await store.authenticate(
        "testUser4",
        "veronica1111"
      );
      expect(authenticatedUser).toBeNull();
    });
  });
});
