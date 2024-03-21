import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
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
export const fetchDataLocation = async (location) => {
  const q = query(collection(db, "newData"), where("location", "==", location));

  const querySnapshot = await getDocs(q);
  const fetchedData = [];

  querySnapshot.forEach((doc) => {
    fetchedData.push({ id: doc.id, ...doc.data() });
  });
  return fetchedData;
};
export const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "newData"));
  const fetchedData = [];
  querySnapshot.forEach((doc) => {
    fetchedData.push({ id: doc.id, ...doc.data() });
  });
  return fetchedData;
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
      location: formData.location || "",
      imageUrl: imageUrls,
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
      status:"newReq"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}