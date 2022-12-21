import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

function X7Item({data}) {
  return (
    <div className='card_item'>{data.map(item=>{
        return(
            <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={item.media_type==="image"?<img src={item.url}/>: <iframe title={item.title} src={item.url}></iframe>}
          >
          </Card>
        )
       
    })}</div>
  )
}

export default X7Item