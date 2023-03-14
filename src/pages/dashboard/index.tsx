import Doctors from "@/components/DoctorsCard";
import { useSession } from "next-auth/react";
import DashboardLayout from "./dashboardLayout";

export default function UserPanel() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }
  if (session) {
    return <DashboardLayout><div>xd</div></DashboardLayout>;
  }
}
