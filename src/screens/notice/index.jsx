import { ContainerTopTitle } from "../../components/containers";
import { DonorContext } from "../../contexts/donor/context";
import { UpDateTokenNotification, UpDateNotificationList } from '../../firebase/providers/donor';
import { styles } from "./style";
import { ADDNOTIFICATION } from "../../contexts/donor/types"

import { useState, useEffect, useRef, useContext } from 'react';
import { Text, View, Button, Platform, ScrollView } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { expoConfig } from '../../constants/firebase';
import { ImageCircleDefault } from "../../components/images";
import { Size50, Width } from "../../constants/scales";
import { TextBold } from "../../components/texts";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


// Can use this function below OR use Expo's Push Notification Tool from: https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const num = parseInt(Math.random() * 100)
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: `Você ganhou ${num} pontos`,
    body:  `Pela sua ótima avaliação você conseguiu ${num} pontos. Parabéns!`,
    data: { image: 'https://www.florence.edu.br/wp-content/uploads/2022/08/Imagem-Materia_Dia-do-Cachorro-600x400.png' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync(id, callback) {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync({projectId: expoConfig.projectId})).data;
    UpDateTokenNotification(id, token, callback);

  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export function Notice() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification]   = useState(false);
  const {donorState, donorDispach}        = useContext(DonorContext)
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync(donorState.id, callback).then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      const notfy = {
        title: notification.request.content.title,
        date:  notification.date,
        body:  notification.request.content.body,
        image: notification.request.content.data.image
      }
      UpDateNotificationList(donorState.id, notfy, callback)
      donorDispach({type: ADDNOTIFICATION, payload: notfy})
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  function callback(error){}

  return (
    <View style={styles.container}>
      <ScrollView>
        <ContainerTopTitle title={"Notificações"}/>

        {
          donorState.notifications.reverse().map((notification, index) => {
            return (
              <View style={styles.block} key={index}>
                <View style={styles.row}>
                  <ImageCircleDefault img={{uri: notification.image}} size={Size50*1.5}/>
                  <View style={{width: Width-50-Size50*1.5}}>
                    <TextBold content={notification.title}/>
                    <Text>{notification && notification.body}</Text>
                  </View>
                </View>
              </View>
            );
          })
        }

    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>      
      <Button
        title="Mandar notificação"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      />
    </View>
      </ScrollView>
    </View>
  );
}