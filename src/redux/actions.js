export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

/**
 * @description this methods returns a redux action
 * that triggers incrementing the counter
 * @returns redux action
 */
export const increment = () => ({ type: INCREMENT });

/**
 * @description this methods returns a redux action
 * that triggers decrementing the counter
 * @returns redux action
 */
export const decrement = () => ({ type: DECREMENT });

/**
 * @description this methods returns a redux action
 * that triggers resetting the counter
 * @returns redux action
 */
export const reset = () => ({ type: RESET });
