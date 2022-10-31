import React, { useState } from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useSpeechRecognition } from 'react-speech-kit';
import { toast } from 'react-toastify';
import { mayList } from './Databases';

function Home() {
  const [value, setValue] = useState('');
  const [CurrentObject, setCurrentObject] = useState({
    id: 1,
    url: "https://drawreactor.ru/wp-content/uploads/2017/04/how-to-draw-apple-demo.jpg",
    name: "Olma"
  });
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  const clicked = (data) => {
    console.log("salom");
    setCurrentObject(data);
    // data
  }

  const stoped = () => {
    if (CurrentObject.name.toLocaleLowerCase() == value.toLocaleLowerCase()) {
      toast.success("Mos keldi");
    } else {
      toast.error("Mos kelmadi");
    }
    stop();
  }

  return (
    <div>
      {/* <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onMouseDown={() => listen({ interimResults: true, lang: "uz-UZ" })} onMouseUp={stop}>
        🎤
      </button> */}
      {listening && <div>O'chirish uchun qo'yib yuboring</div>}

      <Container>
        <Row>
          <Col xs={4} >
            <div>
              {
                mayList.map((item, index) =>
                  <div key={index} style={{ padding: 10 }} >
                    <Card style={{ width: '100%', padding: 10 }} onClick={() => clicked(item)}>
                      <Card.Img variant="top" src={item.url} width={'100%'} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          {item.name}
                        </Card.Text>
                        {/* <Button variant="light">🎤</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                )
              }
            </div>
          </Col>
          <Col xs={8}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={CurrentObject.url} width={'100%'} />
              <Card.Body>
                <Card.Title>{CurrentObject.name}</Card.Title>
                <Card.Text>
                  {CurrentObject.name}
                </Card.Text>
                <Button variant="light" onMouseDown={() => listen({ interimResults: true, lang: "uz-UZ" })} onMouseUp={stoped}>🎤</Button>
                {listening && <div>O'chirish uchun qo'yib yuboring</div>}
                <h1>{value}</h1>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Home