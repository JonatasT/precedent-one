import { Children, forwardRef, ReactNode } from "react";

interface ModalProps {
  children?: ReactNode; // Optional children prop with type ReactNode
}
export const Modal = forwardRef<HTMLDialogElement, ModalProps>((props, ref) => {
  const { children } = props;

  return (
    <dialog id="my_modal_1" ref={ref} className="modal">
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div className="max-h-full w-full max-w-xl overflow-y-auto bg-white sm:rounded-2xl">
          <div className="w-full">
            <div className="modal-action">{children}</div>
          </div>
        </div>
      </div>
    </dialog>
  );
});

Modal.displayName = "MyModal";

export default Modal;
