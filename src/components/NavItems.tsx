import React from "react";

interface MenuItemsProps {
  onItemSelect: (id: string) => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ onItemSelect }) => {
  const menuItems = [
    { id: "about", number: "01", label: "About" },
    { id: "works", number: "02", label: "Works" },
    { id: "awards", number: "03", label: "Awards" },
    { id: "expertise", number: "04", label: "Expertise" },
    { id: "contact", number: "05", label: "Contact" },
  ];

  return (
    <ul className="space-y-4">
      {menuItems.map((item) => (
        <li key={item.id} className="flex items-center space-x-4">
          <span className="text-sm opacity-50">{item.number}</span>
          <button
            onClick={() => onItemSelect(item.id)}
            className="text-lg font-medium hover:text-accent transition-colors relative group"
          >
            {item.label}
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
