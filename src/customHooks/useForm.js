import { useState } from "react";

const useForm = (callbackSubmit) => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    callbackSubmit();
  }

  return [state, handleChange, handleSubmit]
}

export default useForm;