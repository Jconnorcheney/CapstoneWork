import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Register: React.FC = () => {

  const [email,setEmail] = useState("")
  const [password, setPassword] = useState ("")
  const [cpassword, setCPassword] = useState("")
  function registerUser(){
      console.log(email,password,cpassword)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput placeholder="Email Address"
         onIonChange={(e: any)=> setEmail(e.target.value)}/>
        <IonInput type="password" placeholder="Password"
        onIonChange={(e: any)=> setPassword(e.target.value)}/>
        <IonInput type="password" placeholder="Confirm Password"
        onIonChange={(e: any)=> setCPassword(e.target.value)}/>
        <IonButton  onClick={registerUser}>Login</IonButton>
        <p>Already registered? <br/> <Link to="/login">Login Here</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Register;