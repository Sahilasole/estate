import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("")

const app= express();

app.listen(4000, () => {
    console.log('Server is running on port 4000!!! ');
    }
);