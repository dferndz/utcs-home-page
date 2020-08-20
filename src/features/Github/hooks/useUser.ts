import { useReducer, useCallback, useEffect, useMemo } from "react";

import { User } from "../types";

const API_URL = "https://api.github.com/users/";

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
      return <State>{
        ...state,
        data: null,
        isLoading: true,
        errors: null,
      };
    case Actions.REQUEST_SUCCESS:
      return <State>{
        ...state,
        data: action.payload,
        isLoading: false,
        errors: null,
      };
    case Actions.REQUEST_FAIL:
      console.log(action.payload);
      return <State>{
        ...state,
        data: null,
        isLoading: false,
        errors: action.payload,
      };

    default:
      return <State>{
        ...state,
      };
  }
};

const initialState: State = {
  data: null,
  isLoading: false,
  errors: null,
};

const useRepos = (username: string) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = useMemo(() => `${API_URL}${username}`, [username, API_URL]);

  const getRepos = useCallback(() => {
    dispatch({ type: Actions.REQUEST_INIT });
    fetch(url)
      .then((response) =>
        response
          .json()
          .then((data) =>
            dispatch({ type: Actions.REQUEST_SUCCESS, payload: data })
          )
      )
      .catch((errors) =>
        dispatch({ type: Actions.REQUEST_FAIL, payload: errors })
      );
  }, [username]);

  useEffect(() => getRepos(), []);

  return { ...state };
};

export default useRepos;
