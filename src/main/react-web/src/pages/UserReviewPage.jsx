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


        <div className={"row"} style={{paddingTop:"10%",paddingBottom:"15%"}}>

            <div className={"col"}>

                <h1 className="display-1">MOVIE TITLE</h1>
                <br/>
                <h1 className="display-1">MOVIE POSTER</h1>
                <h1 className="display-3">MOVIE RATING</h1>

                <form action=""> add review </form>

            </div>



            <div className={"col"} style={{paddingLeft:"50px"}}>
                <h1 className="display-1">User Reviews</h1>
                <br/>
                <MovieReview
                    userName={usernameData}
                    reviewTitle={userTitleData}
                    reviewData = {movieDummyData}/>

                <MovieReview
                    userName={usernameData}
                    reviewTitle={userTitleData}
                    reviewData = {movieDummyData}/>

            </div>


                </div>
        );
    }

}


export default UserReviewPage;