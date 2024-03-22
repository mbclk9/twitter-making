import { topics } from "../../../../utils/consts";
import Topic from "./topic";

export default function Topics(){
    return(
       <section className="bg-[#16181c] mb-4 rounded-2xl  border border-[#16181c]  flex flex-col ">
            <h5 className="text-[#e7e9ea] text-xl font-extrabold leading-6 py-3 px-4">İlgini çekebilecek gündemler</h5>
            
            <div className=" grid">
                 {topics.map((topic, index) =>  <Topic item={topic} key={index} /> ) }
            </div>
       </section>
    )
}