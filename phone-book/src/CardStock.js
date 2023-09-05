import React from 'react'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import IconButton from '@mui/material/IconButton';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const CardStock = (props) => {

  const handlePriority = () => {
    props.handlePriority(props.person.id);
  }

  const handleDelete = () => {
    props.handleDelete(props.person.id);
  }


  return (
    <Card sx={{marginTop: "20px"}}>
      <div className='flex  items-center w-[650px]'>
        <div className='w-[150px]'>
          {props.person.name}
        </div>
        <div className='ml-[20px] w-[150px]'>
          {props.person.number}
        </div>
        <div className='ml-[20px] w-[150px]'>
          {props.person.email}
        </div>
        <div className='ml-[70px] w-[50px]'>
          {
            props.person.priority ? 
            <IconButton onClick={handlePriority}><StarRoundedIcon sx={{color: "#fcba03"}}/></IconButton>
            :
            <IconButton onClick={handlePriority}><StarBorderRoundedIcon sx={{color: "#fcba03"}}/></IconButton>
          }
        </div>
        <div>
          <IconButton onClick={handleDelete}><ClearRoundedIcon sx={{color: "#f04141"}}/></IconButton>
        </div>
      </div>
    </Card>
  )
}

export default CardStock