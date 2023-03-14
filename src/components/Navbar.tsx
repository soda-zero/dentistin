import { Menu, Transition } from "@headlessui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Navbar() {
  const { data: sessionData } = useSession();
  return (
    <nav className="navbar border-b bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          Zubi
        </Link>
        <ul className="flex gap-2 p-1 text-sm">
          <li>
            <Link href="/#professionals" className="link-hover link">
              Professionals
            </Link>
          </li>
          <li>
            <Link className="link-hover link" href="/#information">
              Information
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        {sessionData ? (
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                <Image
                  src={sessionData.user.image as string}
                  alt="User Avatar"
                  width={50}
                  height={50}
                />
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="ul"
                className="dived-y absolute right-0 mt-3 w-52 origin-top-right divide-y  divide-base-200 rounded-lg border  bg-base-100 p-2 shadow "
              >
                <div className="px-1 pb-1">
                  <Menu.Item as="li">
                    {({ active }) => (
                      <Link
                        href="/profile"
                        className={`${
                          active ? "bg-base-300 " : ""
                        } group flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm`}
                      >
                        Profile
                        <UserIcon />
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="p-1">
                  <Menu.Item as="li">
                    {({ active }) => (
                      <Link
                        href="/dashboard"
                        className={`${
                          active ? "bg-base-300 " : ""
                        } group flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm`}
                      >
                        Settings
                        <CogsIcon />
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 pt-1">
                  <Menu.Item as="li">
                    {({ active }) => (
                      <button
                        onClick={() => void signOut()}
                        className={`${
                          active ? "bg-base-300 " : ""
                        } group flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm`}
                      >
                        Logout
                        <LogOutIcon />
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        ) : (
          <button className="btn" onClick={() => void signIn()}>
            Log In
          </button>
        )}
      </div>
    </nav>
  );
}

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
}

function CogsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}
function LogOutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      />
    </svg>
  );
}
