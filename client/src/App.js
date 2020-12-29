import './App.css';
import FileUploader from "./components/FileUpload.js"
const  App = () =>{
  return (
    <div className="container">
     <h4 className="display-4 text-center mb-4">
       <i className= "fab fa-react" />
       React File Uploader
     </h4>
     <FileUploader />
   </div>
  );
}

export default App;
