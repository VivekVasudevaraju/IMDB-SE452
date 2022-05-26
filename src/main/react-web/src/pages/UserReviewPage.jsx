import react, {Component} from "react"
import MovieReview from "../components/Review/MovieReview";

class UserReviewPage extends Component{


    render() {




        const movieDummyData = " Low expectations were what I had when the trailer first appeared on my phone screen." +
            " I wasn't even interested to watch it till the end. I would roll my eyes on the animation style, its not eye-catching nor it is impressive." +
            "But damnnnnnnn! I wasnt expecting it to be good. Its a feature animated film filled with genuine laughter,comical characters and an above the par plot"

        const usernameData = "MovieLover724"
        const userTitleData = "This Movie Was Better Than Expected"


        return(


        <div className={"row"} style={{paddingTop:"3%"}}>

            <div className={"col-6"}>

                <h1 style={{color:"#F2DB83"}} className="display-3">Moon Knight</h1>
                <br/>
                <img src="https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_QL75_UX380_CR0,0,380,562_.jpg" alt=""/>

                <div style={{paddingTop:"25px"}} className={"row"}>
                    <p style={{fontSize:"38px",paddingLeft:"175px"}} className="col-1">7/10</p>
                    <i style={{color:"#F2DB83",paddingTop:"30px",paddingLeft:"70px"}} className="col-1 fa-regular fa-star fa-2xl"></i>

                </div>



                <form action="">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1"></label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter review title"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1"> </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={"enter movie review"}></textarea>
                    </div>
                    <div style={{paddingTop:"10px"}} className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-success">Submit</button>
                    </div>
                </form>



            </div>



            <div className={"col"} style={{paddingLeft:"80px"}}>
                <h1 className="display-1">USER REVIEWS</h1>
                <br/>
                <MovieReview
                    userName={usernameData}
                    reviewTitle={userTitleData}
                    reviewData = {movieDummyData}/>

                <MovieReview
                    userName={usernameData}
                    reviewTitle={userTitleData}
                    reviewData = {movieDummyData}/>

                <i style={{color:"#F2DB83"}} className="fa-solid fa-circle-chevron-left fa-2xl"></i>
                <i style={{color:"#F2DB83",paddingLeft:"30px"}} className="fa-solid fa-circle-chevron-right fa-2xl"></i>

            </div>



                </div>
        );
    }

}


export default UserReviewPage;