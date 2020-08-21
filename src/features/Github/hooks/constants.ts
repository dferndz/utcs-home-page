export const GITHUB_PERSONAL_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const headers = {
  Authorization: `Bearer ${GITHUB_PERSONAL_TOKEN}`,
};
