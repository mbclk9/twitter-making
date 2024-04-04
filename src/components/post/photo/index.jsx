export default function Photo( {photos}){
   
    switch(photos.length){
        case 1:
            return (
                <div className="post__photo mt-3 ">
                    <img src={photos[0]} alt="post" className=" max-h-[510px] object-cover border border-[#1b1c1c]  rounded-2xl" />
                </div>
            ) 
        case 2:
            return (
                <div className="post__photos grid grid-cols-2 h-[288px] gap-1 mt-3  border border-[#1b1c1c] rounded-2xl overflow-hidden" >
                    <img src={photos[0]} alt="post" className=" h-full w-full object-cover"/>
                    <img src={photos[1]} alt="post" className=" h-full w-full object-cover" />
                </div>
            )
        case 3:
            return (
                <div className="post__photos  grid grid-cols-2 h-[288px] gap-1 my-3  border border-[#1b1c1c] rounded-2xl overflow-hidden">
                    <img src={photos[0]} alt="post"  className="h-full w-full object-cover" />
                    <div className="h-full flex flex-col gap-0.5">
                        <div className=" flex-shrink-0 flex-1 relative">
                            <img src={photos[1]} alt="post"  className="h-full w-full absolute inset-0 object-cover" />
                        </div>
                        <div className=" flex-shrink-0 flex-1 relative">
                            <img src={photos[2]} alt="post"  className="h-full w-full absolute inset-0 object-cover" />
                        </div>
                    </div>
                </div>
            )
            case 4:
                return (
                    <div className="post__photos grid grid-cols-2 h-[286px] gap-1 mt-3  border border-[#1b1c1c] rounded-2xl overflow-hidden" >
                        <img src={photos[0]} alt="post" className=" h-full w-full object-cover"/>
                        <img src={photos[1]} alt="post" className=" h-full w-full object-cover" />
                        <img src={photos[2]} alt="post" className=" h-full w-full object-cover" />
                        <img src={photos[3]} alt="post" className=" h-full w-full object-cover" />
                    </div>
                )
      
    }

}