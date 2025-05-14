export type RoleState = {
  user: string | null;
  theme: "light" | "dark";
};

export const initialState: RoleState = {
  user: null,
  theme: "light",
};

type Action =
  | { type: "SET_USER"; payload: string }
  | { type: "SET_THEME"; payload: "light" | "dark" };

export const appReducer = (state: RoleState, action: Action): RoleState => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
