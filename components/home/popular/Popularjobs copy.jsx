import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native'
import { useRouter } from "expo-router";


import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants';
import PopularJobCard from './../../common/cards/popular/PopularJobCard';
import usefetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  
  const {data, isLoading, error} = usefetch
  ('search',{
    query: 'React Developer',
    num_pages: '1',
  });

  const [selectedJob, setSelectedJob] = useState()

  const handleCardPress = (item) => {

  }
  // console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>   
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all </Text>
        </TouchableOpacity>     
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors ={COLORS.primary}/>
        ): error ?(
          <Text>Something went wrong</Text>
        ) :(
          <FlatList 
            data = {[1,2,3,4 ]}
            renderItem={({item})=>(
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}

      </View>
    </View>
  )
}

export default Popularjobs