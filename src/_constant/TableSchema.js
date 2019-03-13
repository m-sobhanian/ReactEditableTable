export const tableSchema = {
    userName: {
      type: String,
      required: true,
      displayName: 'User Name'
    },
    firstName: {
        type: String,
        required: true,
        displayName: 'First Name'
    },
    lastName: {
        type: String,
        required: true,
        displayName: 'Last Name'
    },
    age:{
      type:Number,
      displayName: 'Age'
    },
    sex: {
      type:Boolean,
      displayName: 'Sex'
    }
  }