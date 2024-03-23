import SidebarSection from "../../../../components/sidebar-section";
import { useAccount } from "../../../../store/auth/hooks";
import {whoConnectUsers} from './../../../../mock'
import UserCard from "../../../../components/user-card";

export default function ConnectPeople() {
    const account = useAccount()
    return(
        <SidebarSection 
            title="Kimi takip etmeli"
            more={`/connect_people?user_id=${account.id}`}
        >
            {whoConnectUsers.map((user) =>
            <UserCard user={user} key={user.id}
            /> )}
        </SidebarSection>
    )
}