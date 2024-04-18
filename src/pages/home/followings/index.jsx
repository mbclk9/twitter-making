import NewTweet from '../../../components/newtweet';
import Post from '../../../components/post';
import { posts2}  from '../../../mock/posts';


export default function Followings(){
    return(
        <>
            <div><NewTweet/></div>      
            <div>{posts2.map(post => <Post post={post} key={post.id}  /> )}</div>
        </>
    )
}