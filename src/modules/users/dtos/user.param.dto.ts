import {
  IsNotEmpty,
  IsMongoId,
} from "class-validator";
import { Types } from "mongoose";

export class UserParamDto {
  @IsMongoId()
  @IsNotEmpty()
  id: Types.ObjectId;
}
