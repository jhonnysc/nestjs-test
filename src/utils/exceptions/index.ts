import { HttpException, HttpStatus } from "@nestjs/common";
import ErrorsMapper from "./errors";

export class EmailAlreadyInUse extends HttpException {
  constructor() {
    super(
      ErrorsMapper.USER_ERRORS.EMAIL_ALREADY_IN_USE,
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }
}
