import { Children, forwardRef, ReactNode } from "react";

interface ModalProps {
  children?: ReactNode; // Optional children prop with type ReactNode
}
export const Modal = forwardRef<HTMLDialogElement, ModalProps>((props, ref) => {
  const { children } = props;

  return (
    <dialog id="my_modal_1" ref={ref} className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Hello!</h3>
        <p className="py-4">
          Press ESC! key or click the button below to close!
        </p>
        <div className="modal-action">{children}</div>
      </div>
    </dialog>
  );
});

Modal.displayName = "MyModal";

export default Modal;
