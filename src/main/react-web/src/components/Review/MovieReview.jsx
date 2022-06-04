import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieReview(prp) {
  const movieDummyData =
    " Low expectations were what I had when the trailer first appeared on my phone screen." +
    " I wasn't even interested to watch it till the end. I would roll my eyes on the animation style, its not eye-catching nor it is impressive." +
    "But damnnnnnnn! I wasnt expecting it to be good. Its a feature animated film filled with genuine laughter,comical characters and an above the par plot";

  const userData = prp.reviewData

  const usernameData = "MovieLover724";
  const userTitleData = "Movie Was Worth A Watch!";
  const test = "";
  const [review, setReview] = useState([]);
  const [review_2, setReview_2] = useState("");
  const [review_3, setReview_3] = useState("");
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(3);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`api/review/find/${a}/`);
        setReview(response.data);


      const response_2 = await axios.get(`/api/review/find/${b}/`);
        setReview_2(response_2.data);


      const response_3 = await axios.get(`/api/review/find/${c}/`);
        setReview_3(response_3.data);

      //console.log(response)
    }
    getData();
  }, [likeCount,dislikeCount,userData,a, b, c]);


  const  sendThumbsUpInc_1 = async (e) => {
    e.preventDefault();

    try{
      await axios.put(`/api/review/updatethumbsup/${review.id}`, );
      setLikeCount(likeCount+1);
      console.log("REVIEW ID: " + review.id)
      console.log("REVIEW Likes: " + review.likes)

    }catch (error){
      console.log(error)
    }

  }

  const  sendThumbsDownInc_1 = async (e) => {
    e.preventDefault();

    try{
      await axios.put(`/api/review/updatethumbsdown/${review.id}`, );
      setDislikeCount(dislikeCount+1);
      console.log("REVIEW Dislikes: " + review.review_dislikes)
    }catch (error){
      console.log(error)
    }

  }


  const  sendThumbsUpInc_2 = async (e) => {
    e.preventDefault();

    try{
      await axios.put(`/api/review/updatethumbsup/${review_2.id}`, );
      setLikeCount(likeCount+1);
      console.log("REVIEW_2 ID: " + review_2.id)
    }catch (error){
      console.log(error)
    }

  }


  const  sendThumbsDownInc_2 = async (e) => {
    e.preventDefault();

    try{
      await axios.put(`/api/review/updatethumbsdown/${review_2.id}`, );
      setDislikeCount(dislikeCount+1);
      console.log("REVIEW Dislikes: " + review_2.review_dislikes)
    }catch (error){
      console.log(error)
    }

  }

  const  sendThumbsUpInc_3 = async (e) => {
    e.preventDefault();

    try{
      await axios.put(`/api/review/updatethumbsup/${review_3.id}`, );
      setLikeCount(likeCount+1);
      console.log("REVIEW_3 ID: " + review_3.id)
    }catch (error){
      console.log(error)
    }

  }

  const  sendThumbsDownInc_3 = async (e) => {
    e.preventDefault();

    try{
      await axios.put(`/api/review/updatethumbsdown/${review_3.id}`, );
      setDislikeCount(dislikeCount+1);
      console.log("REVIEW Dislikes: " + review_3.review_dislikes)
    }catch (error){
      console.log(error)
    }

  }

  const styleObj = {
    fontSize: 24,
    fontWeight: "bold",
    color: "White",
  };

  return (
    <div className={"row"}>
      <div>
        <p style={styleObj}> {review.reviewTitle} </p>
        <p style={{ color: "#4A5CFF", fontSize: 14, fontWeight: "bold" }}>
          {" "}
          {usernameData}{" "}
        </p>
        <p style={{ color: "white", fontSize: "12px" }}>{review.reviewText}</p>

        <div className={"row"}>
          <div className={"col-1"}>
            <i
              onClick={sendThumbsUpInc_1}
              style={{ color: "green" }}
              className="fa-regular fa-thumbs-up fa-1xl"
            ></i>
            <p>{review.thumbsUp}</p>
          </div>

          <div className={"col"}>
            <i
              onClick={sendThumbsDownInc_1}
              style={{ color: "red" }}
              className="fa-regular fa-thumbs-down fa-1xl"
            ></i>
            <p>{review.thumbsDown}</p>
          </div>
        </div>


        <p style={styleObj}> {review_2.reviewTitle} </p>
        <p style={{ color: "#4A5CFF", fontSize: 14, fontWeight: "bold" }}>
          {" "}
          {usernameData}{" "}
        </p>
        <p style={{ color: "white", fontSize: "12px" }}>
          {review_2.reviewText}
        </p>

        <div className={"row"}>
          <div className={"col-1"}>
            <i
              onClick={sendThumbsUpInc_2}
              style={{ color: "green" }}
              className="fa-regular fa-thumbs-up fa-1xl"
            ></i>
            <p>{review_2.thumbsUp}</p>
          </div>

          <div className={"col"}>
            <i
              onClick={sendThumbsDownInc_2}
              style={{ color: "red" }}
              className="fa-regular fa-thumbs-down fa-1xl"
            ></i>
            <p>{review_2.thumbsDown}</p>
          </div>
        </div>

        <p style={styleObj}> {review_3.reviewTitle} </p>
        <p style={{ color: "#4A5CFF", fontSize: 14, fontWeight: "bold" }}>
          {" "}
          {usernameData}{" "}
        </p>
        <p style={{ color: "white", fontSize: "12px" }}>
          {review_3.reviewText}
        </p>

        <div className={"row"}>
          <div className={"col-1"}>
            <i
              onClick={sendThumbsUpInc_3
            }
              style={{ color: "green" }}
              className="fa-regular fa-thumbs-up fa-1xl"
            ></i>
            <p>{review_3.thumbsUp}</p>
          </div>

          <div className={"col"}>
            <i
              onClick={sendThumbsDownInc_3}
              style={{ color: "red" }}
              className="fa-regular fa-thumbs-down fa-1xl"
            ></i>
            <p>{review_3.thumbsDown}</p>
          </div>
        </div>

      <div style={{ paddingTop: "30px" }}>
        <i
          onClick={() => {
            setA(a - 3), setB(b - 3), setC(c - 3);
          }}
          style={{ color: "#e1ad0b", paddingBottom:"10%" }}
          className="fa-solid fa-circle-chevron-left fa-2xl"
        ></i>
        <i
          onClick={() => {
            setA(a + 3), setB(b + 3), setC(c + 3);
          }}
          style={{ color: "#e1ad0b", paddingLeft: "100px" }}
          className="fa-solid fa-circle-chevron-right fa-2xl"
        ></i>
      </div>
    </div>
    </div>
  );
}
export default MovieReview;
