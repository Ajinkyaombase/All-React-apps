import React, { Component } from "react";
import { connect } from "react-redux";

class CourseList extends Component{

    render(){
        return(
            <>
            <h1>hii from list</h1>
            <table>
                <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>CourseName</th>
                    <th>CourseFee</th>
                    <th>Options</th>
                    
                </tr>
                </thead>
                <tbody>
                   {this.props.courseList.map((course,index)=>{
                       return(
                        <tr key={index}>
                           <td>{index+1}</td>
                           <td>{course.coursename}</td>
                           <td>{course.coursefee}</td>
                           <td><button onClick={()=>{
                               this.props.deleteByIndex(index)
                           }}>Delete</button></td>
                        </tr>
                       )
                   })}

                </tbody>
                
            </table>
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
  courseList:state.courseList
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        deleteByIndex :(index)=>{dispatch({type :"COURSE_DELETE", payload:index})},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CourseList)