import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import mypic from './mypic.jpeg';




export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };
  }

  componentDidMount(){
    this.retrievePosts();
  }

  retrievePosts(){
    axios.get("http://localhost:8000/posts").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    });
  }

  onDelete= (id) =>{
    axios.delete(`/post/delete/${id}`).then((res) =>{
      alert("Deleted successfully");
      this.retrievePosts();
    })
  }

  filterData(posts,searchKey){

    const result = posts.filter((post) =>
    post.topic.toLowerCase().includes(searchKey)||
    post.description.toLowerCase().includes(searchKey)||
    post.postCategory.toLowerCase().includes(searchKey)
   
    )
    this.setState({posts:result})
  }



  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/posts").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingPosts,searchKey)
      }
    });
  }




  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9 mt-2 mb-2'>
           <h4 style={{color: '#111', fontFamily: 'Helavetica Neue', fontSize:'200px', fontWeight:'bold', letterSpacing:'-1px', lineHeight: '1', textAlign:'center'}}>All Posts</h4>
           </div>
           <div className='col-lg-3 mt-2 mv-2'>
             <input
             className='form-control'
             type="search"
             placeholder='Search'
             name='searchQuery'
             onChange={this.handleSearchArea}>
             </input>
             </div>
             </div>
             
        <table className='table table-hover' style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Topic</th>
              <th scope='col'>Description</th>
              <th scope='col'>Post Category</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope='row'>{index+1}</th>
                <td>
                    <Link to={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.topic}
                    </Link>
                    </td>
                <td>{posts.description}</td>
                <td>{posts.postCategory}</td>
                <td>
                  <Link className='btn btn-warning' to={`/edit/${posts._id}`}>
                    <i className='fas fa-edit'></i>&nbsp;Edit
                    </Link>
                    &nbsp;
                    <Link className='btn btn-danger' to='#' onClick={() => this.onDelete(posts._id)}>
                      <i className='far fa-trash-alt'></i>&nbsp;Delete
                    </Link>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

        <button className='btn btn-success'> <Link to="/add" style={{extDecoration:'none',color:'white'}}>Create New Post</Link></button>
        
      </div>
    )
  }
}


