import React from 'react';
import { camera, trash, close } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow, 
         IonCol, IonImg, IonActionSheet } from '@ionic/react';
import './Tab2.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  const {photos, takePhoto } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
	<h1> Hi, User! </h1>
        <IonGrid>
          <IonRow>
		{photos.map((photo, index) => (
		<IonCol size="3" key="1">
		<IonImg src={photo.base64 ?? photo.webviewPath} />
		</IonCol>
            ))}
	</IonRow>
        </IonGrid>
	<IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
