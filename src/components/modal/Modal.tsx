import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Draggable from "react-draggable";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { onEscapeKeyDown } from "../../utils/userEvents";

interface Props {
  show: boolean;
  title: string;
  children: React.ReactElement | React.ReactElement[];
  onClose: () => void;
}

/**
 
A modal component that can be displayed with a title and content, and be closed either by clicking a close icon or pressing the escape key.
The modal is also draggable by its title.
 
 * @param {object} props - The properties for the component.
 * @param {boolean} props.show - Determines whether the modal should be displayed or not.
 * @param {() => void} props.onClose - The function that is called when the modal is closed.
 * @param {string} props.title - The title for the modal.
 * @param {React.ReactElement | React.ReactElement[]} props.children - The content for the modal.
 * @returns {JSX.Element} ReactElement
 */
export default function Modal({ show, onClose, title, children }: Props): JSX.Element {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    /**
     *
     * @param {KeyboardEvent} e Keyboard Event
     * @returns {void} void
     */
    const handleKeyDown = (e: KeyboardEvent): void => onEscapeKeyDown(e, onClose);
    document.body.addEventListener("keydown", handleKeyDown);
    return () => document.body.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!show) return <></>;

  return createPortal(
    <Draggable nodeRef={nodeRef} bounds="parent">
      <div ref={nodeRef} className="modal text-white">
        <div className="w-full">
          <div className="shadow-md p-2 flex justify-between items-center cursor-move">
            <h4 className="uppercase font-medium text-base">{title}</h4>
            <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={onClose} />
          </div>
          <div className="modal-body p-2">{children}</div>
        </div>
      </div>
    </Draggable>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("root")!,
  );
}
