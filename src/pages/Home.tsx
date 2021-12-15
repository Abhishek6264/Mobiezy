import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonLabel } from '@ionic/react';
import { menu, notifications, search} from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="side_manu"> <IonIcon   icon={menu} /><span> My Dashboard</span></IonTitle>
          <IonLabel slot="end" className="extra_icons">
            <IonIcon className="one_icon" icon={search} />
            <IonIcon icon={notifications} />
          </IonLabel>
         
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank dwadwa</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
