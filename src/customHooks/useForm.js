import { useState } from "react";

const useForm = (callbackSubmit) => {
  const [state, setState] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const regex = /^(?!0)\d+$/;
    if (e.target.name === "income" && !regex.test(e.target.value)) {
      setError(true);
    } else {
      setError(false);
      setState(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) return;
    callbackSubmit();
  }

  return [state, error, handleChange, handleSubmit]
}

export default useForm;