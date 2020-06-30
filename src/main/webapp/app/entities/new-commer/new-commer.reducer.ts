import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { INewCommer, defaultValue } from 'app/shared/model/new-commer.model';

export const ACTION_TYPES = {
  FETCH_NEWCOMMER_LIST: 'newCommer/FETCH_NEWCOMMER_LIST',
  FETCH_NEWCOMMER: 'newCommer/FETCH_NEWCOMMER',
  CREATE_NEWCOMMER: 'newCommer/CREATE_NEWCOMMER',
  UPDATE_NEWCOMMER: 'newCommer/UPDATE_NEWCOMMER',
  DELETE_NEWCOMMER: 'newCommer/DELETE_NEWCOMMER',
  RESET: 'newCommer/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<INewCommer>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type NewCommerState = Readonly<typeof initialState>;

// Reducer

export default (state: NewCommerState = initialState, action): NewCommerState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_NEWCOMMER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_NEWCOMMER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_NEWCOMMER):
    case REQUEST(ACTION_TYPES.UPDATE_NEWCOMMER):
    case REQUEST(ACTION_TYPES.DELETE_NEWCOMMER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_NEWCOMMER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_NEWCOMMER):
    case FAILURE(ACTION_TYPES.CREATE_NEWCOMMER):
    case FAILURE(ACTION_TYPES.UPDATE_NEWCOMMER):
    case FAILURE(ACTION_TYPES.DELETE_NEWCOMMER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_NEWCOMMER_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_NEWCOMMER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_NEWCOMMER):
    case SUCCESS(ACTION_TYPES.UPDATE_NEWCOMMER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_NEWCOMMER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/new-commers';

// Actions

export const getEntities: ICrudGetAllAction<INewCommer> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_NEWCOMMER_LIST,
  payload: axios.get<INewCommer>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<INewCommer> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_NEWCOMMER,
    payload: axios.get<INewCommer>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<INewCommer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_NEWCOMMER,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<INewCommer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_NEWCOMMER,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<INewCommer> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_NEWCOMMER,
    payload: axios.delete(requestUrl),
  });
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
