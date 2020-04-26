export default {
    phoneRegExp:'/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/',
    jwtToken:'JWT_TOKEN',
    REQUEST_TYPES : {
        POST: 'POST',
        GET: 'GET',
        DELETE: 'DELETE',
        PUT: 'PUT',
        PATCH: 'PATCH',
        UPLOAD: 'UPLOAD',
        HEAD: 'HEAD',
      },
    RESPONSE_STATUS : {
        OK: 200,
        CREATED: 201,
        NO_CONTENT: 204,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
        INTERNAL_SERVER_ERROR: 500,
        UNREACHABLE: 503,
      },
    ARROW_DIRECTIONS: {
      DOWN: 'down',
      RIGHT: 'right'
    }
};