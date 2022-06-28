/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { List, X } from 'phosphor-react';

import Logo from '../Logo';

interface IHeaderProps {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ isOpenMenu, setIsOpenMenu }: IHeaderProps) {
  const Icon = isOpenMenu ? X : List;

  const handleMenu = () => {
    setIsOpenMenu(prev => !prev);
  };

  return (
    <header className="w-full py-5 flex items-center px-6 md:px-0 justify-between md:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
      <div className="flex items-center md:hidden" onClick={handleMenu}>
        <span className="text-2xl">Aulas</span>
        <Icon className="ml-3 text-5xl text-blue-200" />
      </div>
    </header>
  );
}

export default Header;
