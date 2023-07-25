// import { useNavigation } from "@react-navigation/native";
// import { TextInput ,Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
// import { styles, pickerSelectStyles } from "./style";
// import { ScrollView } from "react-native-gesture-handler";
// import { ContainerTop, ContainerTopRegister } from "../../components/containers";
// import { Colors,Theme } from "../../constants/setting";
// import { useContext, useState, useEffect } from "react";
// import { SizedBox } from 'sizedbox';
// import { Checkbox } from 'react-native-paper';
// import { DonorContext } from "../../contexts/donor/context";
// import { AddressCard2 } from "../address/components/card";

// export function Collection({router}) {
//   const navigation = useNavigation();
//   const [checkString, setCheckedString] = useState([]);
//   const {donorState, donorDispach} = useContext(DonorContext);
//   const [checkedItems, setCheckedItems] = useState([]);
//   const [addressList, setAddressList] = useState([]);

//   const itens = [
//     { label: 'Plástico', value: 'Plástico' },
//     { label: 'Metal', value: 'Metal' },
//     { label: 'Papel', value: 'Papel' },
//     { label: 'Eletrônico', value: 'Eletrônico' },
//     { label: 'Óleo', value: 'Óleo' },
//     { label: 'Vidro', value: 'Vidro' },
//   ];
 
//   const checkBoxTipo = (itens) => {
//     if(checkTipo.includes(itens)){
//       const index = checkTipo.indexOf(itens);
//       if(index != -1){
//         const updatedItens = [...checkTipo];
//         updatedItens.splice(index, 1);
//         setCheckedTipo(updatedItens);
//       }
//     } else{setCheckedTipo([...checkTipo,itens])}
//   }

//   function addAddress(newAddress) {
//     setAddressList([...addressList, newAddress]);
//   }

//   const nextPage = () => {
//     console.log('Navegando para a Página 2');
//     addAddress({
//       title: addressList.title,
//       street: addressList.street,
//       neighborhood: addressList.neighborhood,
//       city: addressList.city,
//       reference: addressList.reference,
//       num: addressList.num,
//       cep: addressList.cep,
//     });
//     navigation.navigate('Collection2', { tipo: checkedItems, endereco: addressList });
//   };

//   const handleCheckboxChange = (value) => {
//     const isChecked = checkedItems.includes(value);
//     if (isChecked) {
//       setCheckedItems(checkedItems.filter((item) => item !== value));
//     } else {
//       setCheckedItems([...checkedItems, value]);
//     }
//   };

//   return (
//       <ScrollView>
//         <ContainerTop/>     
//         <ContainerTopRegister/>
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
//               <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Cadastrar Coleta 1</Text>
//         </View>
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
//               <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Endereço</Text>
//         </View>
//         <View style={styles.containerEdit}>
//         {donorState.address.map((address) => {
//             return (
//               <View style={styles.containerEdit}>
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                 <Checkbox
//                     status={setAddressList.includes(address.title, address.street, address.neighborhood, address.city, address.reference, address.num, address.cep) ? 'checked' : 'unchecked'}
//                     onPress={()=>addAddress(address.title, address.street, address.neighborhood, address.city, address.reference, address.num, address.cep)}
//                     color={'green'}
//                     uncheckColor={'red'}
//                 />
//                 <AddressCard2 address={address} editFn={() => addAddress(address)} key={address}/>
//                 </View>
//               </View>
//             );
//           })}
//         </View>
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
//               <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Tipo de material</Text>
//         </View>
//         <View>
//       {itens.map((item) => (
//         <View
//           key={item.value}
//           style={{ flexDirection: 'row', alignItems: 'center' }}
//         >
//           <Checkbox
//             value={checkedItems.includes(item.value)}
//             onValueChange={() => handleCheckboxChange(item.value)}
//             status={checkedItems.includes(item.value) ? 'checked' : 'unchecked'}
//             onPress={()=>handleCheckboxChange(item.value)}
//             color={'green'}
//             uncheckColor={'red'}
//           />
//           <Text
//             style={{
//               marginLeft: 8,
//               color: checkedItems.includes(item.value) ? 'green' : 'black',
//               fontWeight: checkedItems.includes(item.value) ? 'bold' : 'normal',
//             }}
//           >
//             {item.label}
//           </Text>
//         </View>
//       ))}
//     </View>
//         <SizedBox vertical={30} />
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <TouchableOpacity style={styles.button} onPress={nextPage}>
//           <Text style={styles.text }>Cadastrar</Text>
//         </TouchableOpacity>
//             </View>
//             <SizedBox vertical={30} />
//       </ScrollView>
//   );
// }

import { useNavigation } from "@react-navigation/native";
import { TextInput ,Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { styles, pickerSelectStyles } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { ContainerTop, ContainerTopRegister } from "../../components/containers";
import { Colors,Theme } from "../../constants/setting";
import { useContext, useState, useEffect } from "react";
import { SizedBox } from 'sizedbox';
import { Checkbox } from 'react-native-paper';
import { DonorContext } from "../../contexts/donor/context";
import RNPickerSelect from 'react-native-picker-select';
import { AddressCard2 } from "../address/components/card";

export function Collection({ route }) {
  const navigation = useNavigation();
  const [checkString, setCheckedString] = useState([]);
  const { donorState, donorDispatch } = useContext(DonorContext);
  const [checkedItems, setCheckedItems] = useState([]);

  const itens = [
    { label: 'Plástico', value: 'Plástico' },
    { label: 'Metal', value: 'Metal' },
    { label: 'Papel', value: 'Papel' },
    { label: 'Eletrônico', value: 'Eletrônico' },
    { label: 'Óleo', value: 'Óleo' },
    { label: 'Vidro', value: 'Vidro' },
  ];

  const checkBoxString = (value) => {
    if (checkString.includes(value)) {
      setCheckedString(checkString.filter((item) => item !== value));
    } else {
      setCheckedString([...checkString, value]);
    }
  };

  const nextPage = () => {
    const addressString = checkString.map((addressTitle) => {
      const address = donorState.address.find((item) => item.title === addressTitle);
      return `${address.title}, ${address.street}, ${address.neighborhood}, ${address.city}, ${address.reference}, ${address.num}, ${address.cep}`;
    }).join(";");

    navigation.navigate('Collection2', { tipo: checkedItems, endereco: addressString });
  };

  const handleCheckboxChange = (value) => {
    const isChecked = checkedItems.includes(value);
    if (isChecked) {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
    }
  };

    return (
      <ScrollView>
        <ContainerTop/>     
        <ContainerTopRegister/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 20, fontWeight: 'bold', fontSize: 20 }}>Cadastrar Coleta 1</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Endereço</Text>
        </View>
        <View style={styles.containerEdit}>
         {donorState.address.map((address) => (
           <View key={address.title} style={styles.containerEdit}>
             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Checkbox
                 status={checkString.includes(address.title) ? 'checked' : 'unchecked'}
                 onPress={() => checkBoxString(address.title)}
                 color={Colors[Theme][1]}
                 uncheckColor={Colors[Theme][2]}
               />
               <AddressCard2 address={address} editFn={() => addAddress(address)} key={address.title} />
             </View>
           </View>
      ))}
       </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={{ color: Colors[Theme][2], textAlign: 'left', padding: 15, fontSize: 15 }}>Tipo de material</Text>
        </View>
        <View>
      {itens.map((item) => (
        <View
          key={item.value}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Checkbox
            value={checkedItems.includes(item.value)}
            onValueChange={() => handleCheckboxChange(item.value)}
            status={checkedItems.includes(item.value) ? 'checked' : 'unchecked'}
            onPress={()=>handleCheckboxChange(item.value)}
            color={'green'}
            uncheckColor={'red'}
          />
          <Text
            style={{
              marginLeft: 8,
              color: checkedItems.includes(item.value) ? 'green' : 'black',
              fontWeight: checkedItems.includes(item.value) ? 'bold' : 'normal',
            }}
          >
            {item.label}
          </Text>
        </View>
      ))}
    </View>
        <SizedBox vertical={30} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={nextPage}>
          <Text style={styles.text }>Cadastrar</Text>
        </TouchableOpacity>
            </View>
            <SizedBox vertical={30} />
      </ScrollView>
  );
}
