import { useReducer, useCallback, useEffect, useMemo } from "react";

import { License } from "../types";
import { headers } from "./constants";

const API_URL = "https://api.github.com/licenses/";

enum Actions {
  REQUEST_INIT,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
}

type State = {
  data: License | null;
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

const useRepos = (license: string) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = useMemo(() => `${API_URL}${license}`, [license]);

  const getRepos = useCallback(() => {
    dispatch({ type: Actions.REQUEST_INIT });
    fetch(url, {
      headers: headers,
    })
      .then((response) => {
        if (response.status !== 200) throw Error("Not found");
        return response
          .json()
          .then((data) =>
            dispatch({ type: Actions.REQUEST_SUCCESS, payload: data })
          );
      })
      .catch((errors) =>
        dispatch({ type: Actions.REQUEST_FAIL, payload: errors })
      );
  }, [url]);

  useEffect(() => getRepos(), [getRepos]);

  return { ...state };
};

export default useRepos;
