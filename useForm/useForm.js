import { useState } from "react";


export const useForm = ( initialform = {}) => {

    const [formstate, setformstate, username, email, password] = useState(initialform)
  
 
  const onInputchage = ( { target } ) =>{
      const { name, value } = target;
      setformstate({
        ...formstate,
        [ name ]: value
      });
   
  }
  

  const onResetform = () => {
    setformstate(initialform);
  }
    
 return {
    ...formstate,
    formstate,
    onInputchage,
    onResetform,

 } 
}
