export default function Photo( {photos}){
   
    switch(photos.length){
        case 1:
            return (
                <div className="post__photo mt-3 ">
                    <img src={photos[0]} alt="post" className="border border-[#1b1c1c]  rounded-2xl" />
                </div>
            ) 
        case 2:
            return (
                <div className="post__photos">
                    <img src={photos[0]} alt="post" />
                    <img src={photos[1]} alt="post" />
                </div>
            )
        case 3:
            return (
                <div className="post__photos">
                    <img src={photos[0]} alt="post" />
                    <img src={photos[1]} alt="post" />
                    <img src={photos[2]} alt="post" />
                </div>
            )
      
    }

}