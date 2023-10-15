import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import UpdateModal from './update';
const App = () => {
  // const [showModal, setShowModal] = useState(false);
  const [showModalup, setShowModalup] = useState(false);
  const [selectedMerchantId, setSelectedMerchantId] = useState(null);

  // const [showalert, setShowalert] = useState(false);
  // const [deleteCon, setDeleteCon] = useState(false);
  // const [adminname, setAdminname] = useState("");
  // const [currentDate, setCurrentDate] = useState(null);
  // const [selectedMerchant, setSelectedMerchant] = useState(null);
  // const [merchants, setMerchants] = useState([]);
  // const [searchQuery, setSearchQuery] = useState(null);
  // const [name, setName] = useState("");
  // const [Bname, setBname] = useState("");
  // const [cperson, setCperson] = useState("");
  // const [balance, setBalance] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [type, setType] = useState("");
 

  // useEffect(() => {
  //   const date = new Date();
  //   setCurrentDate(date.toISOString().split("T")[0]);
  //   const dataString = localStorage.getItem('profile');
  //   console.log(dataString);
  //   if (dataString) {
  //     var data = JSON.parse(dataString);
  //   } else {
  //     console.log('No data found in local storage');
  //   }
  //   setAdminname(data.name);

  //   const token = localStorage.getItem('Authorization');
  //   fetch('/admins/allmerchant/', {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setMerchants(data);
  //       // console.log(data)
  //       setShow(false);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  // const search = async () => {
  //   const data = {
  //     phonenumber: searchQuery,
  //   };
  //   const token = localStorage.getItem('Authorization');
  //   try {
  //     const response = await fetch(`/admins/singlemerchant`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`
  //       },
  //       body: JSON.stringify(data)
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     // Update the state or perform any other necessary actions
  //     // this.$router.go();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const toggleButton = async (merchant) => {
  //   console.log(merchant);
  //   const token = localStorage.getItem('Authorization');
  //   const data = {
  //     isActive: !merchant.isActive,
  //   };
  //   try {
  //     const response = await fetch(`admins/${merchant.isActive ? 'deactivate' : 'activate'}merchant/${merchant.id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`
  //       },
  //       body: JSON.stringify(data)
  //     });
  //     // Handle the response or perform any other necessary actions
  //     // this.$router.go();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleYes = () => {
  //   setDeleteCon(true);
  //   setShowalert(false);
  //   console.log("User clicked Yes");
  //   deleteMerchant();
  // };

  // const handleNo = () => {
  //   setDeleteCon(false);
  //   setShowalert(false);
  //   console.log("User clicked No");
  // };

  // // const handleDelete = (merchant) => {
  // //   setSelectedMerchant(merchant);
  // //   setShowalert(true);
  // // };

  // const deleteMerchant = async () => {
  //   if (deleteCon) {
  //     const token = localStorage.getItem('Authorization');
  //     try {
  //       const response = await fetch(`admins/deletemerchant/${selectedMerchant.id}`, {
  //         method: 'DELETE',
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       });
  //       console.log("Merchant deleted successfully");
  //       // this.$router.go();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  const openModal = () => {
    // setSelectedMerchantId(merchantId);
    setShowModalup(true);
  };

  const closeModal = () => {
    // setShowModal(false);
    setShowModalup(false);
  };
  const handleUpdate = () => {
    openModal();
    console.log("hi there")
  };

  // const submitForm = async () => {
  //   const formData = {
  //     businessname: Bname,
  //     ownername: name,
  //     email: email,
  //     phonenumber: parseInt(phone),
  //     InitialBalance: balance,
  //     merchantType: type,
  //     contactperson: cperson,
  //   };
  //   console.log(formData);
  //   const token = localStorage.getItem('Authorization');
  //   try {
  //     const response = await fetch(`admins/updatemerchant/${selectedMerchant.id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`
  //       },
  //       body: JSON.stringify(formData)
  //     });
  //     // Handle the response or perform any other necessary actions
  //     // this.$router.go();
  //     setShowModalup(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   // Close modal
  //   closeModal();
  // };

  const up = () => {
    if (showModalup) {
      return (
        <div className="modal-overlay">
          {/* Rest of the modal JSX */}
        </div>
      );
    } else if (condition2) {
      return (
        <div className="other-overlay">
          {/* Rest of the other modal JSX */}
        </div>
      );
    } else {
      return (
        <div className="default-overlay">
          {/* Default modal JSX */}
        </div>
      );
    }
  };
  
  console.log("error");

  const merchants = [
    { id: 1, name: "kidus", phone: "0974156202", email: "kid@gmail.com" }
  ];
  return (
    <>
    {up()}
      <div className="container ml-5 mr-2">
        {/* Rest of your code */}
        <hr className="my-4" />
        <div className="mx-3 mt-3">
          <table className="table table-striped text-black">
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
                  className={`bg-${
                    merchant.active ? 'green' : 'red'
                  }-100`}
                >
                  <td>{merchant.id}</td>
                  <td>{merchant.name}</td>
                  <td>{merchant.phone}</td>
                  <td>{merchant.email}</td>
                  <td>
                    <button
                      className="btn btn-success mr-2"
                      onClick={() => handleUpdate()}
                    >
                      Update
                    </button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedMerchantId && (
        <UpdateModal
          open={showModalup}
          onClose={closeModal}
          // merchant={merchants.find((m) => m.id === selectedMerchantId)}
        />
      )}
    </>
  );
};

export default App;

 {/* {showAlert && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="bg-gray-500 w-96 text-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Confirm your action</h2>
            <p>Are you sure?</p>
            <div className="mt-4 flex justify-between">
              <button
                className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleYes}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={handleNo}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )} */}
