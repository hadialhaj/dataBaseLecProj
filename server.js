require('dotenv').config();         
const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const patientRoutes= require('./routes/userpatient');
const doctorRoutes = require('./routes/userdoctor');
const staffRoutes  = require('./routes/ustaff');
const appointmentRoutes  = require('./routes/uappoint');
const billingRoutes = require('./routes/ubilling');
const collectionRoutes   = require('./routes/ucollection');
const departmentRoutes   = require('./routes/udep');
const laboratoryRoutes   = require('./routes/ulaboratory');
const medicalRecRoutes   = require('./routes/umedicalrecord');
const medicationRoutes   = require('./routes/umedication');

app.use('/models/patients',patientRoutes);
app.use('/models/doctors',doctorRoutes);
app.use('/models/staff', staffRoutes);
app.use('/models/appointments',appointmentRoutes);
app.use('/models/billing', billingRoutes);
app.use('/models/collections',collectionRoutes);
app.use('/models/departments',departmentRoutes);
app.use('/models/laboratory', laboratoryRoutes);
app.use('/models/medical-records', medicalRecRoutes);
app.use('/models/medications', medicationRoutes);

app.get('/', (_req, res) => {
  res.json({ message: 'Hospital Management System API', version: '1.0.0' });
});

app.use((_req, res) => res.status(404).json({ message: 'Route not found' }));

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'dev' && { stack: err.stack })
  });
});


(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');

    const server = app.listen(PORT, () =>
      console.log(`Server listening on port ${PORT}`)
    );

    /* graceful shutdown on Ctrl-C */
    process.on('SIGINT', async () => {
      console.log('\nShutting down gracefully...');
      server.close(() => console.log('HTTP server closed'));
      await mongoose.disconnect();
      process.exit(0);
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
})();