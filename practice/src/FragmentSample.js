import React,{ Component} from "react";

export default class FragmentSample extends Component{
    myList=[1,2,3,4,5];

    render(){
        return this.myList.map((listItem, index)=> {
            return <React.Fragment key={index}>{listItem}</React.Fragment>
        })
    }

}