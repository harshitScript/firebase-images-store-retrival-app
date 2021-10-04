import "./App.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./Firebase";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [downloadedImage, setDownloadedImage] = useState("");

  const imageDownloadHandler = (e) => {
    e.preventDefault();
    const downloadImageRef = ref(
      storage,
      `profile-pictures/${"userNameProfilePic"}`
    );
    getDownloadURL(downloadImageRef).then((url) => {
      setDownloadedImage(url);
    });
  };

  const fileChangeHandler = (e) => {
    setLoading(true);
    console.log("file Changed ");

    // Areference to the image stored in the profile-pictures folder
    const userProfilePicRef = ref(
      storage,
      `profile-pictures/${"userNameProfilePic"}`
    );

    // . parent method (Navigate one level up)
    // .root method (navigate all the way to top)
    //const profilePicFolderRef = userProfilePicRef.parent;

    // The .fullPath , .name , .bucket properties can be used get full-path , name or the bucket details about thye file
    const fullPathToUserImage = userProfilePicRef.fullPath;
    console.log(`fullPathToUserImage = ${fullPathToUserImage}`);
    const nameOfUserImage = userProfilePicRef.name;
    console.log(`nameOfUserImage = ${nameOfUserImage}`);
    const bucketInWhichUserIamgeIsStored = userProfilePicRef.bucket;
    console.log(
      `bucketInWhichUserIamgeIsStored = ${bucketInWhichUserIamgeIsStored}`
    );

    // While the file names are the same, the references point to different files
    //mountainsRef.name === mountainImagesRef.name;           // true
    //mountainsRef.fullPath === mountainImagesRef.fullPath;   // false

    uploadBytes(userProfilePicRef, e.target.files[0])
      .then((snapShot) => {
        console.log("SnapShot : ");
        console.log(snapShot);
        alert("image uploaded");
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error occured while uploading the file.");
        setLoading(false);
      });
  };
  return (
    <div className="App">
      <h1>Images store Retrivel</h1>
      <form>
        {!loading && (
          <input
            type="file"
            accept=".png,.jpg"
            onChange={fileChangeHandler}
            placeholder="Select a File"
          />
        )}
        {loading && <span>uploading...</span>}
        <button onClick={imageDownloadHandler}>Download image</button>
        <img
          src={downloadedImage}
          alt="to be downloaded"
          width="100%"
          height="500vh"
          loading="lazy"
        />
      </form>
    </div>
  );
}

export default App;

// https://firebase.google.com/docs/storage/web/upload-files (For more upload features)
