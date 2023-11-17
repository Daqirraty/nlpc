import { createContext, useContext, useState } from "react";

const InputFieldDatas = createContext();
const HandleChangeDatas = createContext();
const CreateTopSchemeCard = createContext();
const SetCreateTopSchemeCard = createContext();


export const useDataContext = () => {
  return useContext(InputFieldDatas);
};

export const useHandleChangeDatasContext = () => {
  return useContext(HandleChangeDatas);
};

export const useCreateTopSchemeCardContext = () => {
  return useContext(CreateTopSchemeCard);
};

export const useSetCreateTopSchemeCardContext = () => {
  return useContext(SetCreateTopSchemeCard);
};

const ContextSetup = ({ children }) => {
  const [formData, setFormData] = useState({
    lastName: "",
    otherNames: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    title: "",
    amount: "",
    inputAmount: "",
    startDate: "",
    maturityDate: ""
  });

  const [createTopScheme, setCreateTopScheme] = useState([]);

  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <InputFieldDatas.Provider value={formData}>
      <HandleChangeDatas.Provider value={HandleChange}>
        <SetCreateTopSchemeCard.Provider value={setCreateTopScheme}>
          <CreateTopSchemeCard.Provider value={createTopScheme}>
            {children}
          </CreateTopSchemeCard.Provider>
        </SetCreateTopSchemeCard.Provider>
      </HandleChangeDatas.Provider>
    </InputFieldDatas.Provider>
  );
};
export default ContextSetup;
