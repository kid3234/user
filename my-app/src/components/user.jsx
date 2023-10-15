import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import PopupModal from '../utils/PopupModal';
import Popup from './popup';

const User = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMerchant, setSelectedMerchant] = useState(null);
  const [chossebtn, setChossbtn] = useState();

  const handleModal = (merchant) => {
    setSelectedMerchant(merchant);
    setShowPopup((prev) => !prev);
    setChossbtn('update');
  };
  const handleModaladd =()=>{
    setShowPopup((prev) => !prev);
    setChossbtn('Add');
  }

  const handleSubmit = (task) => {
    // Handle form submission logic here
    console.log('Submitting task:', task);
  };

  const merchants = [
    { id: 1, name: 'kidus', phone: '0974156202', email: 'kid@gmail.com' }
  ];

  return (
    <>
      <Popup
        showPopup={showPopup}
        handleModal={handleModal}
        handleSubmit={handleSubmit}
        tasks={selectedMerchant}
        chossebtn={chossebtn}
      />

      <div className="font-sans ml-72 overflow-x-hidden">
        <div className="flex items-center justify-between">
          <h1 className="mb-10 ml-20 mt-5 text-xl">WELCOME</h1>
          
          <Button
            className="w-64 mr-2 font-bold text-white bg-blue-900 px-2 py-2 rounded-lg border-none relative"
            onClick={handleModaladd}
          >
            CREATE USER
          </Button>
       
        </div>
        <hr className="h-px my-10 bg-gray-300 border-0 mx-10" />
       
        <hr className="h-px my-10 bg-gray-300 border-0 mx-10" />
      </div>

      <Container className="ml-5 mr-2">
        <hr className="my-4" />
        <div className="mx-3 mt-3">
          <Table striped bordered hover>
            <thead>
              <tr className="bg-gray-200">
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {merchants.map((merchant) => (
                <tr
                  key={merchant.id}
                  className={`bg-${merchant.active ? 'green' : 'red'}-100`}
                >
                  <td>{merchant.id}</td>
                  <td>{merchant.name}</td>
                  <td>{merchant.phone}</td>
                  <td>{merchant.email}</td>
                  <td>
                    <Button
                      variant="success"
                      className="mr-2"
                      onClick={() => handleModal(merchant)}
                    >
                      Update
                    </Button>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default User;