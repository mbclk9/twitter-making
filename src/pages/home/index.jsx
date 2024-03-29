// import StickyHeader from "../../components/sticky-header";
import Tab from "../../components/tab";

export default function Home() {

    return (
      
        <>
            {/* <StickyHeader/> */}
                <Tab  activeTab="for-you">
                    <Tab.Items>
                        <Tab.Item id="for-you" >Sana özel</Tab.Item>
                        <Tab.Item id="following">Takip edilenler</Tab.Item>
                    </Tab.Items>
                    <Tab.Content id="for-you">Content 1</Tab.Content>
                    <Tab.Content id="following">Content 2</Tab.Content>
                </Tab>
            Home Component
        </>
    )
    
}