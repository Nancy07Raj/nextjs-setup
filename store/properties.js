
import { API } from "../api";

const PROPERTIES_URL = "properties";
const CONSTANTS_URL = "constants";
const LOCALITIES_URL = "localities";

export const getPropertiesLists = (queryParams = {}) => async () => {
  const CREDENTIALS = {
    url: PROPERTIES_URL,
    method: "get",
    queryParams,
  };
  const res = await Promise.all([API.common(CREDENTIALS)]);
  return res;
};

export const getPropertiesForSaleLists =
  ({ isFeatured = false }) =>
  async () => {
    const CREDENTIALS = {
      url: `${PROPERTIES_URL}?isFeatured=${Boolean(isFeatured)}`,
      method: "get",
    };
    const res = await Promise.all([API.common(CREDENTIALS)]);
    return res;
  };

  export const getDropdownConstant =
  () =>
  async () => {
    const CREDENTIALS = {
      url: `${CONSTANTS_URL}?all=true`,
      method: "get",
    };
    const res = await Promise.all([API.common(CREDENTIALS)]);
    return res;
  };

  export const getLocalities =
  () =>
  async () => {
    const CREDENTIALS = {
      url: `${LOCALITIES_URL}?all=true`,
      method: "get",
    };
    const res = await Promise.all([API.common(CREDENTIALS)]);
    return res;
  };