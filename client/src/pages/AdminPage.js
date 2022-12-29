import React, { useContext, useEffect, useState } from 'react'
import { fetchAllEmail, fetchUiData, updateUiData, deleteEmailById } from '../api/api';
import { actionType } from '../context/reducer';
import { StateContext } from '../context/StateProvider'
import {motion} from 'framer-motion'
import {getStorage, ref, getDownloadURL, uploadBytesResumable, deleteObject} from 'firebase/storage'
import { storage } from '../config/firebase.config';
import {BiCloudUpload} from 'react-icons/bi'
import {MdDeleteForever} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import '../utils/style.css'


const UploadingUI = (props)=>{
    const {fileUploadingProgress} = props;
    console.log(fileUploadingProgress)
    return(
      <div className='h-full w-full flex justify-center items-center' >
        <div className='h-[15rem] w-[80%] rounded-md flex justify-center items-center'>
          <div className='h-5 w-[80%] rounded-3xl my-auto border border-blue-600 m-auto flex flex-col'>
            <div className={`h-full bg-blue-500 rounded-3xl`} 
            style={{width: `${fileUploadingProgress}%` }} ></div>
            <p className='mt-5 text-blue-500 m-auto font-bold'>
                {`Uploading: ${fileUploadingProgress}%`}
            </p>
          </div>
        </div>
      </div>
    )
  }



const ImageInput = ({manIMG, setManIMG, setIsImageLoading, setImageUploadingProgress})=>{
    
    const {state, dispatch} = useContext(StateContext);
    const {uiData, emails} = state;

    useEffect(()=>{
        fetchAllEmail().then((res)=>{
            dispatch({type: actionType.SET_ALL_EMAIL, emails: res.data});
        });

        fetchUiData().then((res)=>{
            dispatch({type: actionType.SET_UI_DATA, uiData: res.data});
        });
    },[])


    const uploadFile =(e)=>{

        setIsImageLoading(true);

        const uploadItem = e.target.files[0];
        const storageRef = ref(storage, `/Images/${Date.now()}-${uploadItem.name}`);
        const uploadTask = uploadBytesResumable(storageRef, uploadItem);

        uploadTask.on("state_changed", (snapshot)=>{
            setImageUploadingProgress(Math.ceil((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
        },
            (err)=>{
                console.log(err);
            },
                ()=>{
                    getDownloadURL(uploadTask.snapshot.ref).then((imageURL)=>{
                        setManIMG(imageURL);
                        setIsImageLoading(false);
                    })
                }
        )


        fetchAllEmail().then((res)=>{
            dispatch({type: actionType.SET_ALL_EMAIL, emails: res.data});
        });
    }


    const deleteIMG = (image)=>{
        const deleteRef = ref(storage, image);
        deleteObject(deleteRef).then(()=>{
            setManIMG(null);
        })
    }




    return(
        <div className='flex flex-col items-center justify-center h-full'>
            {!manIMG ? (
                <label>
                    <motion.div whileHover={{scale:0.9}} className='flex flex-col items-center justify-center cursor-pointer h-44'>
                        <p className=' text-[3rem] text-blue-600'>
                            <BiCloudUpload />
                        </p>
                        <p className='text-lg text-blue-600 font-bold'>
                            Click here to upload an Image
                        </p>
                    </motion.div>

                    <input
                        type='file'
                        name='upload-file'
                        accept="image/*"
                        className='w-0 h-0'
                        onChange={uploadFile}
                    />

                </label>
            ) : (
                <div className='w-full h-full bg-slate-800 rounded-md'>
                    <img src={manIMG} className='h-full w-full rounded-xl p-1' />
                    <motion.div whileHover={{scale: 1.1}} className='relative bottom-12 w-fit p-1 text-3xl rounded-full left-[1rem] bg-red-600'>
                      <MdDeleteForever onClick={()=>deleteIMG(manIMG)} />
                    </motion.div>
                </div>
            )}
        </div>
    )
}



const AdminPage = () => {

    const {state, dispatch, setActiveAlert, setIsPositive, setAlertData} = useContext(StateContext);
    const {uiData, emails} = state;



    const objectID = uiData? uiData[0]._id : "63ac65bbbf6906e8abffa496";

    const [headingInput, setHeadingInput] = useState('');
    const [manIMG, setManIMG] = useState(null);
    const [isImageLoading, setIsImageLoading] = useState(false);
    const [imageUploadingProgress, setImageUploadingProgress] = useState(0);

    const navigate = useNavigate();

    const updateNewHeading = (objectID)=>{
        if(headingInput){
            const newUiData = {
                heading: headingInput
            }
    
            updateUiData(objectID, newUiData).then((res)=>{
                fetchAllEmail().then((res)=>{
                    dispatch({type: actionType.SET_ALL_EMAIL, emails: res.data});
                });
                navigate('/');
            });

            setHeadingInput('');
            setActiveAlert(true);
            setIsPositive(true);
            setAlertData("Heading updated successfully");
            setTimeout(()=>{
                setActiveAlert(false);
            },3500)
            setTimeout(()=>{
                setAlertData("")
            },3600);
        }else{

            setActiveAlert(true);
            setIsPositive(false);
            setAlertData("Please enter a proper heading");
            setTimeout(()=>{
                setActiveAlert(false);
            },3500)
            setTimeout(()=>{
                setAlertData("")
            },3600);
        }

    


        

    

    }

    const updateImage = (objectID)=>{

        if(manIMG){
            const newImage = {
                imageURL: manIMG
            }
            updateUiData(objectID, newImage).then((res)=>{
                fetchAllEmail().then((res)=>{
                    dispatch({type: actionType.SET_ALL_EMAIL, emails: res.data});
                });
                navigate('/');
            })
    

            
            setActiveAlert(true);
            setIsPositive(true);
            setAlertData("Image updated successfully")
            setTimeout(()=>{
                setActiveAlert(false);
            },3500);
            setTimeout(()=>{
                setAlertData("")
            },3600);
        }else{
            setActiveAlert(true);
            setIsPositive(false);
            setAlertData("This is not a valid Image");
            setTimeout(()=>{
                setActiveAlert(false);
            },3500);
            setTimeout(()=>{
                setAlertData("")
            },3600);
        }


    }



    const deleteEmail =(id)=>{
        deleteEmailById(id).then((data)=>{
            fetchAllEmail().then((res)=>{
                dispatch({type: actionType.SET_ALL_EMAIL, emails: res.data});
            });
        })
    }



    useEffect(()=>{
        fetchAllEmail().then((res)=>{
            dispatch({type: actionType.SET_ALL_EMAIL, emails: res.data});
        });

        fetchUiData().then((res)=>{
            dispatch({type: actionType.SET_UI_DATA, uiData: res.data});
        });
    },[])


    return (
    <div  className='w-[90%] lg:w-[80%] m-auto p-4'>
        <div className=' border bg-slate-900 rounded-md p-2 w-full mb-5'>
            <div className='flex gap-5 lg:gap-2 flex-col lg:flex-row'>
                <div className=' w-full lg:w-[50%]'>
                    <div className='w-full h-64 flex flex-col p-4 gap-5 border border-slate-600 rounded-md'>
                        <h2 className='text-3xl font-bold my-2 text-slate-500'>Update Heading</h2>
                        <input 
                            placeholder='Enter new heading...' 
                            className='pl-2 h-8 rounded-md outline-none border bg-slate-500 border-slate-600 '
                            value={headingInput}
                            onChange={(e)=>setHeadingInput(e.target.value)}
                            />


                    </div>
                    <motion.button 
                        whileHover={{scale: 0.9}}
                        className=' bg-blue-600 text-white p-2 text-xl w-full rounded-md font-bold  mt-5'
                        onClick={()=>updateNewHeading(objectID)}
                        >
                            Update Heading
                    </motion.button>
                </div>

                <div className='w-full lg:w-[50%]'>
                    <div className='w-full h-64 bg-slate-900 rounded-md border border-slate-500'>
                        {isImageLoading ? (
                            <UploadingUI fileUploadingProgress={imageUploadingProgress} />
                        ) : (
                            <ImageInput 
                                manIMG={manIMG} 
                                setManIMG={setManIMG} 
                                isImageLoading={isImageLoading} 
                                setIsImageLoading={setIsImageLoading}
                                imageUploadingProgress={imageUploadingProgress}
                                setImageUploadingProgress={setImageUploadingProgress}
                            />
                        )}
                    </div>
                    <motion.button 
                            whileHover={{scale: 0.9}}
                            className=' bg-blue-600 text-white p-2 text-xl w-full rounded-md font-bold  mt-5'
                            onClick={()=>updateImage(objectID)}
                            >
                                Update Image
                    </motion.button>
                </div>
            </div>

            <div className='flex gap-3'>


            </div>
        </div>

        <div className='overflow-x-scroll rounded-lg w-full'>
            <div className='flex bg-blue-500  justify-between p-3 rounded-t-lg'>
                <h2 className='text-xl font-bold'>Customer Email</h2>
                <h2 className='text-xl font-bold'>Delete</h2>
            </div>
            {emails?.map((elm, i)=>{
                return(
                    <div key={i}>
                        <div  className='flex bg-slate-800 text-slate-200 justify-between w-full p-3 gap-10'>
                            <motion.a whileHover={{scale: 0.98}} href={`mailto:${elm.email}`} className='lg:text-xl font-bold text-white w-[95%] overflow-x-scroll'>{elm.email}</motion.a>
                            <motion.h2 whileHover={{scale: 0.85}} className='text-xl font-bold cursor-pointer '>
                                <MdDeleteForever className='flex text-red-500 text-xl lg:text-3xl' onClick={()=>deleteEmail(elm._id)} />
                            </motion.h2>
                        </div>
                        <hr/>
                    </div>
                )
            })}

        </div>

    </div>
  )
}

export default AdminPage