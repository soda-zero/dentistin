import DashBoardSideBar from "@/components/DashBoardSideBar";
import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <DashBoardSideBar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
