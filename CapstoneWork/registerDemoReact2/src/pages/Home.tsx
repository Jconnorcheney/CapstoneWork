import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>pRide</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <IonButton routerLink="/login">Login</IonButton>
        <IonButton routerLink="/register" color="secondary">Register</IonButton>
        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};
//good stuff here
export default Home;
