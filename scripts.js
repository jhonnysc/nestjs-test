import faker from 'faker';
import mongoose from 'mongoose';

import mongooseTypes from './src/utils/mongo/types';

mongoose.connect('mongodb://localhost:27017/myproject');

const UserSchema = new mongoose.Schema(
  {
    name: mongooseTypes.required.string,
    sex: mongooseTypes.required.string,
    age: mongooseTypes.required.number,
    hobby: mongooseTypes.required.string,
    dayOfBirth: mongooseTypes.required.date,
    email: mongooseTypes.required.string,
    roles: [mongooseTypes.required.enum(['USER', 'ADMIN'])],
    password: mongooseTypes.required.string,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

const User = mongoose.model('user', UserSchema);

(async () => {
  const promises = [];
  for (let i = 0; i < 500; i++) {
    const x = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      sex: faker.random.arrayElement(['Male', 'Female']),
      age: faker.random.number(60),
      hobby: faker.random.word(),
      dayOfBirth: faker.date.recent(),
      email: faker.internet.email(),
      roles: ['USER'],
      password: faker.internet.password(),
    }).save();
    promises.push(x);
  }

  return Promise.all(promises);
})().then(() => process.exit());
