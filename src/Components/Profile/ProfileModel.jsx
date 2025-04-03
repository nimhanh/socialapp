import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 0,
  outline: "none",
  borderRadius: 4
};

const inputStyle = {
  marginBottom: '16px',
  width: '100%',
  "& .MuiOutlinedInput-root": {
    borderRadius: '8px',
    backgroundColor: '#f5f5f5'
  }
};

export default function ProfileModel({open, handleClose}) {
  const [uploading, setUploading] = React.useState(false);
  
  const handleSubmit = (values) => {
    console.log("handle submit",values);
    handleClose();
  }

  const formik = useFormik({
    initialValues: {
      fullName: "",
      website: "",
      location: "",
      bio: "",
      backgroundImage: "",
      image: ""
    },
    onSubmit: handleSubmit,
  });

  const handleImageChange = (e) => {
    setUploading(true);
    const { name } = e.target;
    const file = e.target.files[0];
    formik.setFieldValue(name, file);
    setUploading(false);
  }

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between p-4'>
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <p className='text-lg font-medium'>Edit Profile</p>
              </div>
              <Button 
                type="submit" 
                sx={{ 
                  color: '#1DA1F2', 
                  textTransform: 'none', 
                  fontWeight: 'bold' 
                }}
              >
                SAVE
              </Button>
            </div>

            <div className='overflow-y-scroll overflow-x-hidden h-[80vh]'>
              <div className='w-full relative'>
                <img
                  className='w-full h-[12rem] object-cover object-center'
                  src="https://cdn.pixabay.com/photo/2023/07/25/19/47/milky-way-8149815_640.jpg" 
                  alt=''
                />
                <input
                  type='file'
                  className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                  onChange={handleImageChange}
                  name='backgroundImage'
                />
                
                {/* Avatar positioned on top of the background image */}
                <div className='absolute -bottom-10 left-6'> 
                  <Avatar  src='http://localhost:3000/home/user.png' 
                    sx={{ 
                      width: 70, 
                      height: 70, 
                      border: '4px solid white',
                      backgroundColor: '#e0e0e0'
                    }}
                  />
                  <input
                    type='file'
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                    onChange={handleImageChange}
                    name='image'
                  />
                </div>
              </div>
              
              <div className='p-4 pt-16 space-y-2'>
                <TextField
                  fullWidth
                  id="fullName"
                  name="fullName"
                  label="fullName"
                  placeholder="Full Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                  helperText={formik.touched.fullName && formik.errors.fullName}
                  sx={inputStyle}
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="bio"
                  name="bio"
                  label="bio"
                  placeholder="Bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                  sx={inputStyle}
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  id="website"
                  name="website"
                  label="website"
                  placeholder="Website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={formik.touched.website && Boolean(formik.errors.website)}
                  helperText={formik.touched.website && formik.errors.website}
                  sx={inputStyle}
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="location"
                  placeholder="Location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={formik.touched.location && Boolean(formik.errors.location)}
                  helperText={formik.touched.location && formik.errors.location}
                  sx={inputStyle}
                  variant="outlined"
                />

                <div className='py-3 border-t border-gray-200 mt-4'>
                  <div className='flex justify-between items-center'>
                    <p className='text-base text-gray-600'>Birth date</p>
                    <p className='text-sm text-blue-500'>Edit</p>
                  </div>
                  <p className='text-base'>October 20, 2003</p>
                </div>

                <div className='py-2 border-t border-gray-200'>
                  <p className='text-base text-blue-500'>Edit Professional Profile</p>
                </div>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}