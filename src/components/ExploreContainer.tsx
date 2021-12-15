/* eslint-disable react/style-prop-object */
import { IonCard, IonCardContent, IonAvatar, IonChip, IonLabel,
  IonIcon,
  IonGrid, 
  IonRow, 
  IonCol,
  IonItem, } from '@ionic/react';
import {  warning, chevronForward, handLeft, analytics, documents, card, personAdd, person, star, starHalf } from 'ionicons/icons';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const myStyle = {
    marginTop: "-90px",
    // marginLeft: "30px",
    fontWeight: "bolder",
    fontSize: "6rem"
  };
  
  return (
    <div className="body_container">
      <div className="sub_container">
            <IonAvatar slot="start" className="user_profile">
              <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=130" alt="user profile pic" />
            </IonAvatar>
        <p>Hello, Malik</p>
      </div>
      <div className="my_policies">
        <div>
          <span>My Policies (03)</span><a href="__">Show All</a>
        </div>
        <div className="policy_cards">
          <div className="cards_row">
            <IonCard className="main_cards">
                <IonCardContent>
                  <IonChip className="due_chip" outline color="danger">
                    <IonIcon icon={warning} color="danger"></IonIcon>
                    <IonLabel>A Premium Due</IonLabel>
                  </IonChip>
                  <IonLabel className="pay_now">Pay Now <IonIcon icon={chevronForward} color="danger"></IonIcon></IonLabel>
                  <p>MSPP Wealth Plan</p>
                  <div>
                    <IonGrid>
                      <IonRow>
                        <IonCol>
                          Policy No
                          <IonRow><b>ASD3421</b></IonRow>
                        </IonCol>
                        <IonCol>
                          Due Date
                          <IonRow><b>27/11/2021</b></IonRow>
                        </IonCol>
                        <IonCol>
                          Amount Due
                          <IonRow><b>Rs 8,000</b></IonRow>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </div>
              </IonCardContent>
            </IonCard>
            <IonCard className="main_cards">
                <IonCardContent>
                  <IonChip className="due_chip" outline color="danger">
                    <IonIcon icon={warning} color="danger"></IonIcon>
                    <IonLabel>A Premium Due</IonLabel>
                  </IonChip>
                  <IonLabel className="pay_now">Pay Now <IonIcon icon={chevronForward} color="danger"></IonIcon></IonLabel>
                  <p>MSPP Wealth Plan</p>
                  <div>
                    <IonGrid>
                      <IonRow>
                          <IonCol>
                            Policy No
                            <IonRow><b>ASD3421</b></IonRow>
                          </IonCol>
                          <IonCol>
                            Due Date
                            <IonRow><b>27/11/2021</b></IonRow>
                          </IonCol>
                          <IonCol>
                            Amount Due
                            <IonRow><b>Rs 8,000</b></IonRow>
                          </IonCol>
                        </IonRow>
                    </IonGrid>
                  </div>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </div>

       {/* Service List */}
      <div className="my_services">
        <div>
          <span><b>Services</b></span><a href="__">Show All</a>
        </div>
        <div className="service_cards">
          <div className="service_btn">
            <div><IonIcon style={myStyle} color="primary" icon={handLeft} ></IonIcon><br/>Buy Now</div>
            <div><IonIcon style={myStyle} color="primary" icon={documents} ></IonIcon><br/>Downlad Documents</div>
            <div><IonIcon style={myStyle} color="primary" icon={analytics} ></IonIcon><br/>Fund Value</div>
            </div>
            <div className="service_btn">
            <div><IonIcon style={myStyle} color="primary" icon={card} ></IonIcon><br/>Pay Premium</div>
            <div><IonIcon style={myStyle} color="primary" icon={person} ></IonIcon><br/>Frequency Change</div>
            <div><IonIcon style={myStyle} color="primary" icon={personAdd} ></IonIcon><br/>Upadate Personal</div>
          </div>
        </div>
      </div>

      <div className="feature_plans">
        <div>
          <span><b>Feature Plans for you</b></span><a href="__">Show All</a>
        </div>
        <div className="feature_cards">
          <div className="feature_row">
            <IonCard className="feature_main">
                <IonCardContent>
                  <IonChip className="due_chip" outline color="primary">
                    <IonLabel>Term Plan</IonLabel>
                  </IonChip>
                  <p>MSPP Wealth Plan</p>
                  <div>
                    <IonIcon color="warning" icon={star} ></IonIcon>
                    <IonIcon color="warning" icon={star} ></IonIcon>
                    <IonIcon color="warning" icon={star} ></IonIcon>
                    <IonIcon color="warning" icon={star} ></IonIcon>
                    <IonIcon color="warning" icon={starHalf} ></IonIcon>
                  </div>
                  <p>This is just a random text that say blah blah blah</p>
              </IonCardContent>
            </IonCard>
            <IonCard className="feature_main">
                <IonCardContent>
                  <IonChip className="due_chip" outline color="primary">
                    <IonLabel>Term Plan</IonLabel>
                  </IonChip>
                  <p>MSPP Wealth Plan</p>
                  <div>
                    <IonIcon color="warning" icon={star} ></IonIcon>
                    <IonIcon color="warning" icon={star} ></IonIcon>
                    <IonIcon color="warning" icon={star} ></IonIcon>
                    <IonIcon color="warning" icon={star} ></IonIcon>
                    <IonIcon color="warning" icon={starHalf} ></IonIcon>
                  </div>
                  <p>This is just a random text that say blah blah blah</p>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </div>
      <div className="my_ads">
          <IonCard className="ad_card">
            {/* <IonCardHeader>Item Thumbnail</IonCardHeader> */}
            <img alt="diawd" height="100px" width="100px" src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202106/invest_house_1200_250621082135.jpg?size=948:533" /> 
               <IonItem lines="none">
                  <h5 className="heading">Insure your financial wellbeing from safety of your home</h5>
                </IonItem>
              <IonCardContent>
                <p>Another random text that reads the same as above ie blah blah blah</p>
                
            </IonCardContent>
          </IonCard>
        </div>   
    </div>
  );
};

export default ExploreContainer;
