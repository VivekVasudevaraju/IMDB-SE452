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

            <div style={{paddingTop:"10%",paddingLeft:"670px",paddingBottom:"15%"}}>
                <h1>User Reviews</h1>
                <br/>
                <MovieReview
                    userName={usernameData}
                    reviewTitle={userTitleData}
                    reviewData = {movieDummyData}/>

                <MovieReview
                    userName={usernameData}
                    reviewTitle={userTitleData}
                    reviewData = {movieDummyData}/>

                <MovieReview
                    userName={usernameData}
                    reviewTitle={userTitleData}
                    reviewData = {movieDummyData}/>


            </div>
        );
    }

}


export default UserReviewPage;