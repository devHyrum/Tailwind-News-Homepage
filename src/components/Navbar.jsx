import { useState } from 'react';
import burgerMenu from '../assets/images/icon-menu.svg';
import close from '../assets/images/icon-menu-close.svg'
export const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 sm:hidden" onClick={toggleModal}>
          <div className="absolute top-0 right-0 w-64 bg-white p-4 h-full shadow-lg z-20 place-content-center" onClick={(e) => e.stopPropagation()}>
            <button className="mb-4 absolute right-5 top-8" onClick={toggleModal}>
                <img src={close} alt="close" />
            </button>
            <ul className="flex flex-col text-[18px] gap-6 relative bottom-20 text-xl ml-5 ">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">New</a>
              </li>
              <li>
                <a href="">Popular</a>
              </li>
              <li>
                <a href="">Trending</a>
              </li>
              <li>
                <a href="">Categories</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <img
        onClick={toggleModal}
        className="w-10 h-4 cursor-pointer sm:hidden"
        src={burgerMenu}
        alt="Menu"
      />
      <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">New</a>
        </li>
        <li>
          <a href="">Popular</a>
        </li>
        <li>
          <a href="">Trending</a>
        </li>
        <li>
          <a href="">Categories</a>
        </li>
      </ul>
    </>
  );
};
