"use client"

import { BarChart, Compass, Layout, List } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";

const guestRoutes =[
    {
        icon: Layout,
        lable: "Dashboard",
        href: "/",
    },

    {
        icon: Compass,
        lable: "Browser",
        href: "/search",
    },

];


const teacherRoutes =[
    {
        icon: List,
        lable: "Courses",
        href: "/teacher/courses",
    },

    {
        icon: BarChart,
        lable: "Analytics",
        href: "/teacher/analytics",
    },

]

export const SidebarRoutes = () =>{
    const pathname = usePathname();

    const isTeacherPage = pathname?.includes("/teacher");
    const routes = isTeacherPage ? teacherRoutes : guestRoutes;
    return(
        <div className="flex flex-col w-full">
          {routes.map((route) =>(
            <SidebarItem
            key={route.href}
            icon={route.icon}
            label={route.lable}
            href={route.href}
            />
          ))}
        </div>
    )
}