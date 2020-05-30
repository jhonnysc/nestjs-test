import { Schema } from 'mongoose';

const mongooseTypes = {
  required: {
    string: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    objectId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  not_required: {
    string: {
      type: String,
      default: null,
    },
    number: {
      type: Number,
      default: null,
    },
    objectId: {
      type: Schema.Types.ObjectId,
      default: null,
    },
  },
};

export default mongooseTypes;
