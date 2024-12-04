
// import React, { useState } from 'react';
// import './Getimg.css'; // Import CSS for styling

// const ImageUploader = () => {
//     const [image, setImage] = useState(null);

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setImage(reader.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     return (
//         <div className="image-uploader">
//             <input type="file" accept="image/*" onChange={handleImageChange} />
//             {image && (
//                 <img src={image} alt="Selected" className="displayed-image" />
//             )}
//         </div>
//     );
// };

// export default ImageUploader;


import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export function FileUploadDemo() {
  const [files, setFiles] = useState([]);
  const handleFileUpload = (files) => {
    setFiles(files);
    console.log(files);
  };

  return (
    (<div
      className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>)
  );
}

