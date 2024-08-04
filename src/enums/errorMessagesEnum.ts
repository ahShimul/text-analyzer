// src/enums/ErrorCodes.ts
export enum ErrorMessages {
  // General Errors
  INTERNAL_SERVER_ERROR = 'Internal server error',
  BAD_REQUEST = 'Bad request',
  UNAUTHORIZED = 'Unauthorized access',
  FORBIDDEN = 'Forbidden access',
  NOT_FOUND = 'Resource not found',

  // Validation Errors
  VALIDATION_ERROR = 'Validation error',
  REQUIRED_FIELD = 'Required field is missing',
  INVALID_INPUT = 'Invalid input provided',

  // Authentication Errors
  AUTH_INVALID_CREDENTIALS = 'Invalid credentials',
  AUTH_TOKEN_EXPIRED = 'Authentication token expired',
  AUTH_TOKEN_INVALID = 'Invalid authentication token',

  // Authorization Errors
  PERMISSION_DENIED = 'Permission denied',
  ACCESS_DENIED = 'Access denied',

  // Resource Errors
  RESOURCE_NOT_FOUND = 'Resource not found',
  RESOURCE_ALREADY_EXISTS = 'Resource already exists',
  RESOURCE_CONFLICT = 'Resource conflict',

  // Database Errors
  DB_CONNECTION_ERROR = 'Database connection error',
  DB_QUERY_ERROR = 'Database query error',
  DB_DUPLICATE_KEY = 'Duplicate key error',
}
