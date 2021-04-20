import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import React from 'react';
import { setCacheNameDetails } from 'workbox-core';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Route, Router } from 'workbox-routing';

const Login: React.FC = () => {
  
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState ("")
    function loginUser(){
        if(email =="connor@email.com" && password == "12345"){
          
        }
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
        <IonButton onClick={loginUser}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
  
};

export default Login;