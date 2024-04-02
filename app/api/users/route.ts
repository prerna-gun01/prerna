// import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const requestUrl = request.url;

  return NextResponse.json({
    message: "Hello from the API",
    request: requestUrl,
  });
}
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'pramodkesarkar2222@gmail.com',  // Your Gmail email address
//       pass: 'kijq omdv gcna djgs',   // Your Gmail password (use an app password for security)
//     },
//   });

// const GET = () =>{
  
//     return Response.json({id: 100, name: 'Jay'});
// }

// export async function GEt(request) {
//   // const user = params.user;
//   return new Response(`hi `);  
// }

// const POST = async () => {
 
//     return Response.json({'message' : 'POST data'});
    
// }


// export {GET};



// try {
//     const { email } = req.body;
//     console.log(req.body);

 

//     // Compose the email message
//     const mailOptions = {
//       from: 'pramodkesarakar@gmail.com',  // Sender email address
//       to: email,                          // Recipient email address
//       subject: 'Password Reset',          // Email subject
//       html: `
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Password Reset - Thirsty Maart</title>
//         <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
//         <style>
//           body {
//             font-family: 'Montserrat', sans-serif;
//           }
//         </style>
//       </head>

//       <body>
//         <div className='mail' style="margin: 20px; padding: 4px; ">
//           <h2>Thirsty Maart</h2>

//           <p style="font-size: 16px; margin-bottom: 20px;">
//             Dear Thirsty Maart User,
//           </p>

//           <p style="font-size: 16px; margin-bottom: 20px;">
//             We received a request to reset your password. If you did not make this request, you can ignore this email. No
//             changes will be made to your account.
//           </p>

//           <p style="font-size: 16px; margin-bottom: 20px; font-weight: 700;">
//             To reset your password, please click the following Button
//           </p>

          

          
//           <p style="font-size: 16px; margin-top: 20px;">
//             Thank you for using Thirsty Maart.
//           </p>

//           <p style="font-size: 16px; margin-top: 20px;">
//             Best regards,
//             <br />
//             The Thirsty Maart Team
//           </p>

//           <a href="https://thirstymaart.com">
//             <img src="https://thirstymaart.com/api/uploads/category/logo.png" style="width:700px;" />
//           </a>

//         </div>
//       </body>
//     </html>`,
//     };
  

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     res.json({ message: 'Password reset link sent successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }