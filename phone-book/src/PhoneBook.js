import React, { useState } from 'react'
import CardStock from './CardStock';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { v4 as uuid } from 'uuid';

const PhoneBook = () => {

    const [people, setPeople] = useState([]);

    const [userName, setName] = useState('');
    const [userNumber, setNum] = useState('');
    const [userEmail, setEmail] = useState('');

    const [openModal, setOpenModal] = useState(false);

    const handleAdd = () => {
        setOpenModal(true);
    }

    const handleDelete = (id) => {
        let temp = [...people];
        for(let i = 0; i < people.length; i++) {
            if(temp[i].id == id) {
                temp.splice(i, 1);
                break;
            }
        }
        setPeople(temp);
    }

    const handlePriority = (id) => {
        let temp = [...people];
        for(let i = 0; i < people.length; i++) {
            if(temp[i].id == id) {
                temp[i].priority = !temp[i].priority;
                break;
            }
        }
        setPeople(temp);
    }


  return (
    <>
    {openModal ? 
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ width: 350 }}
        >
          <Typography id="basic-modal-dialog-title" level="h2">
            Add Person
          </Typography>
          <Typography id="basic-modal-dialog-description">
            Fill in the information of the user.
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const myId = uuid();
              setOpenModal(false);
              setPeople([...people, {
                name: userName,
                number: userNumber,
                email: userEmail,
                priority: false,
                id: myId
              }]);

              setName('');
              setNum('');
              setEmail('');
            }}
          >
            <Stack spacing={1}>
              <div className='flex gap-[20px]'>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input onChange={(e) => setName(e.target.value)} value={userName} sx={{width: "150px"}}  required />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input onChange={(e) => setNum(e.target.value)} value={userNumber} sx={{width: "135px"}} required />
              </FormControl>
              </div>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input onChange={(e) => setEmail(e.target.value)} value={userEmail} required />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
:
    <div className='flex flex-col items-center mt-[50px]'>
        <Button onClick={handleAdd} variant="solid" color='primary' sx={{ width: "200px", justifyContent: "space-around", marginBottom: "30px"}}>Add Person <AddRoundedIcon /></Button>
        <div className='overflow-auto h-[65vh] '>
        {
            people.map((person) => {
                return <CardStock handlePriority={handlePriority} handleDelete={handleDelete} person={person}/>
            })
        }
        </div>
    </div>
    }
    </>
  )
}

export default PhoneBook