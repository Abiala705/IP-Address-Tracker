import React from "react";
import styles from "./Form.module.css";
import submit from "../assets/icon-arrow.svg";

const Form = () => {
  return (
    <div className={styles.form + ` relative`}>
      <h1 className="text-2xl pt-3 text-white md:pt-5 font-bold">
        IP Address Tracker
      </h1>
      <div className="pt-8 flex justify-center">
        <input
          className={
            styles.input +
            ` w-64 md:w-128 py-2 px-10 rounded-tl-xl rounded-bl-xl text-black`
          }
          placeholder="Search for any IP address or domain"
        ></input>
        <div className="bg-black rounded-tr-xl rounded-br-xl submit">
          <button className="" type="submit">
            <img src={submit} className="mt-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
