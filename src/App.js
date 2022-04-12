import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(10);
  const loadPost = async () => {
    const response = await axios.get("https://randomuser.me/api/", {
      params: {
        results: page,
      },
    });

    const data = response.data;
    // VER SE DATA QUE VEM DA API É JA EXISTE NO STATE
    
    setPosts([...posts, data]);
  };

  useEffect(() => {
    setLoading(true);
    // loadPost();
    setTimeout(() => {
      loadPost();
      setLoading(false);
    }, 3000);
  }, []);

  function getUsers() {
    setLoading(true);
    // loadPost();
    setTimeout(() => {
      loadPost();
      setLoading(false);
    }, 3000);
  }

  return (
    <>
      <div className="App">
        <Container fluid={true} style={{ padding: "1rem" }}>
          <Row>
            <Col xs={4} md={5}></Col>
            <Col xs={4} md={2} align="center">
              <Button variant="primary" onClick={getUsers}>
                Adicionar
              </Button>
            </Col>
          </Row>
          <Row align="center">
            <Col className="p-5">{loading ? <h4>Loading...</h4> : ""}</Col>
          </Row>
          <Row>
            {posts
              ? posts.map((el) => {
                  return el.results.map((val) => {
                    return (
                      <Col xs={4} md={2}>
                        <User user={val} />
                      </Col>
                    );
                  });
                })
              : ""}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
