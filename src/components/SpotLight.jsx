import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Typography, Modal, Skeleton } from "antd";

const { Paragraph } = Typography;
const { Meta } = Card;

function SpotLight() {
  const [spotData, setSpotData] = useState();
  const [open, setOpen] = useState(false);

  //Handle close model
  const handleCancel = () => {
    setOpen(false);
  };
  //Handle open model
  const handleOpen = () => {
    setOpen(true);
  };

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
          <Card
            title={spotData.title}
            style={{
              width: 400,
            }}
            onClick={handleOpen }
          >
            {spotData?.media_type === "image" ? (
              <img alt="example" src={spotData.url} className="spot_img1" />
            ) : (
              <iframe
                title={spotData.title}
                src={spotData.url}
                width={188}
                className="spot_fra1"
                height={93}
              ></iframe>
            )}

            <Paragraph ellipsis>{spotData.explanation}</Paragraph>
            <span>-{spotData.copyright}</span>
          </Card>
          <Modal
            title={spotData.title}
            centered
            open={open}
            width={600}
            footer={null}
            onCancel={handleCancel}
          >
            {spotData?.media_type === "image" ? (
              <img src={spotData.hdurl} alt="" className="spot_img" />
            ) : (
              <iframe
                title={spotData.title}
                src={spotData.url}
                className="spot_frame"
              ></iframe>
            )}
          </Modal>
        </>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

export default SpotLight;
