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
       
      >
        { item.media_type === "image" ? (
            <img src={item.url} alt="unavailable" width={188}  height={100}/>
          ) : (
            <iframe title={item.title} src={item.url} width={188}  height={100}></iframe>
          )}
        <Meta title={item.title} description={ item.date}/>
      </Card>
      <Modal
        title={item.title}
        centered
        open={open}
        footer={null}
        onCancel={handleOpen}
        width={600} 
      >
        {item.media_type === "image" ? (
          <img src={item.hdurl} alt="unavailable"  className="spot_img" />
        ) : (
          <iframe
            title={item.title}
            src={item.url}
            className="spot_frame"
          ></iframe>
        )}
      </Modal>
    </>
  );
}

export default Item;
