import { createAction, props } from "@ngrx/store";
import User from "../interface/interface";


export const loadUser = createAction (
    '[User] Load User', 
)

export const loadUserSuccess = createAction (
    '[User] Load User Success',
    props<{ users: User[] }>()
)

export const loadUserFailed = createAction (
    '[User] Load User Success',
    props<{ error: string }>()
)

export const deleteUser = createAction (
    '[User] Delete User',
    props<{ user: User }>()  
);

export const addUser = createAction (
    '[User] Add User',
    props<{ user: User }>()
);

export const editUser = createAction (
    '[User] Edit User',
    props<{ user: User }>()
)