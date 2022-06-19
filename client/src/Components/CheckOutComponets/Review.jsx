import React from 'react';
import { useSelector } from "react-redux";
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = () => {
    const cart = useSelector(state => state.cart);
    <>
        <Typography variant="h6" gutterBottom>Order summary</Typography>
    </>
};

export default Review;