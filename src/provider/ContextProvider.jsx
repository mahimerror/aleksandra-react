import { createContext } from "react";
import PropTypes from "prop-types";
import useFetchData from "@/hooks/useFetchData";
export const MainContext = createContext();

function ContextProvider({ children }) {
  const { data, isPending, isError, error } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/system-setting`
  );

  const mainStateInfo = {
    data: data?.data,
    isPending: isPending,
    isError: isError,
    error: error,
  };
  return (
    <MainContext.Provider value={mainStateInfo}>
      {children}
    </MainContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
