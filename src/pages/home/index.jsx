// import StickyHeader from "../../components/sticky-header";
import Tab from "../../components/tab";
import Followings from "./followings";
import ForYou from "./for-you";

export default function Home() {

    return (
      
        <>
            {/* <StickyHeader/> */}
                <Tab  activeTab="for-you">
                    <Tab.Items>
                        <Tab.Item id="for-you" >Sana özel</Tab.Item>
                        <Tab.Item id="following">Takip edilenler</Tab.Item>
                    </Tab.Items>
                    <Tab.Content id="for-you">
                       <ForYou/>
                    </Tab.Content>
                    <Tab.Content id="following">
                        <Followings/>
                    </Tab.Content>
                </Tab>
        </>
    )
    
}