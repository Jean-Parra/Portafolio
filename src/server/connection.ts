const mongoose = require('mongoose')

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://usuario_upb:contrasena_upb@cluster0.ya3bz0q.mongodb.net/portafolio?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() =>
        console.log('MongoDB connection established.')
    )
    .catch((error: { message: any; }) => console.log("MongoDB connection failed:", error.message))