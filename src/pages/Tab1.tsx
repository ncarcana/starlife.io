import React, { useState } from 'react';
import { IonFabButton, IonInput, IonButton, IonThumbnail, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { useFirebase } from '../hooks/useFirebase';
import { useHoroscope } from '../hooks/useHoroscope';
const Tab1: React.FC = () => {

  const [date, setDate] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { userLogin } = useFirebase();
 const userDate  = useHoroscope();
  
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome!</IonTitle>
        </IonToolbar>
	<IonThumbnail>
      <img src="assets/pic1.jpeg" />
    </IonThumbnail>
  <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script> 
     
	</IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
	<IonInput value={email} placeholder='Email' type='email' onIonChange={e => setEmail(e.detail.value!)} ></IonInput>
        <IonInput value={password} placeholder='Password' type='password' onIonChange={e => setPassword(e.detail.value!)}></IonInput>
        <IonFabButton onClick={() => userLogin(email,password)}>LOG IN</IonFabButton>
	<h2> Hi! Enter your birthday below </h2>	
		
   <IonInput value={date} placeholder= 'birthday' type='text' onIonChange={d => setDate(d.detail.value!)}></IonInput> 
     <IonButton onClick={() => userDate}>enter</IonButton>
   </IonContent>
    </IonPage>
  );
};

export default Tab1;
