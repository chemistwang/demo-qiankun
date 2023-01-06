import { useEffect, useState } from "react";
import actions from "../../action";

function FormPage() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    actions.onGlobalStateChange((state: any) => {
      const { age } = state;
      console.log(state, "state.....111");
      setAge(age);
    });
  }, []);

  return <div>{age}</div>;
}

export default FormPage;
