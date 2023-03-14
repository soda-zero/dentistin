import Link from "next/link";
import { useRouter } from "next/router";

export default function DashBoardSideBar() {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;
  return (
      <nav className="drawer-content">
        <ul className="menu h-screen max-w-xs gap-2 border-r bg-base-100 p-4 text-base-content">
          <li>
            <Link
              href="/profile"
              className={`${
                isActive("/profile")
                  ? "pointer-events-none cursor-not-allowed bg-base-300 text-lg"
                  : ""
              }`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className={`${
                isActive("/dashboard")
                  ? "pointer-events-none cursor-not-allowed bg-base-300 text-lg"
                  : ""
              }`}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
  );
}
