import { Avatar, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood'; 
import TagFacesIcon from '@mui/icons-material/TagFaces';
// Import TweetCard if it is a separate component
// import TweetCard from '../path-to-TweetCard';

// Dummy TweetCard Component (If you haven't defined it elsewhere)
const TweetCard = () => {
    return (
        <div className="p-4 border rounded-md shadow-md">
            <p>This is a Tweet</p>
        </div>
    );
};

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Text is required"),
});

const HomeSection = () => {
    const handleSubmit = (values) => {
        console.log("values", values);
    };

    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
        },
        onSubmit: handleSubmit,
        validationSchema,
    });

    const handleSelectImage = (event) => {
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image", imgUrl);
    };

    return (
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
            </section>
            <section className='pb-10'>
                <div className='flex space-x-5'>
                    <Avatar
                        alt='username'
                        src='http://res.cloudinary.com/dnowsgos/image/upload/v1690639851/instagram%29pos%2Fbywtgp0vjde80aywstss.png'
                    />
                    <div className='w-full'>
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <input
                                    type='text'
                                    name='content'
                                    placeholder='What is happening?'
                                    className='border-none outline-none text-xl bg-transparent'
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

                                    <div>
                                        <Button
                                            sx={{
                                                width: "100%",
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
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section>
            {[1,1,1,1,1].map((item) => <TweetCard />)}
            </section>
        </div>
    );
};

export default HomeSection;
