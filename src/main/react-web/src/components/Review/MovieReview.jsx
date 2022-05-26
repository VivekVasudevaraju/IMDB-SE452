import React,{Component} from "react";
class MovieReview extends React.Component{

    render(){

        const styleObj = {
            fontSize: 18,
            fontWeight: "bold",
            color: "White",
        }

        return(


            <div className={"row"}  >
                    <div >


                            <p style= { styleObj } > {this.props.reviewTitle} </p>
                            <p style={ {color:"#4A5CFF",fontSize:14, fontWeight: "bold"} } >{this.props.userName}</p>
                            <p  style={ {color:"white",fontSize:"12px"} }>{this.props.reviewData}</p>

                        <div className={"row"}>
                            <div className={"col-1"}>
                                <i style={{color:"green"}} className="fa-regular fa-thumbs-up fa-1xl"></i>
                                <p>0</p>
                            </div>
                            <div className={"col"}>
                                <i style={{color:"red"}}className="fa-regular fa-thumbs-down fa-1xl"></i>
                                <p>0</p>
                            </div>

                        </div>
                    </div>



            </div>

        )

    }


}
export default MovieReview