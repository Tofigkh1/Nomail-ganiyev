"use client";
import Sidebar, { SidebarItem, SidebarContext } from '../../components/shared/client/SideBarMenu/sideBarMenu';
import NomailPaleSvg from '../../components/shared/svg/nomailPaleSvg';
import NewMail from '../../components/shared/svg/newMail';
import InboxSvg from '../../components/shared/svg/InboxSvg';
import CalendarSvg from '../../components/shared/svg/calendarSvg';
import FavoritesSvg from '../../components/shared/svg/FavoritesSvg';
import ArchiveSvg from '../../components/shared/svg/ArchiveSvg';
import GroupSvg from '../../components/shared/svg/groupSvg';
import TodoSvg from '../../components/shared/svg/TodoSvg';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CalendarActiveSvg from "../../components/shared/svg/calendarActiveSvg";
import SettingSvg from "../../components/shared/svg/settingSvg";
import FavoritesActiveSvg from "../../components/shared/svg/FavoritesActiveSvg";
import FavoritesMessage from '@/components/shared/client/FavoritesMessage';
import Header from '@/components/shared/client/Header/header';
import ArchiveMessage from '@/components/shared/client/archiveMessage';
import ArchiveMessage from '@/components/shared/client/archiveMessage';

export default function ArchivePage() {
    const pathname = usePathname(); // Pathname'i almak için usePathname kullanıldı

    const [expanded, setExpanded] = useState(false)
    const sidebarWidth = expanded ? '200px' : '45px';


    return(
        <SidebarContext.Provider value={{ expanded, setExpanded }}>
        <div>
        <Header />
        <div className="flex">
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
                                icon={pathname === '/calendar' ? <CalendarActiveSvg /> : <CalendarSvg />}
                                active={pathname === '/calendar'}
                                text="Calendar"
                                onClick={() => push('/calendar')}
                                style={pathname === '/calendar' ? { color: 'green' } : {}}
                            />
                            <SidebarItem
                                 icon={pathname === '/favorites' ? <FavoritesActiveSvg /> : <FavoritesSvg />}
                                 active={pathname === '/favorites'}
                                 text="Favorites"
                                 onClick={() => push('/favorites')}
                                 style={pathname === '/favorites' ? { color: 'green' } : {}}
                            />
                       
                            <SidebarItem
                          icon={pathname === '/calendar' ?   <ArchiveActive/> : <ArchiveSvg />}
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

                            {/* Settings item moved to the bottom */}
                            <div className=" mt-28">
                                <SidebarItem
                                    icon={<SettingSvg />}
                                    text="Settings"
                                    active={false}
                                    onClick={() => {}}
                                />
                            </div>
                        </Sidebar>
                    </div>

                          {/* MainFrameMessage Section */}
      <div style={{ marginLeft: "73px" }} className="">
                        <ArchiveMessage />
                     
                    </div>


      {/* No message section */}
      <div className="flex flex-grow justify-center items-center h-screen flex-col font-semibold text-textGray gap-7 text-2xl">
                        <NomailPaleSvg />
                        <h1>No message selected</h1>
                    </div>
                    </div>
        </div>
        </SidebarContext.Provider>
    )

}