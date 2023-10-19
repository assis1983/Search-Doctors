import { useState } from "react";
import { HamburgerButton } from "./style";

const Hamburguer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <HamburgerButton className={isOpen ? "open" : ""} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerButton>

      {isOpen && (
        <div className="menu">
          <ul>
            {/* <li>Opção 1</li>
            <li>Opção 2</li>
            <li>Opção 3</li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburguer;
