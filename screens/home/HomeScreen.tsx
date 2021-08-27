import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

import SearchBar from 'react-native-search-bar';
import ImageLoad from 'react-native-image-placeholder';

import LoadingIndicator from '../loader';
import { FlickerInfo } from '../../typings';
import { IMG_PREFIX } from '../../config';
import { flickerSearchApi } from '../../endPoints';


const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [flickerList, setFlickerList] = useState<FlickerInfo[]>([]);

  useEffect(() => {
    callFlickerApi()
  }, []);

  const callFlickerApi = async (searchText?: string) => {
    setIsLoading(true)
    const apiResp = await flickerSearchApi(searchText)
    apiResp && setFlickerList(apiResp)
    setIsLoading(false)
  }


  const onSearchDonePress = () => {
    callFlickerApi(searchText)
  }

  const renderImageView = (imgObj: FlickerInfo) => {
    const imgUrl = `${IMG_PREFIX}${imgObj.farm}${'.static.flickr.com/'}${imgObj.server}/${imgObj.id}_${imgObj.secret}.jpg`
    return (
      <ImageLoad
        style={styles.imgContainer}
        loadingStyle={{ size: 'small', color: '#FF954F' }}
        source={{ uri: imgUrl }}
      />
    )
  }

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <SearchBar
            placeholder="Search here"
            onCancelButtonPress={() => setSearchText('')}
            onSearchButtonPress={onSearchDonePress}
            onChangeText={(text) => setSearchText(text)}
          />

          <FlatList
            data={flickerList}
            numColumns={2}
            style={{ width: '100%' }}
            columnWrapperStyle={styles.imgRow}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => renderImageView(item)}
          />
        </View>
      </SafeAreaView>
      <LoadingIndicator isVisible={isLoading} />
    </>
  );

};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingBottom: 115
  },
  imgRow: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF'
  },

  imgContainer: {
    width: '49%',
    height: 250,
    marginVertical: 4
  }
});

export default HomeScreen;
