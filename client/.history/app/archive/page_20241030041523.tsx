
import Sidebar, { SidebarItem, SidebarContext } from '../../components/shared/client/SideBarMenu/sideBarMenu';
import NomailPaleSvg from '../../components/shared/svg/nomailPaleSvg';
import NewMail from '../../components/shared/svg/newMail';
import InboxSvg from '../../components/shared/svg/InboxSvg';
import CalendarSvg from '../../components/shared/svg/calendarSvg';
import FavoritesSvg from '../../components/shared/svg/FavoritesSvg';
import ArchiveSvg from '../../components/shared/svg/ArchiveSvg';
import GroupSvg from '../../components/shared/svg/groupSvg';
import TodoSvg from '../../components/shared/svg/TodoSvg';



export default function ArchivePage() {


    return(
        <SidebarContext.Provider value={{ expanded, setExpanded }}>
        <div>
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
        </div>
        </SidebarContext.Provider>
    )

}