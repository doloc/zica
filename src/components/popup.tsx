import React from 'react';
import { motion } from 'framer-motion';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  content?: string | string[];
  children?: React.ReactNode;
  isHistory?: boolean;
  isReward?: boolean;
}

const Popup: React.FC<PopupProps> = ({
    isOpen,
    onClose,
    content,
    children,
    isHistory,
    isReward
  }) => {
    if (!isOpen) return null;
  
    const displayContent = Array.isArray(content) ? content.join('\n') : content;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
  
    return (
      <motion.div className="fixed inset-0 bg-black/65 flex items-center justify-center z-[100]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleOverlayClick}>
        <motion.div
          className={`relative w-[92%] flex justify-center items-center md:w-[53.43%] shadow-lg ${
            isHistory
              ? "bg-[url('/images/event-newbie/mb-fr-his.png')] md:bg-[url('/images/event-newbie/pc-fr.png')] aspect-[342/533] md:aspect-[1027/672]"
              : isReward
                ? "bg-[url('/images/event-newbie/mb-fr-code.png')] md:bg-[url('/images/event-newbie/pc-fr-code.png')] aspect-[348/283] md:aspect-[984/519]"
                : "bg-[url('/images/event-newbie/mb-fr.png')] md:bg-[url('/images/event-newbie/pc-fr.png')] aspect-[342/357] md:aspect-[1027/672]"
          } bg-no-repeat bg-cover bg-center`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <button
            className="absolute -top-[2%] md:top-0 -right-[2%] md:-right-[1%] w-[12%] md:w-[6%] bg-[url('/images/icon-close.png')] aspect-square bg-no-repeat bg-cover bg-center
            hover:cursor-pointer hover:scale-105 hover:brightness-110"
            onClick={onClose}
          >
          </button>
            {children && <div className={`w-[87%] md:w-[74%] ${isHistory ? "h-[88%] md:h-[62%]" : "h-[84%] md:h-[62%]"}`}>
              {children}
            </div>}
        </motion.div>
      </motion.div>
    );
  };
  
  export default Popup;