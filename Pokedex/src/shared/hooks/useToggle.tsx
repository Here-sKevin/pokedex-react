import { useState, useCallback } from 'react';

const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => {
    setState(prevState => !prevState);
  }, []);

  return [state, toggle];
};

export default useToggle;
