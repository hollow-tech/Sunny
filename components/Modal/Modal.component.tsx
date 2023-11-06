import {
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import {
  ModalBody,
  ModalOverlay,
  ModalStyled,
  modalAnimation,
  bodyAnimation,
} from "./Modal.styles";
import { ModalProps, ModalRef } from "./Modal.types";

export const Modal = forwardRef<ModalRef, ModalProps>(
  ({ children, defaultOpened = false, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpened);
    const close = useCallback(() => setIsOpen(false), []);

    let DOMElement = null;

    if (typeof window !== "undefined") {
      DOMElement = document.getElementById("modal");
    }

    useImperativeHandle(
      ref,
      () => ({
        open: () => setIsOpen(true),
        close,
      }),
      [close]
    );

    useEffect(() => {
      if (isOpen) {
        window.document.body.style.overflow = "hidden";
      }
      return () => {
        window.document.body.style.overflow = "auto";
      };
    }, [isOpen]);

    return DOMElement
      ? createPortal(
          <AnimatePresence>
            {isOpen ? (
              <ModalStyled
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={modalAnimation}
                {...props}
              >
                <ModalOverlay onClick={close} />
                <ModalBody
                  variants={bodyAnimation}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  {children}
                </ModalBody>
              </ModalStyled>
            ) : null}
          </AnimatePresence>,
          DOMElement
        )
      : null;
  }
);

Modal.displayName = "Modal";
