const BlogList = ({ blogProp, title}) => {  // getting props from home.js
   // const blogs = props.blogProp; // storing the prop in const so that we can use that props.nameattribute in home.js
   // const title = props.title;
    //console.log(props, blogs);
    //we should not directly added blog props
    return ( 
        <div className="blog-list">
            {title}
             { blogProp.map((blog) => (
             <div className="blog-preview" key={blog.id}>
                 <h2>{ blog.title}</h2>
                 <p>Written By { blog.author}</p>
                 {/* <button onClick={() => handledelete(blog.id)}>delete Blog</button> */}
             </div>
         ))}    
        </div>
     );
}
 
export default BlogList;