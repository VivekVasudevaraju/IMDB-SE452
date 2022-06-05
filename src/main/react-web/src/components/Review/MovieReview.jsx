import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function MovieReview(prp) {

  const userData = prp.reviewData
  const [review, setReview] = useState([]);
  const [a, setA] = useState(0);
  const [c, setC] = useState(3);
  const [myUserMovieData, setMyUserMovieData] = useState([]);

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  let theMovieId_2 = prp.movieIdParam;
  console.log("MOVIE ID IS!!! : " + theMovieId_2)




  async function doIt() {
    axios.get(`/api/movie/${theMovieId_2}/`, {
      params: {}
    })
        .then(function (response) {
              setReview(response.data.review)
              console.log(response.data.review);
            }
        )
  }


  useEffect(() => {
    console.log("Man with big bow")
    doIt();
  }, [a,c,dislikeCount,likeCount]);


  //
  // useEffect(() => {
  //   async function getData() {
  //     const response = await axios.get(`/api/movie/${theMovieId_2}/`);
  //       setReview(response.data);
  //
  //     // const response_2 = await axios.get("/api/users/");
  //     // setMyUserMovieData(response_2.data);
  //     //
  //     // console.log("My Movie Data: " + myUserMovieData)
  //   }
  //   getData();
  // }, [userData]);


  // const reviewArrayData = review.review;
  // console.log("MY ARR DATA: " + reviewArrayData)
  // console.log("MY Review.review DATA: " + review.review)


  const styleObj = {
    fontSize: 26,
    fontWeight: "bold",
    color: "White",
    paddingTop:"25px"
  };


  let sendThumbsUpInc_1;
  let sendThumbsDownInc_1;




  return (
      <div className={"row"}>
        {review.slice(a,c).map((review) => (
            <span className={"col-9"}>

                {sendThumbsUpInc_1 = async (e) => {
                  e.preventDefault();
                  try{
                    console.log("ID is:: " + review.id)
                    await axios.put(`/api/review/updatethumbsup/${review.id}`, );
                    setLikeCount(likeCount+1);
                    console.log("REVIEW ID: " + review.id)
                    console.log("REVIEW Likes: " + review.likes)

                  }catch (error){
                    console.log("BROKE!")
                    console.log(error)
                  }

                }
                }

              { sendThumbsDownInc_1 = async (e) => {
                e.preventDefault();

                try{
                  await axios.put(`/api/review/updatethumbsdown/${review.id}`, );
                  setDislikeCount(dislikeCount+1);
                  console.log("REVIEW Dislikes: " + review.review_dislikes)
                }catch (error){
                  console.log(error)
                }
              }
              }

              <div style={styleObj}>
                 {review.reviewTitle}
               </div>

               <div style={{color: "#4A5CFF", fontSize: 14, fontWeight: "bold"}}>

              {review.user == null ? "ANONYMOUS USER" : review.user.userName  }

               </div>

               <div style={{paddingTop: "10px", color: "white", fontSize: "17px", paddingBottom: "10px"}}>
                                {review.reviewText}
               </div>


        <div className={"row"}>
          <div className={"col-1"}>
            <i
                onClick={sendThumbsUpInc_1}
                style={{ color: "green"}}
                className="fa-regular fa-thumbs-up fa-1xl"
            ></i>
            <p>{review.thumbsUp}</p>
          </div>

          <div className={"col"}>
            <i
                onClick={sendThumbsDownInc_1}
                style={{ color: "red" ,paddingLeft:"10px" }}
                className="fa-regular fa-thumbs-down fa-1xl"
            ></i>
            <p  style={{ paddingLeft:"10px" }}>{review.thumbsDown}</p>
          </div>
        </div>
            </span>
        ))}

        <div style={{ paddingTop: "30px" }}>
          <i
              onClick={() => {
                setA(a - 3), setC(c - 3);
              }}
              style={{ color: "#e1ad0b", paddingBottom:"10%" }}
              className="fa-solid fa-circle-chevron-left fa-2xl"
          ></i>
          <i
              onClick={() => {
                setA(a + 3), setC(c + 3);
              }}
              style={{ color: "#e1ad0b", paddingLeft: "100px" }}
              className="fa-solid fa-circle-chevron-right fa-2xl"
          ></i>
        </div>
      </div>
  );
}

export default MovieReview;
