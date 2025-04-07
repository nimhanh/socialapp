import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood'; 
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  borderRadius: 4,
};

export default function ReplyModal({ handleClose, open }) {
  const navigate = useNavigate();
  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");

  const handleSubmit = (values) => {
    console.log("handle submit", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      twitId: 4
    },
    onSubmit: handleSubmit
  });

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col space-y-4">
            {/* Original tweet being replied to */}
            <div className="flex space-x-3">
              <Avatar
                onClick={() => navigate(`/profile/6`)}
                className="cursor-pointer"
                alt="username"
                src="http://localhost:3000/home/user.png"
              />
              <div className="w-full">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Gangul Ranaweera</span>
                  <span className="text-gray-600">@gangulr</span>
                  <span className="text-gray-500">· 2m</span>
                  <VerifiedIcon className="text-blue-500" fontSize="small"/>
                </div>
                <Typography variant="body1" className="mt-1">
                  twitter clone - full stack<br />
                  project with spring<br />
                  boot and react
                </Typography>
                <Typography variant="body2" className="mt-2 text-gray-500">
                  Replying to <span className="text-[#1d9bf0]">@gangulr</span>
                </Typography>
              </div>
            </div>

            {/* Reply form */}
            <div className="flex space-x-5">
              <Avatar
                alt='username'
                src='./home/user.png'
              />
              <div className="w-full">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input
                      type='text'
                      name='content'
                      placeholder='What is happening?'
                      className='border-none outline-none text-xl bg-transparent w-full'
                      {...formik.getFieldProps("content")}
                    />
                    {formik.errors.content && formik.touched.content && (
                      <span className='text-red-500'>{formik.errors.content}</span>
                    )}
                  </div>
                  <div className='flex justify-between items-center mt-5'>
                    <div className='flex space-x-5 items-center'>
                      <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                        <ImageIcon className='text-[#1d9bf0]' />
                        <input
                          type="file"
                          name='imageFile'
                          className='hidden'
                          onChange={handleSelectImage}
                        />
                      </label>
                      <FmdGoodIcon className="text-[#1d9bf0]" />
                      <TagFacesIcon className='text-[#1d9bf0]' />
                    </div>
                    <Button
                      sx={{
                        borderRadius: "29px",
                        py: "8px",
                        px: "20px",
                        bgcolor: "#1d9bf0",
                      }}
                      variant="contained"
                      type="submit"
                    >
                      Tweet
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}