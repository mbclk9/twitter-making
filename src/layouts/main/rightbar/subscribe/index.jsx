/* eslint-disable react/no-unescaped-entities */
import Button from "../../../../components/button";

export default function Subscribe(){
    return(
            <section className="bg-[#16181c] mb-4 rounded-2xl text-[#e7e9ea] border border-[#16181c] py-3 px-4 flex flex-col gap-2.5 items-start ">
                <h6 className=" text-xl leading-6 font-extrabold">Premium'a Abone Ol</h6>
                <p className="text-[15px] leading-5">Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</p>
                <Button size="medium">Abone ol</Button>
            </section>

    )
}