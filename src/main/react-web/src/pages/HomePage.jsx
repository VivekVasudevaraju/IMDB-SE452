import React, { useEffect } from "react";
import { useResource } from "react-request-hook";
import { Container, Card, Row, Col } from "react-bootstrap";
import Movie from  "../components/Movies/Movie";

const HomePage = () => {

  return (
    <header className="App-header">
      <Container>
        <h4 style={{ padding: '1em 0em 1em 0em' }}>Fan favorite</h4>
        <Row>
          <Col>
            <Movie title="Doctor Strange" imageUrl="https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX380_CR0,0,380,562_.jpg" rating="7.4"/>
          </Col>
          <Col>
            <Movie title="Moon knight" imageUrl="https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_QL75_UX380_CR0,0,380,562_.jpg" rating="7.5"/>
          </Col>
          <Col>
            <Movie title="The Batman" imageUrl="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_QL75_UX380_CR0,0,380,562_.jpg" rating="8.0"/>
          </Col>
          <Col>
            <Movie title="NorthMan" imageUrl="https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_QL75_UX380_CR0,0,380,562_.jpg" rating="7.6"/>
          </Col>
        </Row>
        <h4 style={{ padding: '1em 0em 1em 0em' }}>Top picks</h4>
        <Row>
          <Col>
            <Movie title="Uncharted" imageUrl="https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg" rating="6.4"/>
          </Col>
          <Col>
            <Movie title="Batman v Superman" imageUrl="https://m.media-amazon.com/images/M/MV5BYzgyMTMzZjUtNGNjMy00NTJjLWIzNDYtMTc2YzQwOGE5MGM4XkEyXkFqcGdeQXVyMTUwODYzMjcw._V1_QL75_UX380_CR0,4,380,562_.jpg" rating="7.3"/>
          </Col>
          <Col>
            <Movie title="Halo" imageUrl="https://m.media-amazon.com/images/M/MV5BYzhlOTkzZDMtNDYxYS00NTY2LWJjZDEtNjI3NmE3MTI2NGU2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_QL75_UX380_CR0,0,380,562_.jpg" rating="7.0"/>
          </Col>
          <Col>
            <Movie title="John Wick 2" imageUrl="https://m.media-amazon.com/images/M/MV5BYzk0MGFlZGMtYTk4ZS00MDFiLWJhNDAtODhmYWI2NmNhZDU4XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg" rating="7.6"/>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HomePage;
