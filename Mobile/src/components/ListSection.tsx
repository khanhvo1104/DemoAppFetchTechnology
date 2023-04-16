import React from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomText from './CustomText';

export interface ISection {
  title: String;
  desc: String;
  image: any;
}

export interface IListSection {
  title: String;
  data: ISection[];
}

const ListSection = (listSection: IListSection): JSX.Element => {
  return (
    <View>
      <CustomText style={styles.listSectionTitle}>
        {listSection.title}
      </CustomText>
      <FlatList
        horizontal
        data={listSection.data}
        keyExtractor={(item, index) => item.title.toString() + index}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={[
              styles.section,
              styles.shadowProp,
              {paddingLeft: index > 0 ? 0 : 24},
            ]}
            onPress={() => {}}>
            <ImageBackground
              source={{uri: item.image}}
              resizeMode="cover"
              style={styles.sectionImage}
            />
            <View style={styles.sectionInfo}>
              <CustomText style={styles.sectionTitle}>{item.title}</CustomText>
              <CustomText style={styles.sectionDesc}>{item.desc}</CustomText>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listSectionTitle: {
    fontSize: 18,
    lineHeight: 24,
    paddingHorizontal: 24,
    fontWeight: '600',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginRight: 24,
    marginVertical: 24,
  },
  sectionImage: {
    width: '100%',
    height: 120,
  },
  sectionInfo: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#0062FF',
    fontWeight: '600',
  },
  sectionDesc: {
    fontSize: 16,
    lineHeight: 24,
    color: '#92929D',
    width: 200,
    fontWeight: '400',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default ListSection;
