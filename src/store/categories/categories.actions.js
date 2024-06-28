import { createAction } from '../../utils/reducer/reducer.utils';
import {CATEGORIES_ACTION_TYPES} from "./categories.types";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

export const setCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
export const setCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
export const setCategoriesError = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error)


