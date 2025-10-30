import { useEffect, useState, useReducer, act } from "react";
import axios from "axios";

export enum ACTION_TYPE_ENUM {
  START_lOADING,
  SET_ERROR,
  SET_DATA,
  UPDATE_DATA,
}

type State<T> =
| {
    data: undefined;
    error: undefined;
    isLoading: boolean;
} | {
    isLoading: true;
    error?: string;
    data?: T
} | {
    isLoading: false;
    error: string;
    data: undefined
} | {
    isLoading: false;
    error: undefined;
    data: T | undefined
} | {
    isLoading: boolean;
    error: string;
    data: T
}

const initialState = {
  isLoading: true,
  error: undefined,
  data: undefined,
};

export type UseFetchAction<T> = 
  | { type: ACTION_TYPE_ENUM.START_lOADING }
  | { type: ACTION_TYPE_ENUM.SET_ERROR; payload: { error: string };}
  | { type: ACTION_TYPE_ENUM.SET_DATA; payload: { data: T };}
  | { type: ACTION_TYPE_ENUM.UPDATE_DATA; payload: { currentState?: T | undefined};};

const reducer = <T>(state: State<T>, action: UseFetchAction<T>): State<T> => {
  switch (action.type) {
    case ACTION_TYPE_ENUM.START_lOADING:
      return { ...state, isLoading: true, error: undefined, data:undefined };
    case ACTION_TYPE_ENUM.SET_ERROR:
      return { ...state, isLoading: false, error: action.payload.error, data: undefined };
    case ACTION_TYPE_ENUM.SET_DATA:
      return { ...state, isLoading: false, error: undefined, data: action.payload.data };
    case ACTION_TYPE_ENUM.UPDATE_DATA:
      return { ...state, isLoading: false, error: undefined, data: action.payload.currentState };

    default:
      break;
  }
  return state;
};

export const useFetch = <T,>(url: string) => {
  const [state, dispatch] = useReducer(reducer<T>, initialState);

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: ACTION_TYPE_ENUM.START_lOADING });
      try {
        const response = await axios.get<T>(url);
        dispatch({ type: ACTION_TYPE_ENUM.SET_DATA, payload: response });
      } catch (error) {
        if (error instanceof Error) {
          dispatch({ type: ACTION_TYPE_ENUM.SET_ERROR, payload: { error: error.message } });
        }
      }
    };

    getData();
  }, [url]);

  return state;
};
