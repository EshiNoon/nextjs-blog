import Post from "../components/Post";
import Header from "../components/Header";


//fetching favorite image data from mongodb
Liked.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/notes');
    const { data } = await res.json();
    return { notes: data }
  }


  const deleteNote = async (_id) => {
    const noteId = _id;
    try {
      const deleted = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
        method: "Delete"
      });
  
      Router.reload();
    } catch (error) {
      console.log(error)
    }
  }


  const handler = (prf) => { deleteNote(prf._id); };


function Liked ({notes}) {
    return(
        <div>
    <div>
    <Header />

      <Post
        posts={notes}
        handlefav={handler} />
    </div>
        </div>

    )
}

export default Liked;


