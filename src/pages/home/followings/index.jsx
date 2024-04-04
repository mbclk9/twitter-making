import Post from '../../../components/post';
import { posts2}  from '../../../mock/posts';


export default function Followings(){
    return(
        <>
                            
            {posts2.map(post => <Post post={post} key={post.id}  /> )}     

        </>
    )
}