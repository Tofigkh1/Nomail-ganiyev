"use client"
import Header from "@/components/shared/client/Header/header";
import Sidebar, { SidebarContext, SidebarItem } from "@/components/shared/client/SideBarMenu/sideBarMenu";
import NomailPaleSvg from '../../components/shared/svg/nomailPaleSvg';
import NewMail from '../../components/shared/svg/newMail';
import InboxSvg from '../../components/shared/svg/InboxSvg';
import CalendarSvg from '../../components/shared/svg/calendarSvg';
import FavoritesSvg from '../../components/shared/svg/FavoritesSvg';
import ArchiveSvg from '../../components/shared/svg/ArchiveSvg';
import GroupSvg from '../../components/shared/svg/groupSvg';
import TodoSvg from '../../components/shared/svg/TodoSvg';
import { useState } from "react";
import MainFrameMessage from "@/components/shared/client/MainFrameMessage";
import Calendar from "@/components/shared/client/Calendar";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import InboxActiveSvg from "../../components/shared/svg/inboxActiveSvg";


export default function CalendarPage() {
    const [expanded, setExpanded] = useState(false); // Sidebar state
    const pathname = usePathname(); // Pathname'i almak için usePathname kullanıldı
    const { push } = useRouter();
    // Sidebar genişliği: genişletildiğinde 250px, daraltıldığında 95px olacak
    const sidebarWidth = expanded ? '200px' : '45px';
    return(
        <div>
               <SidebarContext.Provider value={{ expanded, setExpanded }}>
                  <div>
                <Header />

                <div className="flex">
                    {/* Sidebar Section */}
                    <div style={{ width: sidebarWidth }}>
                        <Sidebar>
                            <SidebarItem
                                icon={<NewMail />}
                                text="New Mail"
                                active={false}
                                onClick={() => {}} // Handle clicks if needed
                            />
                            <SidebarItem
                                icon={<InboxSvg />}
                                text="Inbox"
                                active={false}
                                onClick={() => {}}
                            />
                           <SidebarItem
                                icon={pathname === '/calendar' ? <InboxActiveSvg /> : <CalendarSvg />}
                                active={pathname === '/calendar'}
                                text="Calendar"
                                onClick={() => push('/calendar')}
                            />
                            <SidebarItem
                                icon={<FavoritesSvg />}
                                text="Favorites"
                                active={false}
                                onClick={() => {}}
                            />
                            <SidebarItem
                                icon={<ArchiveSvg />}
                                text="Archive"
                                active={false}
                                onClick={() => {}}
                            />
                            <SidebarItem
                                icon={<GroupSvg />}
                                text="Groups"
                                active={false}
                                onClick={() => {}}
                            />
                            <SidebarItem
                                icon={<TodoSvg />}
                                text="To do"
                                active={false}
                                onClick={() => {}}
                            />
                        </Sidebar>
                    </div>


                    {/* No message section */}
                    <div className="flex flex-grow justify-center items-center h-screen flex-col font-semibold text-textGray gap-7 text-2xl">
                        <Calendar/>
                    
                    </div>
                </div>
            </div>
            </SidebarContext.Provider>
        </div>
    )
}