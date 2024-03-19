import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL,getBlob } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  storageBucket:"gs://tdgdev.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export  const  Firebase = async ()=>{
    console.log(app);
}


export const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, 'newData'));
    const fetchedData = [];
    querySnapshot.forEach((doc) => {
    fetchedData.push({ id: doc.id, ...doc.data() });
    });
    return fetchedData; 

};;


export const upLoadData = async (formData) =>{
        try {
          const imageUrls = [];
          console.log(formData.image,"dein gewew")
          // Loop through each image in the formData
          for (const image of formData.image) {
            // Upload image to Firebase Storage
            console.log('started',image)
            const imageRef = ref(storage, `images/${image.name}`);
            console.log('started 2')
            await uploadBytes(imageRef, image);

            console.log("uploaded");

            // Get the download URL for the uploaded image
            const downloadURL = await getDownloadURL(imageRef);
            console.log(downloadURL)
            imageUrls.push(downloadURL);
          }
          // Add data (including image URL) to Firebase Firestore
          console.log("hereees",{
            name: formData.fullname,
            productName:formData.tof,
            description:formData.desc,
            email: formData.email,
            imageUrl: imageUrls
          })
          const docRef = await addDoc(collection(db, 'newData'), {
            name: formData.fullname,
            productName:formData.tof,
            description:formData.desc,
            email: formData.email,
            imageUrl: imageUrls
          });
          console.log('Document written with ID: ', docRef.id);

    } catch (error) {
      console.error('Error adding document: ', error);
    }
}