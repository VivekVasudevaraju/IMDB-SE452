import React, {useState,useEffect} from "react"
import MovieReview from "../components/Review/MovieReview";
import axios from "axios";

function UserReviewPage() {
    const apiURL = "api/review/add/"
    const [myReviewTitle,setMyReviewTitle] = useState("")
    const [myReviewData,setMyReviewData] = useState("")


    const  sendDataToAPI = async (e) => {
        e.preventDefault();

        try{
            console.log(myReviewTitle,myReviewData)
            await axios.post(apiURL, {reviewTitle:myReviewTitle,reviewText:myReviewData});
            setMyReviewData(myReviewData + " ");
        }catch (error){
            console.log(error)
        }

    }


    useEffect(() => {
         function postData() {
            setMyReviewTitle(myReviewTitle);
            setMyReviewData(myReviewData);
        }
        postData();
    }, [myReviewTitle,myReviewData])


    function abc(){

    }



        return(


        <div className={"row"} style={{paddingTop:"3%"}}>

            <div className={"col-6"}>

                <h1 style={{color:"#ffcb00"}} className="display-3">Moon Knight</h1>
                <br/>
                <img src="https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_QL75_UX380_CR0,0,380,562_.jpg" alt=""/>

                <div style={{paddingTop:"25px"}} className={"row"}>
                    <p style={{fontSize:"38px",paddingLeft:"175px"}} className="col-1">7/10</p>
                    <i style={{color:"#ffd909",paddingTop:"30px",paddingLeft:"70px"}} className="col-1 fa-regular fa-star fa-2xl"></i>

                </div>



                <form style={{width:"400px"}} action="">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1"></label>
                        <input name={"theReviewTitle"} value={myReviewTitle} onChange={(e)=>setMyReviewTitle(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter review title"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1"> </label>
                        <textarea name={"theReviewData"}  value={myReviewData} onChange={(e)=>setMyReviewData(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={"enter movie review"}></textarea>
                    </div>

                    <div style={{paddingTop:"10px"}} className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button onClick={sendDataToAPI} type="button" className="btn btn-success">Submit</button>
                    </div>
                </form>



            </div>



            <div className={"col"} style={{paddingLeft:"80px"}}>
                <h1 className="display-1">USER REVIEWS</h1>
                <br/>

                <MovieReview
                  reviewTitle={myReviewTitle}
                  reviewData={myReviewData}
                />

                {/*<MovieReview*/}
                {/*  />*/}

                {/*<i style={{color:"#F2DB83"}} className="fa-solid fa-circle-chevron-left fa-2xl"></i>*/}
                {/*<i style={{color:"#F2DB83",paddingLeft:"30px"}} className="fa-solid fa-circle-chevron-right fa-2xl"></i>*/}

            </div>



                </div>
        );


}


export default UserReviewPage;