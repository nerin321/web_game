"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const games = [
  {
    name: "Game bản quyền active off",
    href: "#",
  },
  {
    name: "Game đối kháng",
    href: "#",
  },
  {
    name: "Game chiến thuât",
    href: "#",
  },
  {
    name: "Game chặt chém",
    href: "#",
  },
  {
    name: "Game giả lập",
    href: "#",
  },
  {
    name: "Game góc nhìn thứ nhất",
    href: "#",
  },
  {
    name: "Game góc nhìn thứ ba ",
    href: "#",
  },
  {
    name: "Game hành động",
    href: "#",
  },
  {
    name: "Game kinh dị",
    href: "#",
  },
  {
    name: "Game mô phỏng",
    href: "#",
  },
  {
    name: "Game bắn súng",
    href: "#",
  },
  {
    name: "Game nhập vai",
    href: "#",
  },
  {
    name: "Game thể thao",
    href: "#",
  },
  {
    name: "Game sinh tồn",
    href: "#",
  },
  {
    name: "Game visual novel",
    href: "#",
  },
  {
    name: "Game online + co-op + multiplayer",
    href: "#",
  },
  {
    name: "Game thế giới mở",
    href: "#",
  },
  {
    name: "Game phiêu lưu",
    href: "#",
  },
  {
    name: "Game giải đố",
    href: "#",
  },
];
const blogs = [
  {
    name: "Thủ thuật",
    href: "./blogs",
  },
  {
    name: "TOP GAME",
    href: "#",
  },
  {
    name: "TOP PHẦN MỀM",
    href: "#",
  },
  {
    name: "Liên hệ",
    href: "#",
  },
  {
    name: "FAQ",
    href: "#",
  },
  {
    name: "DONATION FOR SUPPORTER",
    href: "#",
  },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        aria-label="Global"
        className="max-w-7xl lg:px-8 flex items-center justify-between p-6 mx-auto"
      >
        <div className="lg:hidden flex">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <PopoverGroup className="lg:flex lg:gap-x-12 hidden">
          <a
            href="#"
            className="text-sm/6 hover:text-secondry font-bold uppercase"
          >
            Game tải nhiều
          </a>
          <Popover className="relative">
            <PopoverButton className="gap-x-1 text-sm/6 hover:text-secondry flex items-center font-bold uppercase">
              Game +
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-9 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-b-2xl bg-white dark:bg-dark-bg-primary shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {games.map((item) => (
                  <div
                    key={item.name}
                    className="group gap-x-6 text-sm/6 hover:text-secondry relative flex items-center px-4 font-semibold uppercase rounded-lg"
                  >
                    <a href={item.href}>{item.name}</a>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a
            href="./category"
            className="text-sm/6 hover:text-secondry font-bold uppercase"
          >
            Game việt hóa
          </a>
          <a
            href="#"
            className="text-sm/6 hover:text-secondry font-bold uppercase"
          >
            Phần mềm
          </a>
          <a
            href="#"
            className="text-sm/6 hover:text-secondry font-bold uppercase"
          >
            Nạp tải vip
          </a>
          <a
            href="#"
            className="text-sm/6 hover:text-secondry font-bold uppercase"
          >
            Nhiệm vụ
          </a>
          <Popover className="relative">
            <PopoverButton className="gap-x-1 text-sm/6 hover:text-secondry flex items-center font-bold uppercase">
              Blog +
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -right-8 top-9 z-10 mt-3 w-fit overflow-hidden rounded-b-2xl bg-white dark:bg-dark-bg-primary shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {blogs.map((item) => (
                  <div
                    key={item.name}
                    className="group gap-x-6 text-sm/6 hover:text-secondry relative flex items-center px-4 font-semibold uppercase rounded-lg text-nowrap"
                  >
                    <a href={item.href}>{item.name}</a>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>
      {/* Mobile expand */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white">
          <div className="flex items-center justify-end px-6 py-6 bg-red-700">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 "
            >
              <span className="sr-only">Close menu</span>
              <FontAwesomeIcon icon={faX} className="text-white" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="divide-gray-500/10 -my-6 divide-y">
              <div className="divide-y">
                <a
                  href="#"
                  className="text-base/7 hover:bg-gray-50 block px-6 py-2 -mx-3 font-semibold uppercase rounded-lg"
                >
                  Game tải nhiều
                </a>
                <Disclosure as="div" className="-mx-3">
                  <div className="text-base/7 flex items-center justify-between px-6 font-semibold uppercase">
                    <span>Game</span>
                    <DisclosureButton className="group flex items-center justify-center px-10 py-3 border-l">
                      +
                    </DisclosureButton>
                  </div>

                  <DisclosurePanel className="bg-black divide-y divide-gray-500">
                    {games.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="text-sm/7 hover:bg-gray-50 block py-2 pl-12 pr-3 font-semibold text-white capitalize"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="text-base/7 hover:bg-gray-50 block px-6 py-2 -mx-3 font-semibold uppercase rounded-lg"
                >
                  Game việt hóa
                </a>
                <a
                  href="#"
                  className="text-base/7 hover:bg-gray-50 block px-6 py-2 -mx-3 font-semibold uppercase rounded-lg"
                >
                  phần mềm
                </a>
                <a
                  href="#"
                  className="text-base/7 hover:bg-gray-50 block px-6 py-2 -mx-3 font-semibold uppercase rounded-lg"
                >
                  nạp tải vip
                </a>
                <a
                  href="#"
                  className="text-base/7 hover:bg-gray-50 block px-6 py-2 -mx-3 font-semibold uppercase rounded-lg"
                >
                  nhiệm vụ
                </a>
                <Disclosure as="div" className="-mx-3">
                  <div className="text-base/7 flex items-center justify-between px-6 font-semibold uppercase">
                    <span>Blogs</span>
                    <DisclosureButton className="group flex items-center justify-center px-10 py-3 border-l">
                      +
                    </DisclosureButton>
                  </div>

                  <DisclosurePanel className="bg-black divide-y divide-gray-500">
                    {blogs.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="text-sm/7 hover:bg-gray-50 block py-2 pl-12 pr-3 font-semibold text-white capitalize"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
