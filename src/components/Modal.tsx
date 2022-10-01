import React, { ReactNode } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return <>{isOpen ? <div>{children}</div> : null}</>;
}
