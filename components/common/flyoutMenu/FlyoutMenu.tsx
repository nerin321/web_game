import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const items = [
  {
    name: "Analytics",
    link: "Get a better understanding of your traffic",
    href: "#",
    date: "11/1/2023",
  },
  {
    name: "Engagement",
    link: "Speak directly to your customers",
    href: "#",
    date: "11/1/2023",
  },
  {
    name: "Security",
    link: "Your customers' data will be safe and secure",
    href: "#",
    date: "11/1/2023",
  },
  {
    name: "Integrations",
    link: "Connect with third-party tools",
    href: "#",
    date: "11/1/2023",
  },
  {
    name: "Automations",
    link: "Build strategic funnels that will convert",
    href: "#",
    date: "11/1/2023",
  },
];

export default function FlyoutMenu() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center justify-center size-10 rounded-full bg-black relative">
        <FontAwesomeIcon icon={faBell} className="size-6 text-white" />
        <p className="absolute -top-2 -right-2 size-6 flex items-center justify-center bg-red-600 rounded-full text-white">
          {items.length}
        </p>
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-3 space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="group font-medium border-l-4 rounded-md p-2 border-blue-700"
              >
                <p>
                  <span className="text-xl text-center inline-block size-7 text-red-700 rounded-lg bg-gray-300/40 mr-2">
                    {index + 1}
                  </span>
                  {item.name} :{" "}
                  <a href={item.link} className="text-orange-700">
                    {item.link}
                  </a>
                </p>
                <p className="text-gray-400 text-xs">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
