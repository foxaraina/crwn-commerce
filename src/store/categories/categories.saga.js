import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {setCategoriesError, setCategoriesStart, setCategoriesSuccess} from "./categories.actions";
import {call, put, takeLatest, all} from "redux-saga/effects"
import {CATEGORIES_ACTION_TYPES} from "./categories.types";


export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* fetchCategoriesAsync ()  {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, "categories")
        yield put(setCategoriesSuccess(categoriesArray))
    } catch (err) {
        yield put(setCategoriesError(err))
    }
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}