import { useReducer, useCallback, useEffect } from "react";

import { User } from "../types";
import { headers } from "./constants";

const API_URL = "https://api.github.com/user";

enum Actions {
  REQUEST_INIT,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
}

type State = {
  data: User | null;
  isLoading: boolean;
  errors: any;
};

type Action = {
  type: Actions;
  payload?: any;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case Actions.REQUEST_INIT:
      return {
        ...state,
        data: null,
        isLoading: true,
        errors: null,
      };
    case Actions.REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        errors: null,
      };
    case Actions.REQUEST_FAIL:
      console.log(action.payload);
      return {
        ...state,
        data: null,
        isLoading: false,
        errors: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

const initialState: State = {
  data: null,
  isLoading: false,
  errors: null,
};

const useRepos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getRepos = useCallback(() => {
    dispatch({ type: Actions.REQUEST_INIT });
    fetch(API_URL, {
      headers: headers,
    })
      .then((response) => {
        if (response.status !== 200) throw Error("Not found");
        response
          .json()
          .then((data) =>
            dispatch({ type: Actions.REQUEST_SUCCESS, payload: data })
          );
      })
      .catch((errors) =>
        dispatch({ type: Actions.REQUEST_FAIL, payload: errors })
      );
  }, []);

  useEffect(() => getRepos(), [getRepos]);

  return { ...state };
};

export default useRepos;
