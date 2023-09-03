
interface InputProps {
  name: string;
  value?: string | number | boolean;
  type: any;
  placeholder ?: string;
  register: any;
  isRequired?: boolean;
}
export function Input({ name, type, placeholder, register, isRequired, value}: InputProps) {
  return(
    <input type={type} name={name} value={value} {...register(name, {required: isRequired ? isRequired : false})} placeholder={placeholder ? placeholder : name}/>
  )
}