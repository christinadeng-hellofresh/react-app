import blogs from './data';
import './blogs.css';
import BlogCard from './BlogCard';

const Blogs = () => {
  return (
    <section id="blogs">
      <h2>Check out some useful blogs</h2>
      <p>
        Shoot me a message via any of the links below!
      </p>
      <div className="container blog__container">
        {
          blogs.map(blog => <BlogCard />)
        }
      </div>
    </section>
  )
}

export default Blogs;