
// Schema for yup
import * as yup from 'yup';
export const validationSchema = (productNames: string[]) => {
  return yup.object().shape({
    name: yup.string()
      .min(2, "*ProductName must have at least 2 characters")
      .max(100, "*ProductName can't be longer than 100 characters")
      .test('duplicateName', '', function(value){
        console.log('here ', value,productNames)
        if(value && productNames.includes(value.toLowerCase())){
          return this.createError({message: 'product name should be unique'})
        }
        return true;
      })
      .required("*ProductName is required"),
    customerPrice: yup.number()
      .required("*CustomerPrice is required"),
    cost: yup.number()
      .required("*Cost is required"),
  })
};