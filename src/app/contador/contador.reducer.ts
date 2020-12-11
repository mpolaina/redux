import { Action, createReducer, on } from '@ngrx/store';
import { aumentar, disminuir, multiplicar, dividir, reset } from './contador.actions';

// export function contadorReducer( state: number = 10 , action: Action){
//   switch( action.type ) {
//     case aumentar.type:
//       return state + 1
//     case disminuir.type:
//       return state - 1
//     default:
//       return state
//   }
// }

// on -> selecciona la acción a ejecutar, como el case del switch

export const initialState = 20

const _contadorReducer = createReducer(
  initialState,
  on( aumentar   , state => state + 1),
  on( disminuir  , state => state - 1),
  on( multiplicar, (state, { numero }) => state * numero ),
  on( dividir     , (state, { numero }) => state / numero ),
  on( reset       , state => initialState)
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
