import { useState, useEffect} from 'react'; // hook useState
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setblogs] = useState(null); 
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    //const [name , setName] = useState('mario');

    //rerender trigger this function
    useEffect(() => { // we can't make it aysnc only if you want to externalize it then only
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
            .then(res => { //after it is fetch 
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                } 
                return res.json(); //aysnc it will take time to do
            }) // data what res.json
            .then(data => { //aray of obj
                setIsPending(false);
                setblogs(data);
                setError(null);
            })
            .catch(err => {
                // auto catches network / connection error
                setIsPending(false);
                setError(err.message);
              })
        },1000);    
    },[]); // with an array it will only run once and will run only when the name in array is change by clickHandler

    return ( //only props will passed to the particular component in which they are mentioned
        //flitering blog reusing components
        //passing prop as click function
        // conditional operator if it is first one is true or not
        <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <BlogList blogProp ={blogs} title="ALL BLOGS!" />}  
        {/* <BlogList blogProp ={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's blog"/>   */}
        {/* <button onClick={() => setName('luigi')} >change name</button>
        <p>{name}</p> */}
        </div>
    );
}

export default Home;