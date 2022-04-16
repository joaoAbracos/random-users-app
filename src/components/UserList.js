import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Navbar from "react-bootstrap/Navbar";
function UserList() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(10);

  const loadUser = async () => {
    async function getData() {
      const response = await axios.get("https://randomuser.me/api/", {
        params: {
          results: page,
        },
      });

      let validation = true;
      const data = response.data;
      if (users) {
        users.map((el) => {
          return el.results.map((val) => {
            // verficar
            return data.results.map((e) => {
              if (
                val.name.first === e.name.first ||
                val.picture.thumbnail === e.picture.thumbnail
              ) {
                validation = false;
              }
            });
          });
        });
      }

      if (validation) {
        return { msg: true, data: data };
      }
      if (validation === false) {
        return { msg: false, data: data };
      }
    }
    let datas = await getData();
    while (datas.msg === false) {
      datas = await getData();
    }
    setUsers([...users, datas.data]);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      loadUser();
      setLoading(false);
    }, 2000);
  },[]);

  function getUsers() {
    setLoading(true);
    setTimeout(() => {
      loadUser();
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">🙋 Random Users App</Navbar.Brand>
          </Container>
        </Navbar>
        <Container fluid={true} style={{ padding: "1rem" }}>
          <Row>
            {users
              ? users.map((el) => {
                  return el.results?.map((val) => {
                    return (
                      <Col key={val.phone} xs={4} md={2}>
                        <User user={val} />
                      </Col>
                    );
                  });
                })
              : ""}
          </Row>
          <Row align="center">
            <Col className="p-3">
              {loading ? <Spinner animation="border" variant="primary" /> : ""}
            </Col>
          </Row>
          <Row className="mt-5 mb-3">
            <Col xs={4} md={5}></Col>
            <Col xs={4} md={2} align="center">
              <Button variant="primary" onClick={getUsers}>
                Add 10 users
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default UserList;
