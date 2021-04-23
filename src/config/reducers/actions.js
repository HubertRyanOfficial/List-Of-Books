export const UPDATE_LIST_BOOKS = 'UPDATE_LIST_BOOKS';

//

export function updateListBooks(value) {
  return {
    type: UPDATE_LIST_BOOKS,
    payload: value,
  };
}
