import { Exclude, Expose } from "class-transformer";

@Exclude()
export class UserResponseDto {
  @Expose()
  _id: string;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  roles: string[];

  @Expose()
  hobby: string;

  @Expose()
  dayOfBirth: string;

  @Expose()
  age: number;

  @Expose()
  sex: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
