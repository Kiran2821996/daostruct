import React, { useState } from "react";
import { Card, Modal } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Item({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card
        onClick={() => setOpen(true)}
        hoverable
        style={{
          width: 240,
          backgroundColor: "black",
          color: "white",
        }}
        cover={
          item.media_type === "image" ? (
            <img src={item.url} alt="unavailable" />
          ) : (
            <iframe title={item.title} src={item.url}></iframe>
          )
        }
      >
        <h4>{item.title}</h4>
        <span>Published @ {item.date}</span>
      </Card>
      <Modal
        title={item.title}
        centered
        open={open}
        width={1200}
        height={1400}
        footer={null}
        onCancel={() => setOpen(false)}
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
