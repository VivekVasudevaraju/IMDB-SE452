import React,{Component, useState } from "react";

    function MovieReview(reviewTitle,userName,reviewData) {
        const [likeCount,setLikeCount] = useState(0);
        const [dislikeCount,setDislikeCount] = useState(0);

        const movieDummyData = " Low expectations were what I had when the trailer first appeared on my phone screen." +
            " I wasn't even interested to watch it till the end. I would roll my eyes on the animation style, its not eye-catching nor it is impressive." +
            "But damnnnnnnn! I wasnt expecting it to be good. Its a feature animated film filled with genuine laughter,comical characters and an above the par plot"

        const usernameData = "MovieLover724"
        const userTitleData = "Movie Was Worth A Watch!"

        const styleObj = {
            fontSize: 18,
            fontWeight: "bold",
            color: "White",
        }

        return(


            <div className={"row"}  >
                <div >


                    <p style= { styleObj } > {userTitleData} </p>
                    <p style={ {color:"#4A5CFF",fontSize:14, fontWeight: "bold"} } > {usernameData} </p>
                    <p  style={ {color:"white",fontSize:"12px"} }>{movieDummyData}</p>

                    <div className={"row"}>


                            <div className={"col-1"}>
                                <i onClick= { ()=>setLikeCount(likeCount + 1)} style={{color:"green"}} className="fa-regular fa-thumbs-up fa-1xl"></i>
                                <p>{likeCount}</p>
                            </div>


                        <div  className={"col"}>
                            <i onClick= { ()=>setDislikeCount(dislikeCount + 1)}style={{color:"red"}}className="fa-regular fa-thumbs-down fa-1xl"></i>
                            <p>{dislikeCount}</p>
                        </div>


                    </div>
                </div>



            </div>

        )

    }
export default MovieReview