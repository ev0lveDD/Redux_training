'use client';


import Image from "next/image";
import { Provider } from 'react-redux';
import store from "./store";
import Counter from "./Counter";
import Header from "./Header";
import Auth from "./Auth";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex flex-col w-full h-full justify-center items-center gap-12">
        <Header />
        <Auth />
        <Counter />
      </div>
    </Provider>
  );
}
