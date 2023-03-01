import { Menu } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { data: sessionData } = useSession();
  const userImg = sessionData?.user.image as string;
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">Zubi</a>
      </div>
      <div className="flex-none gap-2">
        {sessionData ? (
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                <Image src={userImg} alt="User Avatar" width={50} height={50} />
              </div>
            </Menu.Button>
            <Menu.Items
              as="ul"
              className="dived-y rounded-lg absolute right-0 mt-3 w-52 origin-top-right  divide-y divide-base-200 bg-base-100  p-2 shadow"
            >
              <Menu.Item as="li">
                {({ active }) => (
                  <Link
                    href="/profile"
                    className={`${
                      active ? "bg-base-300 " : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item as="li">
                {({ active }) => (
                  <Link
                    href="/settings"
                    className={`${
                      active ? "bg-base-300 " : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Settings
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item as="li">
                {({ active }) => (
                  <button
                    onClick={() => void signOut()}
                    className={`${
                      active ? "bg-base-300 " : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ) : null}
      </div>
    </div>
  );
}
