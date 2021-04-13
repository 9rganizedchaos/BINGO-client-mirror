// action types
export const DO_LOGIN = "DO_LOGIN";
export const PUSH_OPTION = "PUSH_OPTION";
export const CHANGE_OPTION_COLOR = "CHANGE_OPTION_COLOR";
export const ANIMATE_TEST = "ANIMATE_TEST";

// actions creator functions
export const doLogin = (accessToken: string) => {
  return {
    type: DO_LOGIN,
    payload: {
      isLogin: true,
      accessToken,
    }
  }
}

export const changeOptionColor = (index: number, color: string) => {
  return {
    type: CHANGE_OPTION_COLOR,
    payload: {
      index,
      color,
    }
  }
}

export const pushOption = (array: Array<number>) => {
  return {
    type: PUSH_OPTION,
    payload: {
      array,
    }
  }
}

export const animateCard = (index: number) => {
  return {
    type: ANIMATE_TEST,
    payload: {
      index,
    }
  }
}