import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBlob,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  storageBucket: "gs://tdgdev.appspot.com",
};
function sortByTimestamp(array) {
    return array.sort((a, b) => {
        const timestampA = new Date(a.timestamp);
        const timestampB = new Date(b.timestamp);
        return timestampB - timestampA; // Sort in descending order (newer data first)
    });
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export const Firebase = async () => {
  console.log(app);
};
export const  updateDocument = async (documentId, newData) => {
    // Reference to the document you want to update
    let docRef = doc(db,"newData",documentId)


    // Update the document
  let result = await    setDoc(docRef, newData, { merge: true })

}

export const  updateClientDetails = async (documentId, newData) => {
    // Reference to the document you want to update
    let docRef = doc(db,"contactDonarList",documentId)


    // Update the document
  let result = await    setDoc(docRef, newData, { merge: true })

}

export const fetchDataLocation = async (location) => {
  console.log("heree")
  const q = query(collection(db, "newData"), where("location", "==", location));

  const querySnapshot = await getDocs(q);
  const fetchedData = [];

  querySnapshot.forEach((doc) => {
    fetchedData.push({ id: doc.id, ...doc.data() });
  });
  return fetchedData;
};
export const fetchDataBasedOnId  = async () =>{

  let AllData = await fetchClientData();
  
  let OwnerAndClientDetails =  AllData.map(async(e)=>{
    if(e.donarId!=undefined){

      let docRef = doc(db,"newData",e.donarId)
      const querySnapshot = await getDoc(docRef);
      let donarDetails = querySnapshot.data();
      return {"client":e,"owner":donarDetails}

    }

  

  })

  return  Promise.all( OwnerAndClientDetails);
}

function sortElementsByTimestamp(elements) {
    return elements.sort((a, b) => {
      try{

        // Compare seconds
        if (a.timestamp.seconds > b.timestamp.seconds) return -1;
        if (a.timestamp.seconds < b.timestamp.seconds) return 1;
        
        // If seconds are equal, compare nanoseconds
        if (a.timestamp.nanoseconds > b.timestamp.nanoseconds) return -1;
        if (a.timestamp.nanoseconds < b.timestamp.nanoseconds) return 1;
        
        // Timestamps are equal
        return 0;
      }
      catch{
        print("error")
        return 0;

      }

    });
}
export const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "newData"));
  const fetchedData = [];
  querySnapshot.forEach((doc) => {
    fetchedData.push({ id: doc.id, ...doc.data() });
  });
  let sortedElements = sortElementsByTimestamp(fetchedData);
  // console.log(sortedElements)
  return sortedElements;
};

export const upLoadData = async (formData) => {
  try {
    const imageUrls = [];
    for (const image of formData.image) {
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);

      const downloadURL = await getDownloadURL(imageRef);
      imageUrls.push(downloadURL);
    }
    const docRef = await addDoc(collection(db, "newData"), {
      name: formData.fullname || "",
      productName: formData.tof || "",
      description: formData.desc || "",
      email: formData.email || "",
      phone:formData.phone || "",
      location: formData.location || "",
      imageUrl: imageUrls,
      date:new Date(),
      status:"hidden"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};


export const uploadContactForm = async (formData) =>{

  try {
    const docRef = await addDoc(collection(db, "contactDonarList"), {
      name: formData.name || "",
      email: formData.email || "",
      phone:formData.phone ||"",
      anyQuestions: formData.question || "",
      donarId:formData.donarId || "",
      date:new Date(),
      status:"newReq"

    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}


export const fetchClientData =  async () =>{

  const querySnapshot = await getDocs(collection(db, "contactDonarList"));
  const fetchedData = [];
  querySnapshot.forEach((doc) => {
    fetchedData.push({ id: doc.id, ...doc.data() });
  });
  return fetchedData;
}