import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IServiceValue, defaultValue } from 'app/shared/model/service-value.model';

export const ACTION_TYPES = {
  FETCH_SERVICEVALUE_LIST: 'serviceValue/FETCH_SERVICEVALUE_LIST',
  FETCH_SERVICEVALUE: 'serviceValue/FETCH_SERVICEVALUE',
  CREATE_SERVICEVALUE: 'serviceValue/CREATE_SERVICEVALUE',
  UPDATE_SERVICEVALUE: 'serviceValue/UPDATE_SERVICEVALUE',
  DELETE_SERVICEVALUE: 'serviceValue/DELETE_SERVICEVALUE',
  RESET: 'serviceValue/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IServiceValue>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ServiceValueState = Readonly<typeof initialState>;

// Reducer

export default (state: ServiceValueState = initialState, action): ServiceValueState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_SERVICEVALUE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_SERVICEVALUE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_SERVICEVALUE):
    case REQUEST(ACTION_TYPES.UPDATE_SERVICEVALUE):
    case REQUEST(ACTION_TYPES.DELETE_SERVICEVALUE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_SERVICEVALUE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_SERVICEVALUE):
    case FAILURE(ACTION_TYPES.CREATE_SERVICEVALUE):
    case FAILURE(ACTION_TYPES.UPDATE_SERVICEVALUE):
    case FAILURE(ACTION_TYPES.DELETE_SERVICEVALUE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_SERVICEVALUE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_SERVICEVALUE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_SERVICEVALUE):
    case SUCCESS(ACTION_TYPES.UPDATE_SERVICEVALUE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_SERVICEVALUE):
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

const apiUrl = 'api/service-values';

// Actions

export const getEntities: ICrudGetAllAction<IServiceValue> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_SERVICEVALUE_LIST,
  payload: axios.get<IServiceValue>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IServiceValue> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_SERVICEVALUE,
    payload: axios.get<IServiceValue>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IServiceValue> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_SERVICEVALUE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IServiceValue> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_SERVICEVALUE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IServiceValue> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_SERVICEVALUE,
    payload: axios.delete(requestUrl),
  });
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
