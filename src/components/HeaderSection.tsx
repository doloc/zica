'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Trang Chủ" },
  { href: "/tin-tuc", label: "Tin Tức" },
  { href: "/su-kien/tan-thu", label: "Sự Kiện" },
  { href: "/ho-tro", label: "Hỗ Trợ" },
  { href: "/cong-dong", label: "Cộng Đồng" },
];

const activeClass =
  "text-[#5D3708] bg-[linear-gradient(180deg,_#FAFBA1_36.06%,_#F3AC46_63.94%)] shadow-[inset_0px_9px_4px_#F1B64F,_inset_0px_-9px_4px_rgba(255,225,0,0.9)] border-[3px] border-[#BA3F02] transition-all duration-75 rounded-full";
const inactiveClass = "hover:text-yellow-300 transition-all duration-75";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const communityOptions = [
    { icon: "📘", label: "Fanpage", href: "#" },
    { icon: "👥", label: "Group Cộng Đồng", href: "#" },
    { icon: "💬", label: "Zalo", href: "#" },
  ];

  return (
    <motion.header 
      className="absolute top-0 left-0 right-0 w-full flex justify-center items-center md:pt-[1.6%] z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* PC Menu */}
      <div className="hidden md:flex w-[60%] justify-between items-start gap-3">
        {/* Logo Placeholder */}
        <motion.img 
          src="/images/logo-zica.png" 
          alt="logo" 
          className="w-[13%] object-contain"
          transition={{ duration: 0.2 }}
        />
        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:grid md:grid-cols-5 w-full bg-gradient-to-b from-[#031F60] to-[#000839] shadow-lg rounded-[10px] border-4 border-[#354573] justify-between items-center px-[1%] pt-[1%] pb-[1.5%] text-lg md:text-xl font-extrabold text-white"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {navLinks.map((link, idx) => (
            <motion.div 
              key={link.href} 
              className={`flex items-center relative${idx === navLinks.length - 1 ? " justify-center" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
            > 
              {link.href === "/cong-dong" ? (
                <>
                <div className={`relative w-full flex items-center justify-center ${dropdownOpen ? activeClass : inactiveClass}`}>
                  <motion.button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`w-full flex items-center justify-center py-[6%] hover:cursor-pointer will-change-transform ${pathname === link.href ? activeClass : inactiveClass}`}
                  >
                    {link.label}
                    <motion.svg
                      className={`absolute -bottom-[10%] w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ rotate: dropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M12 20c-.3 0-.6-.1-.8-.3L3.1 9.3c-.4-.4-.5-1-.2-1.4.2-.5.7-.8 1.2-.8h16c.6 0 1 .3 1.2.8.2.5.1 1.1-.2 1.4l-8.1 10.4c-.2.2-.5.3-.8.3z" />
                    </motion.svg>
                  </motion.button>
                </div>
                {dropdownOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-full bg-[#FAFBA1] border rounded-xl shadow-lg z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {communityOptions.map((option, optionIdx) => (
                      <motion.div 
                        key={optionIdx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: optionIdx * 0.1 }}
                      >
                        <Link
                          href={option.href}
                          className="flex items-center px-4 py-3 text-gray-800 hover:bg-yellow-300 rounded-xl transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="mr-3 text-lg">{option.icon}</span>
                          <span className="font-semibold">{option.label}</span>
                        </Link>
                        {optionIdx < communityOptions.length - 1 && (
                          <div className="border-t border-orange-300"></div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
                </>
                ) : (
                  <Link
                    href={link.href}
                    className={`w-full flex items-center justify-center py-[6%] will-change-transform ${!dropdownOpen && (pathname === link.href || (pathname.includes(link.href) && link.href !== "/")) ? activeClass : inactiveClass}`}
                  >
                    {link.label}
                  </Link>
                )}
              {idx !== navLinks.length - 1 && (
                <motion.div 
                  className="mx-[5%] w-[2px] h-10 bg-[#FFFFFF]/50"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </motion.nav>
      </div>

      {/* Mobile Menu Button */}
      <motion.div 
        className="md:hidden w-full h-[23.2%] bg-[#031C5B] flex justify-between items-center relative border-4 border-[#343A61] rounded-b-xl p-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img 
          src="/images/logo-zica.png" 
          alt="logo" 
          className="w-[9.6%] object-contain"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.button 
          className="w-[25%] h-[36px] px-2 py-3 bg-[linear-gradient(180deg,_#A9FC00_36.06%,_#03E75A_63.94%)] shadow-[inset_0px_9px_4px_#B6F309,_inset_0px_-9px_4px_rgba(182, 243, 9, 0.9)] border-[3px] border-[#37CE26] 
          text-sm font-extrabold text-[#010B35] rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Chơi ngay
        </motion.button>
        <motion.button 
          className="w-[25%] h-[36px] px-2 py-3 bg-[linear-gradient(180deg,_#5DF9FA_36.06%,_#54C3FB_63.94%)] shadow-[inset_0px_9px_4px_#63FCFA,_inset_0px_-9px_4px_rgba(99, 252, 250, 0.9)] border-[3px] border-[#375BF4] 
          text-sm font-extrabold text-[#010A35] rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Nạp thẻ
        </motion.button>
        <Link href="#" className="w-[7.5%] aspect-square bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/icon-fb.png')" }}></Link>
        <Link href="#" className="w-[7.5%] aspect-square bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/icon-zalo.png')" }}></Link>
        <button
          className="w-[7.5%] aspect-square flex items-center justify-center bg-[url('/images/icon-list.png')] bg-cover bg-center bg-no-repeat"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
        </button>
        {menuOpen && (
          <div className="absolute right-0 top-0 w-full mt-[calc(23.2%-24px)] bg-gradient-to-b from-[#031F60] to-[#000839] shadow-xl rounded-[16px] border-b-4 border-[#354573] p-4 z-50 animate-dropdown flex flex-col gap-4 transition-all duration-300">
            <div className="flex flex-col gap-2 mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`w-full py-2 rounded-lg text-lg font-bold text-white text-center ${pathname === link.href ? 'bg-blue-900/60' : 'hover:bg-blue-800/40 transition'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.header>
  );
};

export default Header;