import { createAction, props } from '@ngrx/store';

// createAction('[source] Event')
export const aumentar  = createAction('[Contador] Aumentar');
export const disminuir = createAction('[Contador] Disminuir');
export const reset     = createAction('[Contador] Reset');

export const multiplicar = createAction(
        '[Contador] Multiplicar',
        props<{numero: number}>()
);
export const dividir = createAction(
        '[Contador] Dividir',
        props<{numero: number}>()
)

// PROPS = que tipo de información puedo recibir al multiplicar
