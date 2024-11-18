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
    href: "#",
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
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="#"
            className="text-sm/6 font-bold  uppercase hover:text-secondry"
          >
            Game tải nhiều
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-bold  uppercase hover:text-secondry">
              Game +
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {games.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 uppercase hover:bg-gray-50"
                  >
                    <a href={item.href}>{item.name}</a>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a
            href="#"
            className="text-sm/6 font-bold  uppercase hover:text-secondry"
          >
            Game việt hóa
          </a>
          <a
            href="#"
            className="text-sm/6 font-bold  uppercase hover:text-secondry"
          >
            Phần mềm
          </a>
          <a
            href="#"
            className="text-sm/6 font-bold  uppercase hover:text-secondry"
          >
            Nạp tải vip
          </a>
          <a
            href="#"
            className="text-sm/6 font-bold  uppercase hover:text-secondry"
          >
            Nhiệm vụ
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-bold  uppercase hover:text-secondry">
              Blog +
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {blogs.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 uppercase hover:bg-gray-50"
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
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end bg-red-700 px-6 py-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 "
            >
              <span className="sr-only">Close menu</span>
              <FontAwesomeIcon icon={faX} className="text-white" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="divide-y">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-6 py-2 text-base/7 font-semibold uppercase  hover:bg-gray-50"
                >
                  Game tải nhiều
                </a>
                <Disclosure as="div" className="-mx-3">
                  <div className="flex items-center justify-between px-6 text-base/7 font-semibold  uppercase">
                    <span>Game</span>
                    <DisclosureButton className="group flex items-center justify-center py-3 px-10 border-l">
                      +
                    </DisclosureButton>
                  </div>

                  <DisclosurePanel className="divide-y divide-gray-500 bg-black">
                    {games.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block py-2 pl-12 pr-3 text-sm/7 font-semibold text-white capitalize  hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-6 py-2 text-base/7 font-semibold uppercase  hover:bg-gray-50"
                >
                  Game việt hóa
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-6 py-2 text-base/7 font-semibold uppercase  hover:bg-gray-50"
                >
                  phần mềm
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-6 py-2 text-base/7 font-semibold uppercase  hover:bg-gray-50"
                >
                  nạp tải vip
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-6 py-2 text-base/7 font-semibold uppercase  hover:bg-gray-50"
                >
                  nhiệm vụ
                </a>
                <Disclosure as="div" className="-mx-3">
                  <div className="flex items-center justify-between px-6 text-base/7 font-semibold  uppercase">
                    <span>Blogs</span>
                    <DisclosureButton className="group flex items-center justify-center py-3 px-10 border-l">
                      +
                    </DisclosureButton>
                  </div>

                  <DisclosurePanel className="divide-y divide-gray-500 bg-black">
                    {blogs.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block py-2 pl-12 pr-3 text-sm/7 font-semibold text-white capitalize  hover:bg-gray-50"
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
