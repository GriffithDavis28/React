import { createContext } from "react";
import { Users } from "../Types/UserType";

type GetUser = {
    user: Users[],
    detail: (user: Users) => void
}

export const UserContext = createContext<GetUser | undefined>(undefined);