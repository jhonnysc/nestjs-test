import { Exclude, Expose } from 'class-transformer';

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
  created_at: Date;

  @Expose()
  updated_at: Date;
}
