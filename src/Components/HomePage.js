import { useState } from 'react';
import{useSelector,useDispatch} from 'react-redux'
import { addpost } from '../Redux/action';


function HomePage () {
     
     const user = useSelector((state) => state.user);
     const posts = useSelector(state => state.posts)
      const dispatch = useDispatch()
      const[newpost, setNewpost] = useState("")
    return (
      <div>
        <div className="profil">
          
              <h1>Hello {user.username} </h1>
             
       
        </div>

        <div className="add-posts">
          <h2>add your post here</h2>
          <button
            onClick={() =>
              dispatch(
                addpost({ post: newpost, id: Math.random(), userid: user.id })
              )
            }
          >
            ADD
          </button>
          <input
            type="text"
            value={newpost}
            onChange={(e) => setNewpost(e.target.value)}
          />
        </div>
      </div>
    );
}
export default HomePage


