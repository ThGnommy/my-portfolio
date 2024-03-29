import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  state: boolean;
  setState: (state: boolean) => void;
}

export const Modal = ({ children, state, setState }: ModalProps) => {
  useEffect(() => {
    state
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [state]);

  return (
    <>
      {state && (
        <div onClick={() => setState(false)} className={styles.modalBackground}>
          <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
            {children}
            <button
              type="button"
              className="mt-4"
              onClick={() => setState(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
