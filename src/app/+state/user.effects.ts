import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from '@angular/core';
import { UserApiService } from "../service/user-api.service";
import { switchMap, map, catchError, of } from "rxjs";
import { addUser, deleteUser, editUser, loadUser, loadUserFailed, loadUserSuccess } from "./user.action";

export const loadUserEffect = createEffect( ()=> {

  const api = inject(UserApiService)
  const actions$ = inject(Actions);

  return actions$.pipe(
    ofType(loadUser),
    switchMap( ()=> {
      return api.getUsers().pipe(
      map(
        res => { 
          return loadUserSuccess({users: res})
          }),
          catchError( error => {
            return of(loadUserFailed({error}))
        })
      )
    })
  )
}, {functional: true})

export const deleteUser$ = createEffect( ()=> {

  const actions$ = inject(Actions);

   return actions$.pipe(
    ofType(deleteUser),
    map(user => deleteUser(user) )
  )
}, {functional: true, dispatch: false})

export const addUser$ = createEffect( ()=> {

  const actions$ = inject(Actions);

  return actions$.pipe(
    ofType(addUser),
    map(user => addUser(user))
  )

}, {functional: true, dispatch: false})

export const editUser$ = createEffect( ()=> {

  const actions$ = inject(Actions);

  return actions$.pipe(
    ofType(editUser),
    map(user => editUser(user))
  )

}, {functional: true, dispatch: false})