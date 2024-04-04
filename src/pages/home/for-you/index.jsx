import NewTweet from '../../../components/newtweet';
import Post from '../../../components/post';
import { posts}  from '../../../mock/posts';


export default function ForYou(){

    return(
       
            <>
                <div><NewTweet/></div>
                <div>{posts.map(post => <Post post={post} key={post.id}  /> )} </div>
            </>
        
    )
}