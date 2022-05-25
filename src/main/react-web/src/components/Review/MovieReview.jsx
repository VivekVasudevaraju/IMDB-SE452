import React,{Component} from "react";
class MovieReview extends React.Component{

    render(){

        const styleObj = {
            fontSize: 40,
            fontWeight: "bold",
            color: "Purple",
        }

        return(


            <div className={"element"}>


                <p style= { styleObj } > {this.props.reviewTitle} </p>

                <h2 style={ {color:"#72a4d4"} } >{this.props.userName}</h2>




                <p style={ {width: 750, color:"white",fontSize:"20px"} }>
                    {this.props.reviewData}
                </p>

                <div style={{paddingBottom:"45px"}}>
                    <i style={{color:"green",paddingLeft:"665px", paddingRight:"30px"}} className="fa-regular fa-thumbs-up fa-2xl"></i>
                    <i style={{color:"red"}}className="fa-regular fa-thumbs-down fa-2xl"></i>

                </div>


            </div>

        )

    }


}
export default MovieReview