const API_DOMAIN = 'https://qr-menu.pp.ua';
const API_PREFIX = '/api/admin/';
const CONCATE = API_DOMAIN + API_PREFIX;
export const COOKIE_KEY = 'token';

// API METHODS URLS
export const USER_REGISTER = CONCATE + 'register';
export const USER_LOGIN = CONCATE + 'login';
export const USER_LOGIN_BY_TOKEN = CONCATE + 'login/token';
export const USER_GET_FULL_INFO = CONCATE + 'get-full-info/user';
export const USER_DELETE_SESSION = CONCATE + 'delete/session/user';
export const USER_DELETE = CONCATE + 'delete/user';
export const USER_RECOVERY_CODE_CHECK = CONCATE + 'recovery/code/check';
export const USER_SET_NEW_PASSWORD = CONCATE + 'recovery/password';

export const EMAIL_SET_RECOVERY_CODE = CONCATE + 'set/recovery/code';
export const EMAIL_SEND = CONCATE + 'send_email';

export const RESTAURANT_CREATE = CONCATE + 'add/restaurant';
export const RESTAURANT_UPDATE = CONCATE + 'update/restaurant';
export const RESTAURANT_GET = CONCATE + 'get/restaurant';
export const RESTAURANT_DELETE = CONCATE + 'delete/restaurant';

export const TABLES_CREATE = CONCATE + 'create/tables';
export const TABLES_GET = CONCATE + 'get/tables';
export const TABLES_DELETE = (type, table_number) =>
  CONCATE + `delete/tables?type=${type}&table_number=${table_number}`;

export const CATEGORY_ADD = CONCATE + 'add/category';
export const CATEGORY_GET = CONCATE + 'get/categories';
export const CATEGORY_GET_FULL_INFO = CONCATE + 'get-full-info/categories';
export const CATEGORY_DELETE = (type, category_id) =>
  CONCATE + `delete/categories?type=${type}&category_id=${category_id}`;

export const DISH_ADD = CONCATE + 'add/dish';
export const DISH_GET = (category_id) => CONCATE + `get/dish?category_id=${category_id}`;
export const DISH_DELETE = (dish_id, category_id) =>
  CONCATE + `delete/dish?dish_id=${dish_id}&category_id=${category_id}`;

export const INGREDIENTS_ADD = CONCATE + 'add/ingredient';
export const INGREDIENTS_GET = CONCATE + 'get/ingredients';
export const INGREDIENTS_DELETE = (ingredient_id, dish_id) =>
  CONCATE +
  `delete/ingredients?ingredient_id=${ingredient_id}&dish_id=${dish_id}`;

export const CLIENT_PAGE = (restaurant, id, table) => 
  API_DOMAIN + `/api/menu/${restaurant}/${id}/${table}`;