import { createContext, useContext } from "react";

// Context Create ( Context 생성 )
const CounterContext = createContext();

// Provider Create ( Provider 생성 )
const CounterProvider = CounterContext.Provider;

// Store에 있는 value를 사용하기 위한 Hooks
const useCounterStore = () => useContext(CounterContext);

export { CounterContext, CounterProvider, useCounterStore };
