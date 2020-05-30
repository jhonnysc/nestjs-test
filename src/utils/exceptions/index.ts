import { HttpException, HttpStatus } from '@nestjs/common';
import ErrorsMapper from './errors';

export class EmailAlreadyInUse extends HttpException {
  constructor() {
    super(
      ErrorsMapper.USER_ERRORS.EMAIL_ALREADY_IN_USE,
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }
}

export class XssThreat extends HttpException {
  constructor() {
    super(ErrorsMapper.APPLICATION_ERRORS.XSS_THREAT, HttpStatus.UNAUTHORIZED);
  }
}

export class SqlThreat extends HttpException {
  constructor() {
    super(
      ErrorsMapper.APPLICATION_ERRORS.INJECTION_THREAT,
      HttpStatus.UNAUTHORIZED,
    );
  }
}
