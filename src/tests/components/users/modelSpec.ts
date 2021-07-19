import { User, UserStore } from "../../../components/users/model";

const store = new UserStore();

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
});
