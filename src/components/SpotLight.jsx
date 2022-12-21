import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Typography,Modal} from 'antd';
const { Paragraph} = Typography;
const { Meta } = Card;

function SpotLight() {
  const [spotData, setSpotData] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&thumbs=true"
    ).then(res=>{setSpotData(res.data)})
  },[]);
  return(
    <div className="spotlight">
      
      {/* <Card
      title={spotData.title}
      bordered={false}
      style={{
        width: 400,
        height:190
      }}
    >
      <Paragraph  ellipsis>{spotData.explanation}</Paragraph>
      <span>-{spotData.copyright}</span>
     
    </Card>
    <Card
    onClick={() => setOpen(true)}
    hoverable
    style={{
      width: 230,
    }}
    cover={<img alt="example" src={spotData.url} />}
  >
     <Meta description={spotData.media_type} />
  </Card>
  <Modal
        title={spotData.title}
        centered
        open={open}
        width={1200}
height={1400}
       footer={null}
       onCancel={() => setOpen(false)}
      >
      <img src={spotData.hdurl} alt="" width={1150}/>
      </Modal> */}
    </div>
  )
 
}

export default SpotLight;
