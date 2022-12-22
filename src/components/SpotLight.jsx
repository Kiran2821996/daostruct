import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Typography, Modal, Skeleton } from "antd";

const { Paragraph } = Typography;
const { Meta } = Card;

function SpotLight() {
  const [spotData, setSpotData] = useState();
  const [open, setOpen] = useState(false);
  
//Handle close model
  const handleCancel=()=>{
    setOpen(false)
  }
//Handle open model
  const handleOpen=()=>{
    setOpen(true)
  }

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&thumbs=true"
      )
      .then((res) => {
        setSpotData(res.data);
      });
  }, []);

  return (
    <div className="spotlight">
      {spotData ? (
        <>
          {"----------------------"}
          <Card
            title={spotData.title}
            style={{
              width: 400,
            }}
          >
            <Paragraph ellipsis>{spotData.explanation}</Paragraph>
            <span>-{spotData.copyright}</span>
          </Card>
          {"----------------------"}
          <Card
            onClick={handleOpen}
            footer={null}
            hoverable
            style={{
              width: 230,
            }}
            cover={
              spotData?.media_type === "image" ? (
                <img alt="example" src={spotData.url} />
              ) : (
                <iframe title={spotData.title} src={spotData.url}></iframe>
              )
            }
          >
            <Meta title={spotData.media_type} />
          </Card>
          {"----------------------"}
          <Modal
            title={spotData.title}
            centered
            open={open}
            width={1200}
            height={1400}
            footer={null}
            onCancel={handleCancel}
          >
            <img src={spotData.hdurl} alt="" width={1150} />
          </Modal>
        </>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

export default SpotLight;
