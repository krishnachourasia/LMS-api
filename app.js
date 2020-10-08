const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/erpDB" , {useNewUrlParser: true, useUnifiedTopology: true});


 const studentSchema = new mongoose.Schema({

    //Student Details

    firstName: {
        type: String,
        required: [true, "First Name Required"],
        trim: true
    },

    middleName: {
        type: String,
        trim: true
    },

    lastName: {
        type: String,
        required: [true, "Last Name Required"],
        trim: true
    },

    enrollmentNumber:{
        type: String,
        required: [true, "Enrollment Number Required"],
        trim: true,
        unique: true
    },

    dateOfBirth: {
        type: String,
        required: [true, "Date of Birth Required"],
        trim: true
    },

    gender: {
        type: String,
        required: [true, "Gender Required"],
    },

    bloodGroup: {
        type: String,
        required: [true, "Blood Group Required"]
    },

    nationality: {
        type: String,
        required: [true, "Nationality Required"]
    },

    category: {
        type: String,
        required: [true, "Category Required"]
    },

    aadhaarNumber: {
        type: Number,
        // required: [true, "Aadhaar Required"],
        trim: true,
        unique: true
    },
    
    phoneNumber: {
        type: Number,
        required: [true, "Phone Number Required"],
        trim: true
    },

    alternativePhoneNumber: {
        type: Number,
        trim: true        
    },

    email: {
        type: String,
        required: [true, "Email ID Required"],
        trim: true
    },

    
    // Father's Details

    fathersFirstName: {
        type: String,
        required: [true, "First Name Required"],
        trim: true
    },

    fathersMiddleName: {
        type: String,
        trim: true
    },

    fathersLastName: {
        type: String,
        required: [true, "Last Name Required"],
        trim: true
    },

    fathersMobileNumber: {
        type: Number,
        required: [true, "Phone Number Required"],
        trim: true
    },

    fathersOccupation: {
        type: String,
        required: [true, "Occupation Required"],
        trim: true
    },

    fathersemail: {
        type: String,
        trim: true
    },

    // Mother's Details

    mothersFirstName: {
        type: String,
        required: [true, "First Name Required"],
        trim: true
    },

    mothersMiddleName: {
        type: String,
        trim: true
    },

    mothersLastName: {
        type: String,
        required: [true, "Last Name Required"],
        trim: true
    },

    mothersMobileNumber: {
        type: Number,
        required: [true, "Phone Number Required"],
        trim: true
    }, 

    mothersOccupation: {
        type: String,
        required: [true, "Occupation Required"],
        trim: true
    },

    mothersEmail: {
        type: String,
        trim: true
    },

    //Current Address

    currentHouseNumber: {
        type: String,
        required: [true, "House Number Required"],
        trim: true
    },

    currentColony: {
        type: String,
        required: [true, "Colony Required"],
        trim: true
    },

    currentCity: {
        type: String,
        required: [true, "City Required"],
        trim: true
    },

    currentState: {
        type: String,
        required: [true, "State Required"],
        trim: true
    },

    currentCountry: {
        type: String,
        required: [true, "Country Required"],
        trim: true
    },

    currentPincode: {
        type: Number,
        required: [true, "Pincode Required"],
        trim: true
    },

    //Permanent Address

    permanentHouseNumber: {
        type: String,
        required: [true, "House Number Required"],
        trim: true
    },

    permanentColony: {
        type: String,
        required: [true, "Colony Required"],
        trim: true
    },

    permanentCity: {
        type: String,
        required: [true, "City Required"],
        trim: true
    },

    permanentState: {
        type: String,
        required: [true, "State Required"],
        trim: true
    },

    permanentCountry: {
        type: String,
        required: [true, "Country Required"],
        trim: true
    },

    permanentPincode: {
        type: Number,
        required: [true, "Pincode Required"],
        trim: true
    },


    //10th Standard

    tenthSchoolName: {
        type: String,
        required: [true, "School Name Required"],
        trim: true
    },

    tenthBoardName: {
        type: String,
        required: [true, "Board Name Required"],
        trim: true
    },

    tenthPassingYear: {
        type: Number,
        required: [true, "Passing Year Required"],
        trim: true
    },

    tenthMarksObtained: {
        type: Number,
        required: [true, "Marks Obtained Required"],
        trim: true
    },

    tenthTotalMarks: {
        type: Number,
        required: [true, "Total Marks Required"],
        trim: true
    },

    //12th Standard

    twelvethSchoolName: {
        type: String,
        required: [true, "School Name Required"],
        trim: true
    },

    twelvethBoardName: {
        type: String,
        required: [true, "Board Name Required"],
        trim: true
    },

    twelvethPassingYear: {
        type: Number,
        required: [true, "Passing Year Required"],
        trim: true
    },

    twelvethMarksObtained: {
        type: Number,
        required: [true, "Marks Obtained Required"],
        trim: true
    },

    twelvethTotalMarks: {
        type: Number,
        required: [true, "Total Marks Required"],
        trim: true
    },
   


    //Course Details

    program: {
        type: String,
        required: [true, "Program Required"],
        trim: true
    },

    courseName: {
        type: String,
        required: [true, "Course Name Required"],
        trim: true
    },

    departmentName: {
        type: String,
        required: [true, "Department Name Required"],
        trim: true
    },

    admissionYear:{
        type: Number,
        required: [true, "Admission Year Required"],
        trim: true
    },

    // Student Documents

    studentImage: {
        type: Buffer,
        // required: [true, "Student Image Required"],
        trim: true
    },

    signature: {
        type: Buffer,
        // required: [true, "Signature Required"],
        trim: true
    },

    twelvethMarksheetImage: {
        type: Buffer,
        // required: [true, "12th Marksheet Required"],
        trim: true
    },

    tenthMarksheetImage: {
        type: Buffer,
        // required: [true, "10th Marksheet Required"],
        trim: true
    },

    aadhaarCard:{
        type: Buffer,
        // required: [true, "Aadhaar Card Required"],
        trim: true
    } 
}, {
    timestamps: true
});

 export default studentSchema;


// const Student = mongoose.model("Student", studentSchema);
// //
// const student = new Student({
//
//     firstName: "Himanshu",
//     lastName: "Shrivastava",
//     enrollment_number: '0105CS161028',
//     dateOfBirth: '09/03/1948',
//     gender: 'male',
//     bloodGroup: 'B+',
//     nationality: 'INDIAN',
//     category: 'General',
//     aadharNumber: 123456789123,
//     phoneNumber: 1234567890,
//     email: "something@gmail.com",
//     fathersFirstName: "N K",
//     fathersLastName: "Shrivastava",
//     fathersMobileNumber: "12345678990",
//     fathersOccupation: "ABCD",
//     mothersFirstName: "Kumud",
//     mothersLastName : "Shrivastava",
//     mothersMobileNumber: 8989898989,
//     mothersOccupation: "ABCD",
//     currentHouseNumber: "asdf",
//     currentColony: "Minal",
//     currentCity: "Bhopal",
//     currentState: "M P",
//     currentCountry: "India",
//     currentPincode: 454545,
//     permanentHouseNumber: "asdf",
//     permanentColony: "Minal",
//     permanentCity: "Bhopal",
//     permanentState: "M P",
//     permanentCountry: "India",
//     permanentPincode: 454545,
//     tenthSchoolName: "VHSS",
//     tenthBoardName: "CBSE",
//     tenthPassingYear: 2014,
//     tenthMarksObtained: 46,
//     tenthTotalMarks: 50,
//     twelvethSchoolName: "VHSS",
//     twelvethBoardName: "CBSE",
//     twelvethPassingYear: 2016,
//     twelvethMarksObtained: 46,
//     twelvethTotalMarks: 50,
//     program: "UG",
//     courseName: "BE",
//     departmentName: "CSE",
//     admissionYear: 2016
//
//
// });
//
// student.save((error) => {
//     if (error) {
//         return console.log(`something went wrong : ${error}`);
//     }
//     console.log('Document saved successfully !');
// });
//
