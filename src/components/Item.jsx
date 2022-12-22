import React, { useState } from "react";
import { Card, Modal } from "antd";
import Meta from "antd/es/card/Meta";


function Item({ item }) {
  const [open, setOpen] = useState(false);

//handle open model
  const handleOpen=()=>{
    setOpen(false)
  }
  return (
    <>
      <Card
        onClick={() => setOpen(true)}
        hoverable
        
        style={{
          width: 240
        }}
        cover={
          item.media_type === "image" ? (
            <img src={item.url} alt="unavailable" />
          ) : (
            <iframe title={item.title} src={item.url}></iframe>
          )
        }
      >
        <Meta title={item.title} description={ item.date}/>
      </Card>
      <Modal
        title={item.title}
        centered
        open={open}
        width={1200}
        height={1400}
        footer={null}
        onCancel={handleOpen}
      >
        {item.media_type === "image" ? (
          <img src={item.hdurl} alt="unavailable" width={1150} />
        ) : (
          <iframe
            title={item.title}
            src={item.url}
            width={1150}
            height={550}
          ></iframe>
        )}
      </Modal>
    </>
  );
}

export default Item;
